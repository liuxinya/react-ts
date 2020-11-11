const isProdVar = process.env.NODE_ENV === 'production';

// 非开发环境
export function isProd() {
    return isProdVar;
}

// 沙盒环境
export function isSandBox() {}

// 线上
export function isOnline() {}