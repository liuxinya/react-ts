let _is_prod = process.env.NODE_ENV === 'production';

export function isProd() {
    return _is_prod;
}