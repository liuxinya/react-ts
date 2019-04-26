import * as React from 'react';
import './index.less';
import { Icon, Dropdown, Menu, message } from 'antd';
import { UEventEmitter } from '../../../helper/event';
import { Ioc } from 'qzx-ioc';
import { WeiBoItemComponentStateObj, WeiboItemObj } from './interface';
import { NavListItemObj } from '../nav/interface';
import { ResData } from '../../../common/interface/resData';
import { net } from 'src/services/net';
import { User } from 'src/common/model/user';
// import { ReactElement } from 'react';
import { removeFromArrayByIndex } from '../../../helper/array';
export class WeiBoItem extends React.Component<any, WeiBoItemComponentStateObj> { 
    constructor(props: any) {
        super(props)
        this.state =  {
            weiboList: []
        }
    }
    componentWillMount() {
        let emitter: UEventEmitter = Ioc(UEventEmitter);
        emitter.on('wbTypeChange', async (e: NavListItemObj) => {
            let data: ResData<WeiboItemObj[]> = await net.get(`/wb/list/${e.id}`)
            this.setState({
                weiboList: data.data.data
            })
        })
    }
    user: User = Ioc(User);
    deleteWb(id: string, index: number) {
        return async () => {
            let res: ResData<boolean> = await net.get(`/wb/delete?id=${id}`);
            if(res.data.data) {
                this.setState({
                    weiboList: removeFromArrayByIndex(this.state.weiboList, index)
                })
                message.success('删除成功');
            }else {
                message.error('删除失败');
            }
        }
    }
    render() {
        let menu = (id: string, index: number) => {
            return (
                    <Menu>
                        <Menu.Item onClick={this.deleteWb(id, index)}>
                            删除
                        </Menu.Item>
                    </Menu>
                )
        }
        return (
            this.state.weiboList.map((item, index) => {
                return <div className='weibo-item-c' key={index}>
                        <div className="head">
                            <div className="avator">
                                <img src={item.avator || 'https://tvax4.sinaimg.cn/crop.0.13.367.367.180/9e5389bbly8g1qxioowd3j20a70al77y.jpg'} alt=""/>
                            </div>
                            <div className="title-c">
                                <h4>{item.creater}</h4>
                                <span className="time">
                                    {item.createTime}前
                                </span>
                            </div>
                            <div className="watch-btn">
                                {
                                    item.isWatching || this.user.getName() === item.creater? 
                                    (<div className="write-weibo">
                                        <Dropdown overlay={menu(item.id, index)} placement="bottomLeft" trigger={['click']}>
                                            <Icon type="down" />
                                        </Dropdown>
                                    </div>): 
                                    (<span>+ 关注</span>)
                                }
                            </div>
                        </div>
                        <div className="body">
                            <div className="content">
                                {item.content}
                            </div>
                            <ul className="img-list">
                                {item.imgList && item.imgList.length > 0? item.imgList.map((img, i) => {
                                    return <li className='img-wrap' key={i}><img src={img}/></li>
                                }): ''}
                            </ul>
                        </div>
                        <div className="foot">
                            <span className='comment'>
                                <Icon type="interation" />
                                1.2万
                            </span>
                            <span className='msg'>
                                <Icon type="message" />
                                1万
                            </span>
                            <span className='like'>
                                <Icon type="like" />
                                3万
                            </span>
                        </div>
                    </div>
                
            })
        )
    }
}