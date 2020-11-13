
/**
 * 获取cookie
 * @param key 只获取某个key对应的value
 */

import { isObject } from './type';

export function getCookie(key?: string) {
    let cookie = getCookieToObj();
    return key ? cookie[key] : cookie;
}

export function setCookie<T>(key: string, value: T, ms: number = 0) {
    const valueStr: string = isObject(value) ? JSON.stringify(value) : String(value);
    let expires: string = '';
    if (ms > 0) {
        let d: Date = new Date();
        d.setTime(d.getTime() + ms);
        expires = '; expires=' + d.toUTCString();
    }
    document.cookie = key + '=' + escape(valueStr) + expires;
}

export function delCookie(key: string) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

function getCookieToObj() {
    let cookie: string = document.cookie;
    let cookieArr: string[] = cookie.split(';');
    let res: cookieObj  = {};
    cookieArr.forEach((item: string) => {
        let temArr = item.split('=');
        res[temArr[0].trim()] = unescape(temArr[1]);
    });
    return res;
}

type cookieObj = {
    [props: string]: string
}