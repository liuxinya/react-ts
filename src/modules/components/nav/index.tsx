import * as React from 'react';
import { NavList } from '../../../component/nav-list/index';
import { NavStateObj, NavListItemObj } from './interface';
import { net } from 'src/services/net';
import { ResData } from '../../../common/interface/resData';
import { UserService } from '../../../services/user';
import { Ioc } from 'qzx-ioc';
import { UEventEmitter } from '../../../helper/event';
export class Nav extends React.Component<any, NavStateObj> {
    constructor(props: any) {
        super(props)
        this.state =  {
            navList: [],
        }
        let userService: UserService = Ioc(UserService);
        userService.userStatusChangeHandler((val: boolean) => {
            this.getWbTypeList();
        })
    }
    componentWillMount() {
       this.getWbTypeList();
    }
    getWbTypeList = async () => {
        let data: ResData<NavListItemObj[]> = await net.get(`/wb/typeList`);
        this.setState({navList: data.data.data});
        return true;
    }
    wbTypeChange = async (e: NavListItemObj) => {
        let emitter: UEventEmitter = Ioc(UEventEmitter);
        emitter.emit('wbTypeChange', e);
    }
    navInitedHandler(e: NavListItemObj) {
        let emitter: UEventEmitter = Ioc(UEventEmitter);
        emitter.emit('wbTypeChange', e);
    }
    render() {
        return (
            <div className="nav-container">
               { 
                    this.state.navList.length > 0 && 
                    <NavList {...this.state} wbTypeChange={this.wbTypeChange} navInitedHandler={this.navInitedHandler}/> 
               } 
            </div>
        )
    }
}