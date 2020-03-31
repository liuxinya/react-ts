export function localSetItem(key: string, value: any) {
    localStorage.setItem(key, value);
}
export function localGetItem(key: string) {
    return localStorage.getItem(key);
}
export function localRemoveItem(key: string, isAll: boolean = false) {
    if (isAll) {
        localStorage.clear();
    } else {
        localStorage.removeItem(key);
    }
}