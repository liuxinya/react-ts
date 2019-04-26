import * as React from 'react';
import './index.less';
import { Icon } from 'antd';
import { NavListPropsObj, NavListStateObj } from './interface';
import { NavListItemObj } from 'src/modules/components/nav/interface';
export class NavList extends React.Component<NavListPropsObj, NavListStateObj> { 
    constructor(props: any) {
        super(props);
        this.state = {
            activeItem: this.props.navList[0],
            isShowPannel: false,
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.showTabPannel = this.showTabPannel.bind(this);
    }
    clickHandler(item: NavListItemObj): any {
        this.setState({
            activeItem: item,
            isShowPannel: false
        })
        this.props.wbTypeChange(item);
    }
    showTabPannel() {
        this.setState({
            isShowPannel: !this.state.isShowPannel
        })
    }
    componentDidMount() {
        if(this.props.navInitedHandler) {
            this.props.navInitedHandler(this.state.activeItem);
        }
    }
    render() {
        const ul: JSX.Element = (
            <ul>
                {  this.props.navList.map(item => {
                    return (
                        <li key={item.id} 
                            className={item.id === this.state.activeItem.id? 'active': ''} 
                            onClick={() => this.clickHandler(item)}>
                            <span>{item.name}</span>
                        </li>
                    )
                }) }
            </ul>
        )
        return (
            <div className='nav-container'>
                <div className="nav-content">
                    <div className="ul-wrapper">
                        {ul}
                    </div>
                    <div className={this.state.isShowPannel? 'arrow show-pannel': 'arrow'} onClick={this.showTabPannel}>
                        <Icon type="down" />
                    </div>
                </div>
                {
                    this.state.isShowPannel?  (
                        <div className="tab-pannel-content">
                            <div className="tab-pannel">
                                {ul}  
                            </div>
                        </div>
                    ) : ''                                 
                }
            </div>
        )
    }
}