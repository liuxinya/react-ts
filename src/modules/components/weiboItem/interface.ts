export interface WeiboItemObj {
    avator: string;
    creater: string;
    createTime: string;
    content: string;
    type: number;
    imgList: string[];
    isWatching: boolean;
    id: string;
}
export interface WeiBoItemComponentStateObj {
    weiboList: WeiboItemObj[];
}
export interface WeiBoItemComponentPropsObj {
    weiboList: WeiboItemObj[];
}