import * as React from 'react';
import './index.less';
import { dy } from 'src/helper/dynamic.helper';
import { DetailPage } from '../../pages/detailPage/index';
export class HotSearch extends React.Component<any, HotSearchStateObj>  {
    constructor(props: any) {
        super(props)
        this.state = {
            hotSearchList: [
                {
                    name: '三生三世而我却',
                    type: 0,
                    id: '123',
                },
                {
                    name: '二二二二恶',
                    type: 1,
                    id: '456',
                },
                {
                    name: '休息休息',
                    type: 2,
                    id: '789',
                },
                {
                    name: '嘻嘻嘻嘻嘻',
                    type: 3,
                    id: '12sds3',
                },
            ],
            imgSrc:[
                'http://simg.s.weibo.com/20180921110904_fei_28_0921.png',
                'http://simg.s.weibo.com/20180816102634_re_28_0816.png',
                'http://simg.s.weibo.com/20180814113408_xin_28_0813.png',
                ''
            ]
        }
        this.openDetailPage = this.openDetailPage.bind(this);
    }
    openDetailPage(item: HotSearchListItemObj) {
        dy.open({
            component: <DetailPage hotItem={item}/>
        })
    }
    openRankList() {
        // 
    }
    render() {
        return (
            <div className="hot-search-wrapper">
                <ul>
                    {
                        this.state.hotSearchList.map((item: HotSearchListItemObj) => {
                            return (
                                <li key={item.id} onClick={() => {this.openDetailPage(item)}}>
                                    <h4>{item.name}</h4>
                                    <img src={this.state.imgSrc[item.type]} alt=""/>
                                </li>
                            )
                        })
                    }
                    <li onClick={this.openRankList}>
                        <h4>
                            微博热搜榜 >
                        </h4>
                    </li>
                </ul>
            </div>
        )
    } 
}
export interface HotSearchStateObj {
    hotSearchList: HotSearchListItemObj[];
    imgSrc: string[];
}
export interface HotSearchListItemObj {
    name: string;
    type: number;
    id: string;
}