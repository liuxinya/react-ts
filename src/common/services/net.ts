import { message } from 'antd';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isProd } from '../helper/env';
import { httpConfig } from '../config/http';
import { ResponseObj, ResponseMsgObj } from '../interfaces/common';
import { isString, isObject } from '../helper/type';

export class UNetService {
    constructor() {
        this.init();
    }
    private init() {
        Axios.defaults.timeout = httpConfig.timeout;
        Axios.defaults.baseURL = isProd() ? httpConfig.urlProd : httpConfig.urlDev;
    }
    public setHeader(key: string, value: string | boolean) {
        Axios.defaults.headers.common[key] = value;
    }
    get<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<ResponseObj<K>> {
        config.params = params;
        return this.sendData<T, K>('get', url, config);
    }
    post<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<ResponseObj<K>> {
        config.params = params;
        return this.sendData<T, K>('post', url, config.params);
    }
    delete<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<ResponseObj<K>> {
        config.params = params;
        return this.sendData<T, K>('delete', url, config);
    }
    put<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<ResponseObj<K>> {
        config.params = params;
        return this.sendData<T, K>('put', url, config.params);
    }

    // 先不管那么多 有错直接弹提示框
    private errorHander(err: ResponseObj<any, any>) {
        if (isString(err.message)) {
            message.error(err.message);
        }
        if (err.message && isObject(err.message)) {
            const msg = (err.message as ResponseMsgObj).global || (err.message as ResponseMsgObj).detail || '哎呦，出错了';
            message.error(msg);
        }
    }
    private sendData<T, K>(methods: NetMethods, url: string, config: AxiosRequestConfig | T = {}): Promise<ResponseObj<K>> {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                await Axios[methods](url, config).then((data: AxiosResponse<ResponseObj<K>>) => {
                    // 有可能返回的是个文件流
                    if (isString(data.data) || data.data.success) {
                        resolve(data.data);
                    } else {
                        this.errorHander(data.data);
                        reject(data.data);
                    }
                });
            } catch (e) {
                reject(e);
                message.error('* ' + e);
            }
        });
    }
}

type NetMethods = 'get' | 'post' | 'put' | 'delete'