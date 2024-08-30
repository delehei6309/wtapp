import * as React from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme, styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    }
}));
type Props = {
    sx?: SxProps<Theme> | undefined;
    open: boolean;
    handleClose: { (event: {}, reason: "backdropClick" | "escapeKeyDown"): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; };
    handleConfirm: { (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; }
    title?: string;
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal;
    confirmText?: string;
    cancelText?: string;
    fullScreen?: boolean;
    isAlert?: boolean;
    isCustomAction?: boolean;
    disableEscapeKeyDown?: boolean;
    disableBackdropClick?: boolean;
}
export default function CustomizedDialogs(props: Props) {
    return <BootstrapDialog sx={props.sx}
        fullScreen={props.fullScreen}
        open={props.open}
        onClose={(e, reason) => {
            if (!((props.disableEscapeKeyDown && reason === 'escapeKeyDown') || (props.disableBackdropClick && reason === 'backdropClick'))) {
                props.handleClose(e, reason)
            }
        }}>
        <DialogTitle sx={{ m: 0, p: 2, pt: 1, pb: 1 }} id="customized-dialog-title">{props.title || '提示'}</DialogTitle>
        {
            props.isAlert ? null : <IconButton size="small"
                aria-label="close"
                onClick={props.handleClose}
                sx={{
                    position: 'absolute',
                    right: 2,
                    top: 3,
                    color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon />
            </IconButton>
        }
        <DialogContent dividers sx={{ minWidth: 230, mb: 1, ...(props.isCustomAction ? {borderBottom: 0} : {}) }}>{props.children}</DialogContent>
        {!props.isCustomAction && <DialogActions>
            {props.isAlert ? null : <Button onClick={props.handleClose}>{props.cancelText || '取消'}</Button>}
            <Button autoFocus onClick={props.handleConfirm}>{props.confirmText || '确认'}</Button>
        </DialogActions>}
    </BootstrapDialog>
}