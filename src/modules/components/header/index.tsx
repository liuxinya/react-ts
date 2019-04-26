import * as React from 'react';
import { Search } from '../../../component/search/index';
import { Icon, Dropdown, Menu, message } from 'antd';
import { IndexStateObj } from './interface';
import { SearchPage } from '../../pages/searchPage/index';
import { WrappedNormalLoginForm } from '../../pages/loginPage/index';
import { DynamicService } from 'src/services/dynamic';
import { Ioc } from 'qzx-ioc';
import { User } from 'src/common/model/user';
import { ReactElement } from 'react';
// import { Detect } from 'src/helper/detect';
import { net } from 'src/services/net';
import { ResData } from 'src/common/interface/resData';
import { WrappedDemo } from 'src/modules/pages/sendWb';
import { UserService } from '../../../services/user';
export class Header extends React.Component<any, IndexStateObj> {
    constructor(props: any) {
        super(props)
        this.state = {
            hotWord: '大家都在搜',
            isLogin: false,
            userName: ''
        }
        this.clickHander = this.clickHander.bind(this);
        let userService: UserService = Ioc(UserService);
        userService.userStatusChangeHandler((val: boolean) => {
            this.setState({isLogin: val})
            if(val) this.setState({userName: this.user.getName()})
        })
    }
    dy: DynamicService = Ioc(DynamicService);
    public user: User = Ioc(User);
	clickHander() {
        this.dy.open({
            component: <SearchPage />
        })
    }
    editHandler = () => {
        if(this.user.isLogin) {
            console.log('发发发');
        }else {
            this.dy.open({
                component: <WrappedNormalLoginForm />
            })
        }
    }
    sendWb = () => {
        this.dy.open({
            component: <WrappedDemo userName={this.state.userName}/>
        })
    }
    signOut = () => {
        net.get('/signOut').then((res: ResData<boolean>) => {
            if(res.data.data) {
                this.user.destroyToken();
                message.success('成功登出！');
            }
        });
    }
    render() {
        let menu: ReactElement = (
            <Menu>
                <Menu.Item onClick={this.sendWb}>
                    发微博
                </Menu.Item>
                <Menu.Item onClick={this.signOut}>
                    登出
                </Menu.Item>
            </Menu>
        )
        return (
            <header>
                <div className="h-icon">
                	logo
                </div>
                <div className="h-search">
					<Search disabled={true} placeholder={this.state.hotWord} onClick={this.clickHander}/>
                </div>
                {
                    this.state.isLogin? 
                    <div className="write-weibo">
                        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                            <Icon type="edit" />
                        </Dropdown>
                    </div> :
                    <div onClick={this.editHandler} className="write-weibo">
                        <Icon type="edit" />
                    </div>
                }
            </header>
        )
    }
}