import React, { useState, Fragment, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import upload from 'src/tools/upload';
import { getOssUrl, showLoading } from 'src/tools/operation'
import { toast } from 'react-hot-toast';
import omit from 'lodash/omit';
import { useModal } from 'src/hooks';

type Props = {
    change: (url: any) => void;
}

export default forwardRef(({ change }: Props, ref) => {
    const modal = useModal();
    const inputRef = useRef<any>(null);
    useImperativeHandle(ref, () => ({
        click: () => inputRef.current.click()
    }))
    const onChange = useCallback(async (e: any) => {
        const file = e.target.files[0];
        try {
            showLoading()
            const fileUploadRes = await upload(file)
            if (fileUploadRes && fileUploadRes.unique_file_name) {
                e.target.value = null;
                const file_url = await getOssUrl(fileUploadRes.unique_file_name as string, fileUploadRes.bucket_name)
                change && change({ ...fileUploadRes, file_url })
            }
        } catch (error: any) {
            modal.setLoading(false);
            console.error(error)
            toast.error(error)
        }
    }, [])
    return <input ref={inputRef} type='file' accept="image/png,image/jpg,image/jpeg" hidden onChange={onChange} />
});