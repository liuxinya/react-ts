import { ButtonType } from 'antd/lib/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Rule } from 'antd/lib/form';
import React from 'react';

export type ResponseMsgObj = {
    detail: any,
    global: string
};

// http响应
export interface ResponseObj<T, K = null> {
    success: boolean,
    status: number,
    code?: string,
    message?: ResponseMsgObj | string,
    error?: K, // 错误数据
    result?: T, // 正常数据
    page?: T,  // 分页数据
}


// http分页响应
export interface PageResponseObj<T> {
    order: string,
    orderBy: string,
    pageNo: number,
    pageSize: number,
    totalCount: number,
    result: T,
}

// 用户信息
export interface UserInfoObj {
    name?: string,
    age?: number
}

// redux action
export interface ReduxStoreAction<T, K = null> {
    type: keyof T;
    data: K;
    [props: string]: any
}

// 下拉数据
export interface UselectDataObj {
    title: string,
    value: string | number,
    disabled?: boolean,
    [props: string]: any,
}

// form表单data
export interface UFormDataObj {
    type: 'Input' | 'Button' | 'Select',
    label?: string,
    name?: string,
    title?: string,
    rules?: Rule[],
    props?: {
        data?: UselectDataObj[],
        size?: SizeType,
        placeholder?: string,
        defaultValue?: string | number,
        icon?: React.ReactNode,
        buttonType?: ButtonType
    }
    on?: {
        click?: () => void,
        change?: (event: React.ChangeEvent<HTMLInputElement>, item: UFormDataObj) => void,
    }
}