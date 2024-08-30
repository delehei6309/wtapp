/**
 * @file api.ts
 * @description 接口总控
 * 
 */
import { serverUrl } from 'src/private/configs';
import { toast } from 'react-hot-toast';
import { session } from './store';
import { SOURCE_PLATFORM } from 'src/private/configs';
/**
 * @description get请求
 * @param {string} path
 * @param {string | string[][] | Record<string, string> | URLSearchParams | undefined} params
 * @returns {Promise<any>}
 */

export const $get = async (path: string, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => {
    const baseUrl = (/http/.test(path) ? path : `${serverUrl}${path}`);
    const url = new URL(baseUrl);
    if(params){
        url.search = new URLSearchParams(params).toString()
    }
    const { system_code, system_token, xinbada_platform_user_id, staff_uuid, user_id, source_platform } = session.get('user') || {};
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'trace_id': Date.now().toString(),
                system_code,
                system_token,
                ...(source_platform == SOURCE_PLATFORM.OPERATE ? { staff_id: staff_uuid} : { user_id: xinbada_platform_user_id || user_id } )
            },
            mode: 'cors', // no-cors, *cors, same-origin cors:允许跨域
            credentials: 'include', // 携带cookie
        });
        if (response.status === 200) {
            return await response.json();
        }
        // 抛出异常
        console.error(response);
        throw new Error(response.statusText);
    } catch (error:any) {
        toast.error('请求出错，请联系管理员！');
        console.error(error);
        throw new Error(error);
    }
}

export const $get2 = async (path: string, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => {
    try {
        const resp = await $get(path, params);
        if (resp.resp_code === 200) {
            return resp.data;
        }
        console.log('resp:', resp)
        toast.error(resp.resp_message);
    } catch {
        // console.error(error);
    }
    return null;
}
/**
 * @description post请求
 * @param {string} path
 * @param {string} method
 * @param {object} json
 * @param {string | string[][] | Record<string, string> | URLSearchParams | undefined} params
 * @returns {Promise<any>}
 */
// 定义枚举类型
export enum methodProps {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export const request = async (path: string, method: methodProps, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => {
    const baseUrl = (/http/.test(path) ? path : `${serverUrl}${path}`);
    const url = new URL(baseUrl);
    if(params){
        url.search = new URLSearchParams(params).toString()
    }
    const { system_code, system_token, xinbada_platform_user_id, staff_uuid, user_id, source_platform } = session.get('user') || {};
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'trace_id': Date.now().toString(),
                system_code,
                system_token,
                ...(source_platform == SOURCE_PLATFORM.OPERATE ? { staff_id: staff_uuid } : { user_id: xinbada_platform_user_id || user_id } )
            },
            mode: 'cors', // no-cors, *cors, same-origin cors:允许跨域
            credentials: 'include', // 携带cookie
            ...(json ? { body: JSON.stringify(json) } : {})
        });
        if (response.status === 200) {
            return await response.json();
        }
        // 抛出异常
        console.error(response);
        throw new Error(response.statusText);
    } catch (error:any) {
        toast.error('请求出错，请联系管理员！');
        console.error(error);
        throw new Error(error);
    }
};
/**
 * @description post请求
 * @param {string} path
 * @param {object} json
 * @param {string | string[][] | Record<string, string> | URLSearchParams | undefined} params
 * @returns {Promise<any>}
 */
export const $post = async (path: string, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => request(path, methodProps.POST, json, params);

// post2 可以直接调用， 不需要再解析resp_code
export const $post2 = async (path: string, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => {
    try {
        const resp = await $post(path, json, params);
        if (resp.resp_code === 200) {
            return resp.data;
        }
        toast.error(resp.resp_message);
        console.log('resp:', resp)
    } catch {
        // console.error(error);
    }
    return null;
}


export const $dele = async (path: string, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => request(path, methodProps.DELETE, json, params);

export const $dele2 = async (path: string, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => {
    try {
        const resp = await $dele(path, json, params);
        if (resp.resp_code === 200) {
            return resp.data;
        }
        toast.error(resp.resp_message);
        console.log('resp:', resp)
    } catch {
        // console.error(error);
    }
    return null;
}


export const $put = async (path: string, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => request(path, methodProps.PUT, json, params);

export const $put2 = async (path: string, json?: object, params?: string | string[][] | Record<string, string> | URLSearchParams | undefined): Promise<any> => {
    try {
        const resp = await $put(path, json, params);
        if (resp.resp_code === 200) {
            return resp.data;
        }
        toast.error(resp.resp_message);
        console.log('resp:', resp)
    } catch {
        // console.error(error);
    }
    return null;
}