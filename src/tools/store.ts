/**
 * @fileoverview Store for the client side.
 * @description cookie session local storage
 */
export const cookie = {
    // cookie 只能存储字符串且只接受
    set: (key: string, value: string | number , days: number = 30 ) => { // 默认存储30天
        const daytimes = 86400000; //24 * 60 * 60 * 1000; // 一天的毫秒数
        const date = new Date();
        date.setTime(date.getTime() + (days * daytimes));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${key}=${value};${expires};path=/`;
    },

    get: (key: string) => {
        const name = `${key}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            const c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return '';
    },

    remove: (key: string) => {
        cookie.set(key, '', -1);
    },

    clear: () => {
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            const c = ca[i].trim();
            cookie.remove(c.split('=')[0]);
        }
    }
}

export const session = {
    set: (key: string, value: any) => {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value);
    },

    get: (key: string) => {
        const value:any = sessionStorage.getItem(key);
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    },

    remove: (key: string) => {
        sessionStorage.removeItem(key);
    },

    clear: () => {
        sessionStorage.clear();
    }
}

export const local = {

    set: (key: string, value: any) => {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },

    get: (key: string) => {
        const value:any = localStorage.getItem(key);
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    },

    remove: (key: string) => {
        localStorage.removeItem(key);
    },

    clear: () => {
        localStorage.clear();
    }
}