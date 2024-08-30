/**
 * OCR 目前有身份证正反面ocr，营业执照ocr， 银行卡ocr
 */

import { $post } from "./api";
import toast from 'react-hot-toast';

/**
 * @description 身份证正面ocr
 * @param {string} unique_file_name
 * @returns {Promise<any>}
 */

export const idCardFrontOcr = async (unique_file_name: string, bucket_name?: string): Promise<any> => {
    try {
        const { is_successful, data, failed_reason } = await $post('operators.id_card_front_ocr') as any;
        if (is_successful) {
            return data;
        } else {
            toast.error(failed_reason);
        }
    } catch (error) {
        console.log(error);
    }
    return '';
}

/**
 * @description 身份证反面ocr
 * @param {string} unique_file_name
 * @returns {Promise<any>}
 */

export const idCardBackOcr = async (unique_file_name: string, bucket_name?: string): Promise<any> => {
    try {
        const { is_successful, data, failed_reason } = await $post('operators.id_card_front_ocr') as any;
        if (is_successful) {
            return data;
        } else {
            toast.error(failed_reason);
        }
    } catch (error) {
        console.log(error);
    }
    return '';
}

/**
 * @description 营业执照ocr
 * @param {string} unique_file_name
 * @returns {Promise<any>}
 */

export const businessLicenseOcr = async (unique_file_name: string, bucket_name?: string): Promise<any> => {
    try {
        const { is_successful, data, failed_reason } = await $post('operators.ocr.license', {unique_file_name}) as any;
        if (is_successful) {
            return data;
        } else {
            toast.error(failed_reason);
        }
    } catch (error) {
        console.log(error);
    }
    return '';
}

// 其他另行添加
