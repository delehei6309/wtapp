/**
 * @file 合同编辑器
 */
import { Fragment, useEffect, useRef, useState } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import Fields from './Fields';
import ToolsBar from './ToolsBar';
import DroppableBox from './DroppableBox';
import pdfToImage from 'src/tools/pdf-to-image';
import Loading from 'src/components/loading';
import toast from 'react-hot-toast';
import { pdfWidth } from 'src/configs/html-and-pdf';
const singnOptions = [
    {
        value: 'party_a',
        label: '甲方'
    },{
        value: 'party_b',
        label: '乙方'
    },{
        value: 'party_c',
        label: '丙方'
    },{
        value: 'party_d',
        label: '丁方'
    }
]
const fieldList = [
    {
        title: '签署字段',
        value: 'sign-field',
        children: [
            {
                value: 'signature',
                text: '签章',
                width: 176,
                height: 176,
                options: singnOptions,
                disabledResizing: true
            },{
                value: 'sign',
                text: '签字',
                width: 136, 
                height: 40,
                options: singnOptions
            },{
                value: 'paging-seal',
                text: '骑缝章',
                width: 176,
                height: 176,
                options: singnOptions
            }
        ]
    },{
        title: '控件',
        value: 'control-field',
        children: [
            {
                value: 'text',
                text: '文本',
                width: 136,
                height: 40,
            },{
                value: 'date',
                text: '日期',
                width: 136,
                height: 40,
            },{
                value: 'image',
                text: '图片',
                width: 136,
                height: 136,
            }
            // ,{
            //     value: 'table',
            //     text: '动态表格',
            //     width: 136,
            //     height: 136,
            // }
        ]
    }

]
const CanvasDisplay = ({ canvas }: any) => {
    const ref = useRef(null);

    useEffect(() => {
        // @ts-ignore
        ref.current.innerHTML = '';
        // @ts-ignore
        ref.current.appendChild(canvas);
    }, [canvas]);

  return <Box fontSize={0} sx={{'canvas': { width: '100%'}}} ref={ref} />;
};
export default function Component({ pdfUrl, callback }: { pdfUrl: string, callback: (data: any, inputs: any) => void}) {
    const [pdfs, setPdfs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const start = async () => {
        try{
            setLoading(true);
            const canvasItems = await pdfToImage(pdfUrl, 3);
            setPdfs(canvasItems)
        } catch(e){
            toast.error('pdf加载失败');
            console.log(e)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        start();
    }, []);
    const [isDragging, setIsDragging] = useState(false);
    const refd = useRef([]) as any;
    const handleRef = (index: string | number) => (el: any) => {
        refd.current[index] = el;
    };
    // 当前操作的 标签
    const [selectedBox, setSelectedBox] = useState(null);
    // 当前操作页数
    const [num, setNum] = useState(0);

    const [inputs, setInputs] = useState<object>({})
    const [pdfData, setPdfData] = useState<object>({}) // pdf 编辑后的数据

    // 操作栏的change
    const handleChange = (opera:string, param:any) => {
        if(opera === 'dele'){
            // 删除
            refd.current[num-1]?.dele(selectedBox);
        }
        if(opera === 'inputs'){
            // 更新inputs
            setInputs(param)
        }
        if(opera === 'offsetXs'){
            // 更新offsetX
            // @ts-ignore
            const item = param[selectedBox.value];
            if(item){
                // @ts-ignore
                refd.current[num-1]?.updateOffset({ value: selectedBox.value, offsetX: item });
            }
        }
        if(opera === 'offsetYs'){
            // 更新offsetY
            // @ts-ignore
            const item = param[selectedBox.value];
            if(item){
                // @ts-ignore
                refd.current[num-1]?.updateOffset({ value: selectedBox.value, offsetY: item });
            }
        }
        
    }
    useEffect(() => {
        callback(pdfData, inputs);
    }, [pdfData, inputs])
    return <Stack direction="row" height="calc(100% - 52px)">
        <Fields fields={fieldList} onDragging={setIsDragging}  />
        <Box width="calc(100% - 40px)" p={2} overflow="auto">
            <Box width={pdfWidth} margin="0 auto" border={`1px ${isDragging ? 'dashed' : 'solid'}`} borderColor={isDragging ? 'primary.main' : 'divider'} boxSizing="content-box"
                boxShadow={theme => {
                    // @ts-ignore
                    return theme.shadows[8]
                }}>
                {
                    pdfs.map((canvas, index) => <Fragment key={index}>
                        <DroppableBox ref={handleRef(index)} selectedValue={selectedBox}
                            boxChange={prop => {
                                setSelectedBox(prop);
                                setNum(index+1);
                            }}
                            callback={(res: any) => {
                                setPdfData(prev => ({ ...prev, [index+1]: res }))
                            }}><CanvasDisplay canvas={canvas} /></DroppableBox>
                        <Typography component="div" textAlign="right" p={1} bgcolor="#e8e8e8">第{index+1}页共{pdfs.length}</Typography>
                    </Fragment>)
                }
            </Box>
        </Box>
        {/* <Content pdfs={pdfs} isDragging={isDragging} /> */}
        <ToolsBar data={selectedBox} num={num} 
            onChange={handleChange} />
        {/* <Box>
            <Button onClick={() => {
                console.log(refd)
            }}>删除</Button>
        </Box> */}
        <Loading open={loading} />
    </Stack>
}