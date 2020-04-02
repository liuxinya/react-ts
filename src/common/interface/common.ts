export interface StatusObject<T> {
    success: boolean,
    result: number,
    message: string,
    data: T
}

export interface PageResponseObject<T> {
    pageSize: number,
    pageNo: number,
    totalPage: number,
    totalCount: number,
    result: T
}
export interface UserInfoObj {
    isCNLanguage: boolean,
    isLightTheme: boolean
}
export interface ReduxStoreStateObj {
    user: UserInfoObj
}

export interface ReduxStoreAction {
    type: string;
    [props: string]: any
}