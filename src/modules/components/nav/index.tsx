import * as React from 'react';
import { NavList } from '../../../component/nav-list/index';
import { NavStateObj } from './interface';
export class Nav extends React.Component<any, NavStateObj> {
    constructor(props: any) {
        super(props)
        this.state =  {
            navList: [
                {
                    id: '1',
                    name: '热门'
                },
                {
                    id: '2',
                    name: '热门'
                },
                {
                    id: '3',
                    name: '热门的'
                },
                {
                    id: '4',
                    name: '热门'
                },
                {
                    id: '5',
                    name: '热门'
                },
                {
                    id: '6',
                    name: '热门'
                },
                {
                    id: '7',
                    name: '热门'
                },
                {
                    id: '8',
                    name: '热门'
                },
            ]
        }
    }
    render() {
        return (
            <div className="nav-container">
                <NavList navList={this.state.navList} />
            </div>
        )
    }
}