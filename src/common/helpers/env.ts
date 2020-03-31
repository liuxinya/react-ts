let isProdVar = process.env.NODE_ENV === 'production';

export function isProd() {
    return isProdVar;
}