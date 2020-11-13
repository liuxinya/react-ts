import { ModalProps } from 'antd/lib/modal/Modal';
import { Rule, FormProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { SelectProps } from 'antd/lib/select';
import { ButtonProps } from 'antd/lib/button';
import { RangePickerProps } from 'antd/lib/date-picker/generatePicker';
import { DatePickerProps } from 'antd/lib/date-picker';
import { Moment } from 'moment';
import { RowProps } from 'antd/lib/row';
import { ColProps } from 'antd/lib/col';
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
interface SelProps extends SelectProps<string | number> {
    data: UselectDataObj[]
}
interface BtnProps extends ButtonProps {
    text: string
}
export interface UFormDataObj {
    type: 'Input' | 'Button' | 'Select' | 'DatePicker' | 'RangePicker',
    label?: string,
    name?: string,
    rules?: Rule[],
    InputProps?: InputProps,
    SelectProps?: SelProps,
    ButtonProps?: BtnProps,
    DatePickerProps?: DatePickerProps,
    RangePickerProps?: RangePickerProps<Moment>,
}

export interface UFormPropsObj extends FormProps {
    data: UFormDataObj[],
    RowProps?: RowProps,
    ColProps?: ColProps
}

export interface UFormModalPropsObj {
    modalProps: Omit<ModalProps, 'onOk'> & {
        onOk?: (p: {
            e: React.MouseEvent<HTMLElement>,
            close: () => void
        }) => void;
    },
    formData: UFormDataObj[],
    formProps?: UFormPropsObj,
}