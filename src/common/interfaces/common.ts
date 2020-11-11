export interface UserInfoObj {
    name?: string,
    age?: number
}

export interface ReduxStoreAction<T = null> {
    type: string;
    data: T;
    [props: string]: any
}