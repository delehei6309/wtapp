import { useState, forwardRef, useImperativeHandle } from "react";
import CustomizedDialog from "../CustomizedDialog";
const Demo = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            dialog: (params:any) => {
                setDialogParams(params);
                setOpen(true);
            },
            setDialogOpen: setOpen

        };
    })
    const [dialogParams, setDialogParams] = useState<any>({});
    return <CustomizedDialog
    
        open={open} 
        {...dialogParams}
        handleClose={() => {
            dialogParams?.handleClose?.();
            setOpen(false);
        }} />
})

export default Demo;