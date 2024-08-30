/**
 * 上传图片组件
 * @param {number} width 图片宽度,默认200,高度也会取这个值
 * @param {object} defaultValue 默认值,格式为{file_url:'',unique_file_name:'',bucket_name:''} 反显时使用， 若file_url存在则使用file_url，否则使用unique_file_name去oss获取地址
 * @param {function} onChange 上传成功后的回调,参数为上传成功后的结果
 */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { getOssUrl } from '../../tools/operation';
import upload from '../../tools/upload'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { openPage } from '../../tools/operation';

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
});
// loading
function Loading ({ open }: { open: boolean}){
    return <Backdrop
        sx={{ zIndex: 6, position: 'absolute' }}
        open={open}>
        <CircularProgress color="success" />
    </Backdrop>
}
interface OperationProps {
    open: boolean;
    preview: () => void;
    dele: () => void;
}
// operations
function Operation({ open, preview, dele }: OperationProps){
    return <Backdrop
        sx={{ zIndex: 7, position: 'absolute' }}
        open={open}>
        <IconButton sx={{color: theme => theme.palette.common.white}}
            onClick={preview}>
            <VisibilityOutlinedIcon />
        </IconButton>
        &nbsp; &nbsp;
        <IconButton sx={{color: theme => theme.palette.common.white}} onClick={dele}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
    </Backdrop>
}
type Props = {
    width?: number;
    defaultValue?: {
        file_url?: string;
        unique_file_name?: string;
        bucket_name?: string;
        file_type?: string;
    };
    onChange?: (value: any) => void;
}
export default ({ width = 200, defaultValue, onChange}:Props) => {

    const [image, setImage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            // 为了反显
            if (!defaultValue) {
                return ;
            }
            const { file_url, unique_file_name, bucket_name } = defaultValue;
            if (file_url) {
                setImage(file_url);
                return;
            }
            if (unique_file_name) {
                setImage(await getOssUrl(unique_file_name, bucket_name));
                return;
            }
        })();
    }, [defaultValue]);
    const handleChange = React.useCallback(async (e: { target: {value: string; files: any; }; }) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        setLoading(true);
        const uploadResult = await upload(file);
        setLoading(false);
        if (uploadResult) {
            onChange && onChange(uploadResult);
        }else{
            setImage('');
        }
        e.target.value = '';
    }, [])
    const [operationShow, setOperationShow] = React.useState(false);
    const onDele = React.useCallback(() => {
        setImage('');
        onChange && onChange(null);
    }, [])
    return <Card sx={{ width, height: width, borderStyle: "dashed", mb: 6, position: 'relative'}}
        onMouseEnter={() => { setOperationShow(true) }}
        onMouseLeave={() => { setOperationShow(false) }}>
        <CardActionArea sx={{ height: '100%'}}>
            <Box component="label" width="100%" height="100%" position="absolute" left="0" top="0" zIndex={3} sx={{ cursor: 'pointer'}}>
                <VisuallyHiddenInput type="file" onChange={handleChange} accept='image/png,image/jpg,image/jpeg,image/gif' />
            </Box>
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', p:2}}>
                { image ? <CardMedia sx={{ objectFit: 'contain', width: '100%', height: '100%'}}
                    component="img"
                    image={image}
                    alt="green iguana"
                    /> : <AddOutlinedIcon color="secondary" fontSize="large" />}
            </Box>
        </CardActionArea>
        <Loading open={loading} />
        { image && <Operation open={operationShow} preview={() => {openPage(image)}} dele={onDele} /> }
    </Card>
}