/**
 * @description 加解密
 * @param {decrypt} 解密
 * @param {encrypt} 加密
 */
// import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import CFB from 'crypto-js/mode-cfb';
import Pkcs7 from 'crypto-js/pad-pkcs7';

const encryptKey = '8d1a562a2b59b0f1c9a3c5fb7c26046b';
const encryptIV =  '63b6edc4d7c1b6e3';
export const encrypt = (text: string) => {
    const keyUtf8 = Utf8.parse(encryptKey);
    const ivUtf8 = Utf8.parse(encryptIV);
    const encrypted = AES.encrypt(text, keyUtf8, {
        iv: ivUtf8,
        mode: CFB, // 选择适当的模式
        padding: Pkcs7
    });
    return encrypted.toString();
}

  // 解密函数
export const decrypt = (encrypt: string) => {
    const keyUtf8 = Utf8.parse(encryptKey);
    const ivUtf8 = Utf8.parse(encryptIV);
    const decrypted = AES.decrypt(encrypt, keyUtf8, {
        iv: ivUtf8,
        mode: CFB, // 选择适当的模式
        padding: Pkcs7
    });
    return decrypted.toString(Utf8);
}
