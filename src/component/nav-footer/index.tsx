import * as React from 'react';
import './index.less';
import { Link } from 'react-router-dom';
export class NavFooter extends React.Component<any, INavFooterState> {
    constructor(props: any) {
      super(props);
      this.state = {
            navLists: [{
                title: '首页',
                route: '/home',
            }, {
                title: '发现',
                route: '/find',
            }, {
                title: '推荐',
                route: '/recommend',
            }, {
                title: '榜单',
                route: '/rank',
            }],
            activeIndex: 0
        }
    }
    clickNav(index: number): any {
        this.setState({
            activeIndex: index
        })
        // console.log(window.location, window.location.hash)
    }
    render() {
    const routerLink = 
    <ul>
        {this.state.navLists.map((item, index) => {
            return (
                <li className={index === this.state.activeIndex? 'active': ''} onClick={this.clickNav.bind(this, index)} key={index}>
                    <Link to={item.route}>{item.title}</Link>
                </li>
            )
        })}
    </ul>
      return (
            <div className="footer-nav">
                {routerLink}
            </div>
        )
    }
}

export interface INavFooterState {
    navLists: INavList[];
    activeIndex: number;
}
export interface INavList {
    title: string;
    route: string;
}