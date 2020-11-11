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
export interface ReduxStoreAction<T = null> {
    type: string;
    data: T;
    [props: string]: any
}