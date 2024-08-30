import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { FileProps } from '../../tools/types';

import Link from '@mui/material/Link';
import { getOssUrl, openPage } from '../../tools/operation';
interface ExtendedFileProps extends FileProps {
    index: number;
    onDele?: (unique_file_name: string, index: number) => void;
}
const Item = (props: ExtendedFileProps) => {
    const { index, file_name, unique_file_name, bucket_name, file_url, onDele } = props;
    const [hover, setHover] = React.useState(false);
    const onClick = React.useCallback(async () => {
        if(file_url) return openPage(file_url);
        const url = await getOssUrl(unique_file_name, bucket_name);
        url && openPage(url);
    }, [unique_file_name, bucket_name, file_url]);
    // delete
    const onDelete = React.useCallback(() => {
        onDele && onDele(unique_file_name, index);
    }, [onDele]);
    return (
        <ListItem disablePadding
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <ListItemButton sx={{p:0, pr:1}}>
                <ListItemIcon sx={{mr: .5}}>
                    <AttachFileOutlinedIcon fontSize="small" />
                </ListItemIcon>
                 <Link width="100%" color="info.main" className="ellipsis" fontSize={13} onClick={onClick}>{file_name || unique_file_name}</Link>
                <IconButton edge="end" size="small" 
                    sx={{
                        visibility: hover ? 'visible' : 'hidden'
                    }}
                    onClick={onDelete}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </ListItemButton>
        </ListItem>
    )
}

type AttachmentListProps = {
    attachments?: FileProps[],
    onDele?: (unique_file_name: string, index: number) => void
}
export default function({ attachments, onDele }: AttachmentListProps){
    return attachments && attachments.length> 0 ? <List>
            {attachments.map((item, index) => item?.unique_file_name && <Item key={item.unique_file_name} index={index} { ...item } onDele={onDele} />)}
        </List> : null
}