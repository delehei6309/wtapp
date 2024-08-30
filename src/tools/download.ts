/**
 * 保存[文件]到本地的方法
 */


import { urlToBlob, getOssUrl, openPage } from "./operation";
import JSZip from 'jszip';
import isString from 'lodash/isString';

import { saveAs } from 'file-saver';



/**
 * @description 保存[文件数组]到本地
 * @param {Array<any>} files
 * @param {string} filename 保存到本地的文件名
 * @returns {Promise<void>}
 */
export const saveFiles = async (files: Array<any> , filename?: string ): Promise<any> => {
    try{
        // 一般传入的都是unique_file_name，所以需要转换成url
        const urls = await Promise.all(files.map(file => isString(file) ? getOssUrl(file) : getOssUrl(file.unique_file_name, file.bucket_name || '')));
        if(urls.length > 1){
            // 如果是多个文件，就打包成zip
            const blobs = await Promise.all(urls.map(url => urlToBlob(url)));
            const zip = new JSZip();
            blobs.forEach((blob ,index) => {
                const { file_name = '', unique_file_name } = isString(files[index]) ? { unique_file_name: files[index] } : files[index];
                zip.file(file_name || unique_file_name, blob);
            })
            zip.generateAsync({ type: 'blob' }).then(blob => {
                saveAs(blob, filename || '文件.zip');
            });
            return true;
        }
        // 如果是单个文件，就直接下载
        const url = urls[0];
        const file_name = isString(files[0]) ? '' : files[0].file_name;
        saveAs(url, filename || file_name);
        return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

// 预览文件
export const previewFile = async (file: any):Promise<any> => {
    let http_url = '';
    try{
        http_url = isString(file) ? await getOssUrl(file) : await getOssUrl(file.unique_file_name, file.bucket_name || '');
        openPage(http_url);
    } catch (error) {
        console.log(error);
    }
    return http_url;
}

