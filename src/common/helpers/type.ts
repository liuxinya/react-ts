export function isNumber(val: any) {
    return typeof val === 'number' && !isNaN(val);
}
export function isString(val: any) {
    return typeof val === 'string';
}
export function isArray(val: any) {
    return Array.isArray(val);
}
export function isObject(val: any, includeArray: boolean = true) {
    return typeof val === 'object' && (includeArray ? true : !isArray(val));
}
export function isBoolean(val: any) {
    return typeof val === 'boolean';
}
export function isSymbol(val: any) {
    return typeof val === 'symbol';
}
export function isFunction(val: any) {
    return typeof val === 'function';
}
export function isUndefined(val: any) {
    return val === undefined;
}
export function isNull(val: any) {
    return val === null;
}
export function isNill(val: any) {
    return isUndefined(val) || isNull(val);
}