import Axios, { AxiosRequestConfig } from 'axios';
class NetService {
    constructor() {
        Axios.defaults.baseURL = 'http://localhost:3000';
        Axios.defaults.withCredentials = true;
    }
    setUrl(url: string) {
        Axios.defaults.baseURL = url;
    }
    async get<T>(url: string, data?: T, config: AxiosRequestConfig = {}) {
        config.params = data;
        return await Axios.get(url, config);
    }
    async post<T>(url: string, data?: T, config: AxiosRequestConfig = {}) {
        return await Axios.post(url, data, config);
    }
}
let net: NetService = new NetService();
export { net };