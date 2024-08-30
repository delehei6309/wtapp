/**
 * @description 自定义样式的抽屉
 */

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

type Props = {
    open: boolean;
    handleClose: { (event: {}, reason: "backdropClick" | "escapeKeyDown"): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; };
    handleConfirm: { (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; }
    title?: string;
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal;
    confirmText?: string;
    cancelText?: string;

}
const Component = (props: Props) =>{
    return <Drawer anchor="right"
        open={props.open}
        onClose={props.handleClose}
        sx={{display: 'flex', flexDirection: 'column'}}>
        {props.title ? <Stack direction="row" alignItems="center" pl={4} pt={2} justifyContent="space-between">
            <Typography variant="h6">{props.title}</Typography>
            <IconButton onClick={props.handleClose}>
                <CloseIcon />
            </IconButton>
        </Stack> : null}
        <Divider />
        <Box p={2} flex={1} sx={{overflowY: 'auto'}}>{props.children}</Box>
        <Divider />
        <Stack direction="row" justifyContent="space-around" pb={4} pt={2} >
            <Button variant="outlined" size="medium" onClick={props.handleClose}>{props.cancelText || '取消'}</Button>
            <Button variant="contained" size="medium" onClick={props.handleConfirm}>{props.confirmText || '确认'}</Button>
        </Stack>                     
    </Drawer>
}

export default Component;