export function getCookie(key: string): string {
    // debugger
    let cookieObj = {};
    let cookie: string = document.cookie;
    let cookieArr: string[] = cookie.split(';');
    cookieArr.forEach(item => {
        if(item && item.length > 0 && item.indexOf('=') !== -1) {
            let itemArr: string[] = item.split('=');
            let k: string = itemArr[0].trim();
            let v: string = itemArr[1].trim();
            cookieObj[k] = v;
        }   
    })
    return cookieObj[key]
}
