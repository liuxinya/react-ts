import { Injectable } from 'qzx-ioc'
import { isProd } from '../helpers/env';
import { StatusObject } from '../interface/common';
import { message } from 'antd';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isString } from 'util';
import { BASE_URL_PROD, BASE_URL_DEV, TIME_OUT } from '../constant/axios-default';

@Injectable()
export class UNetService {
    constructor() {
        this.init()
    }
    init() {
        Axios.defaults.timeout = TIME_OUT
        Axios.defaults.baseURL = isProd() ? BASE_URL_PROD : BASE_URL_DEV
    }
    get<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<StatusObject<K>> {
        config.params = params
        return this.sendData<T, K>('get', url, config)
    }
    post<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<StatusObject<K>> {
        config.params = params
        return this.sendData<T, K>('post', url, config.params)
    }
    delete<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<StatusObject<K>> {
        config.params = params
        return this.sendData<T, K>('delete', url, config)
    }
    put<T, K>(url: string, params?: T, config: AxiosRequestConfig = {}): Promise<StatusObject<K>> {
        config.params = params
        return this.sendData<T, K>('put', url, config.params)
    }
    sendData<T, K>(methods: NetMethods, url: string, config: AxiosRequestConfig | T = {}): Promise<StatusObject<K>> {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                await Axios[methods](url, config).then((data: AxiosResponse<StatusObject<K>>) => {
                    if (data.data.success) {
                        resolve(data.data)
                    } else {
                        let errMsg = isString(data.data.data) ? data.data.data : data.data.message
                        reject(errMsg)
                        message.error(errMsg)
                    }
                })
            } catch (e) {
                reject(e)
                message.error('** ' + e)
            }
        })
    }
}

type NetMethods = 'get' | 'post' | 'put' | 'delete'