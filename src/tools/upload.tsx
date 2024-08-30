/**
 * @fileoverview Upload fucntion
 */
import toast from "react-hot-toast";
import { $get2 } from "./api";
import { local } from "./store";
import { getFileSuffix, cryptoRandomString } from './operation'
import { UPLOAD_DIR } from "src/private/configs";
//处理max_file_size
//处理min_file_size
function dealFileSize(fileSize: string){
    // 文件大小单位
    const sizeUnits = [ 'k','m','g','t','p','e','z','y' ];
    const size = fileSize.toLowerCase();
    let fileSizeNum = 0;
    for(let i=0;i<sizeUnits.length;i++){
        if(size.indexOf(sizeUnits[i])>-1){
            fileSizeNum = Number(size.substring(0,size.indexOf(sizeUnits[i])));
            return fileSizeNum * Math.pow(1024, i+1);
        }
    }
    return 0;
}
// 获取上传oss的token
async function getUploadToken(){
    const aliyunOss = local.get('aliyunOss');
    const now = Math.floor(Date.now() / 1000); // 当前时间戳秒数
    if(aliyunOss?.expire >= now+30){
        return aliyunOss;
    }
    // 接口请求获取token
    try {
        // 创建一个 Date 对象
        const currentDate = new Date();
        // 获取当前年份
        const currentYear = currentDate.getFullYear();
        const data = await $get2('/xbd/tpl/oss/upload/token', { upload_dir: UPLOAD_DIR ? `${UPLOAD_DIR}${currentYear}` : ''}) as { is_successful: boolean; data: any };
        local.set('aliyunOss', data);
        return data;
    } catch (error) {
        console.error(error);
        // toast.error('获取上传token失败！');
    }
    return null;

}
// 生成oss存储的文件名
function getNewFileName (fileName: string) {
    let suffix = getFileSuffix(fileName);
    let newFileName = (`${cryptoRandomString()}.${suffix}`);
    return newFileName;
};

function getFormData (file: File, aliyunOss: any){
    const { accessid, policy, signature, dir } = aliyunOss;
    const formData = new FormData();
    // console.log(file.name)
    const unique_file_name = `${dir ? dir + '/' : ''}${getNewFileName(file.name)}`;
    formData.append('key', unique_file_name); //存储在oss的文件路径
    formData.append('OSSAccessKeyId',accessid); //accessKeyId
    formData.append('policy', policy); //policy
    formData.append('Signature', signature); //签名

    formData.append('success_action_status', '200'); //成功后返回的操作码
    formData.append('file', file);
    
    return formData;

}
export default async function upload(file: File, {max = '10M', min = '0M', showUrl = false}: {max?: string, min?: string, showUrl?: boolean} = {}) {
    let result = null;
    if(dealFileSize(max) < file.size){
        toast.error(`上传文件最大不能超过${max}！`);
        return null;
    };
    if(dealFileSize(min ) > file.size){
        toast.error(`上传文件最小不能小于${min}！`);
        return null;
    };
    try{
        const aliyunOss = await getUploadToken();
        if(!aliyunOss) return null;
        const { host, bucket_name } = aliyunOss;

        const formData = getFormData(file, aliyunOss);

        const response = await fetch(/http/.test(host) ? host : `${window.location.protocol}//${host}`, {
            method: 'POST',
            body: formData
        });
        if(response.status === 200){
            const urlObject = showUrl ? { file_url: URL.createObjectURL(file) } : {};
            return {
                ...urlObject,
                file_name: file.name,
                file_type: file.type,
                unique_file_name: formData.get('key'),
                bucket_name
            }
        }
        toast.error('上传失败！');
    } catch (error) {
        console.error(error);
        toast.error('上传失败！');
    }
    return null;
}