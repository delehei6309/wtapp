/**
 * @fileoverview Operation tool.
 */
// import { $get, $post } from "./api";
// import { toast } from 'react-hot-toast';
import SHA1 from 'crypto-js/sha1';
import { isIOS } from "./device";
import { CACHE_OSS_URL } from 'src/private/configs';
import { local } from './store';
import { encrypt, decrypt } from './crypto';
// import { toast } from 'react-hot-toast';
import { $get2 } from './api';
import { format as dateFnsFormat } from "date-fns";
import { chineseDateStr } from 'src/configs/html-and-pdf';
/**
 * @description url to blob
 * @param {string} url
 * @returns {Promise<Blob>}
 */
export const urlToBlob = (url: string): Promise<Blob> => fetch(url).then(res => res.blob());

//获取url中返回参数
export function getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * @description 根据oss存储文件获取 file 的 url
 * @param {string} unique_file_name 文件的唯一标识
 * @param {string} bucket_name bucket_name 为可选参数
 * @returns {Promise<string>}
 */
interface OssUrls {
    [key: string]: string;
}
export async function getOssUrl(unique_file_name: string, bucket_name?: string): Promise<string> {
    let ossUrl: string = '';
    if (CACHE_OSS_URL) {
        const prevOssUrls = local.get(encrypt('ossUrls'));
        const ossUrls: OssUrls = prevOssUrls ? JSON.parse(decrypt(prevOssUrls)) : null
        if (ossUrls?.[unique_file_name]) {
            const expires = parseFloat(getParameterByName('Expires', ossUrls[unique_file_name]));
            const now = Math.floor(Date.now() / 1000); // 当前时间戳秒数
            if (expires - now - 30 >= 0) {
                return ossUrls[unique_file_name];
            }
        }
    }
    const data = await $get2('/xbd/tpl/bucket/files', { unique_file_name, ...(bucket_name ? { bucket_name } : {}) }) as any;
    if (data?.url) {
        if (CACHE_OSS_URL) {
            const prevOssUrls = local.get(encrypt('ossUrls'));
            const ossUrls: OssUrls = prevOssUrls ? JSON.parse(decrypt(prevOssUrls)) : {};
            ossUrls[unique_file_name] = data.url;
            local.set(encrypt('ossUrls'), encrypt(JSON.stringify(ossUrls)));
        }
        ossUrl = data.url;
    }
    return ossUrl;
}

/**
 * @description 在新窗口打开http链接
 * @param {string} url
 */

export const openPage = (url: any): void => {
    if (isIOS) {
        // 在ios中，window.open()会被拦截
        window.location.href = url;
    } else {
        window.open(url);
    }
}

/**
 * @description 生成随机字符串 默认长度为32
 * @param {number} length
 * @returns {string}
 */

export const cryptoRandomString = (length: number = 32): string => {
    const buffer = new Uint8Array(length);
    crypto.getRandomValues(buffer);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const maxPos = chars.length;
    let str = '';
    for (let i = 0; i < length; i += 1) {
        str += chars.charAt(buffer[i] % maxPos);
    }
    return str;
}

/**
 * @description 获取文件后缀名
 * @param {string} filename
 * @returns {string}
 */

export const getFileSuffix = (filename: string): string => {
    const pos = filename.lastIndexOf('.');
    if (pos === -1) return '';
    return filename.substring(pos + 1);
}

// 获取object url
// URL.createObjectURL(file);

// 计算精度丢失 decimaljs

/**
 * @description 手机号中间四位替换成*
 * @param {string} phone
 * @returns {string}
 */

export const phoneToStar = (phone: string): string => {
    if (!phone) return '';
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

// 将路径末尾的斜杠替换为空字符串 removeTrailingSlash
export function removeTrailingSlash(path: string) {
    return path.replace(/\/$/, '');
}


/**
 * @description 页面滚动指定位置 入参为 元素 name 或者 id
 * @param {string} name 元素 name 或者 id
 */

export function scrollToElement(name: string) {
    const element = document.getElementById(name) || document.getElementsByName(name)[0];
    if (element) {
        const rect = element.getBoundingClientRect();
        const distanceToTop = rect.top + window.scrollY;
        console.log(distanceToTop);
        window.scrollTo({
            top: distanceToTop - 100, // 100 为偏移量 顶部导航栏高度
            behavior: 'smooth',
        });
    }
}

/**
 * @description 根绝 react-hook-form 的错误信息 把页面滚动到第一个错误的位置
 * @param {any} errors react-hook-form 的错误信息
 */

export function scrollToError(errors: any) {
    try {
        const firstError = Object.keys(errors)[0];
        if (firstError) {
            scrollToElement(firstError);
        }
    } catch (error) {
        console.error(error);
    }
}

/** 
 * @description 密码加密
 * @param {string} password
 * @returns {string}
 */

export const encryptPassword = (password: string): string => SHA1(password).toString();


/**
 * @description 设置页面标题
 */

export function setPageTitle(title: string) {
    document.title = title
}

export const waitForAnimationFrame = () => new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
        resolve();
    });
})

const entityMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#x60;',
    '=': '&#x3D;',
    '/': '&#x2F;'
};

export function htmlEscape(str: string): string {
    return String(str).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
}



/**
 * htmlstr 转换为 html
 * @param {String} htmlstr
 */

export const strToDocument = (htmlstr: string = '') => {
    const parser = new DOMParser();
    // 将 HTML 字符串解析为 DOM 文档
    const doc = parser.parseFromString(htmlstr, 'text/html');
    return doc.body;
}



// 把date转为想要的格式
const yearChineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const chineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一'];
export const formatDate = (date: Date, format: string): string => {
    if (format === chineseDateStr) {
        const year = dateFnsFormat(date, 'yyyy');
        // const formattedDate = dateFnsFormat(date, 'yyyy年M月d日');
        // 把阿拉伯数字转为中文数字
        const yearArr = year.split('');
        const yearChineseDateArr = yearArr.map((item) => {
            if (!isNaN(Number(item))) {
                return yearChineseNums[Number(item)];
            }
            return item;
        });
        const yearChineseDate = yearChineseDateArr.join('');

        const month = dateFnsFormat(date, 'M');
        const day = dateFnsFormat(date, 'd');
        const monthChineseDate = chineseNums[Number(month)];
        const dayChineseDate = chineseNums[Number(day)];

        return `${yearChineseDate}年${monthChineseDate}月${dayChineseDate}日`;
    }
    return dateFnsFormat(date, format);
}


export function decodeEntities(encodedString: any) {
    const parser = new DOMParser();
    const dom = parser.parseFromString('<!doctype html><body>' + encodedString, 'text/html');
    return dom.body.textContent;
}

export function showLoading() {
    const loadingWrap: any = document.querySelector('#sinbbad-loading-wrap');
    if (loadingWrap) {
        loadingWrap.style.display = 'block';
    }
}

export function hideLoading() {
    const loadingWrap: any = document.querySelector('#sinbbad-loading-wrap');
    if (loadingWrap) {
        loadingWrap.style.display = 'none';
    }
}

// 获取html字符串的真实渲染信息
export function getRenderedtFromHtmlString(htmlString: string) {
    // 创建一个虚拟元素
    const dummyElement = document.createElement('div');
    // 将 HTML 字符串赋值给虚拟元素的 innerHTML
    dummyElement.innerHTML = htmlString;
    // 将虚拟元素追加到 body 中，以确保其在文档中渲染
    document.body.appendChild(dummyElement);
    // 获取虚拟元素的渲染高度，包括绝对定位元素的高度
    let renderedHeight = 0;

    // 遍历所有绝对定位元素，计算其高度并添加到总高度中

    dummyElement.querySelectorAll('[style*="position:absolute"]').forEach((absElement) => {
        const boundingRect = absElement.getBoundingClientRect();
        renderedHeight += boundingRect.height;
    });

    // 添加文档流中的高度
    renderedHeight += dummyElement.offsetHeight;

    // 移除虚拟元素，以防影响文档
    document.body.removeChild(dummyElement);
    return {
        height: renderedHeight
    };
}