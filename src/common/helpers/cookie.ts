// export function setCookie(params: cookieObj) {
//     let 
// }

export function getCookie(key: string) {
    let cookie = getCookieToObj()
    return key ? cookie[key] : cookie
}

function getCookieToObj() {
    let cookie: string = document.cookie;
    let cookieArr: string[] = cookie.split(';')
    let res: cookieObj  = {}
    cookieArr.forEach((item: string) => {
        let temArr = item.split('=')
        res[temArr[0]] = temArr[1]
    })
    return res
}

type cookieObj = {
    [props: string]: string
}