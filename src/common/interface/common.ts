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