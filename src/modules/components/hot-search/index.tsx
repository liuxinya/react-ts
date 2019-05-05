import * as React from 'react';
import './index.less';
import { DetailPage } from '../../pages/detailPage/index';
import { DynamicService } from 'src/services/dynamic';
import { Ioc } from 'qzx-ioc';
import { WeiboItemObj } from '../weiboItem/interface';
export class HotSearch extends React.Component<any, HotSearchStateObj>  {
    constructor(props: any) {
        super(props)
        this.state = {
            hotSearchList: ['爱的供养', '选择远方便不顾风雨兼程', '有后悔的时间不如丰富自己的羽翼'],
            imgSrc:[
                'http://simg.s.weibo.com/20180921110904_fei_28_0921.png',
                'http://simg.s.weibo.com/20180816102634_re_28_0816.png',
                'http://simg.s.weibo.com/20180814113408_xin_28_0813.png',
                ''
            ]
        }
        this.openDetailPage = this.openDetailPage.bind(this);
    }
    openDetailPage(item: WeiboItemObj) {
        let dy: DynamicService = Ioc(DynamicService);
        dy.open({
            component: <DetailPage currItem={item}/>
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
                        this.state.hotSearchList.map((item: string, index) => {
                            return (
                                <li key={index}>
                                    <h4>{item}</h4>
                                    <img src={this.state.imgSrc[Math.round(Math.random() * 2)]} alt=""/>
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
    hotSearchList: string[];
    imgSrc: string[];
}