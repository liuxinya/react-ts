export interface ResData<T> {
    data: resDataObj<T>,
    [props: string]: any
}
type resDataObj<T> = {
    code: number,
    msg: string,
    succ: boolean,
    data: T
}