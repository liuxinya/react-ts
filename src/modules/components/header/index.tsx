import * as React from 'react';
import { Search } from '../../../component/search/index';
import { Icon } from 'antd';
import { IndexStateObj } from './interface';
import { dy } from 'src/helper/dynamic.helper';
import { SearchPage } from '../../pages/searchPage/index';
export class Header extends React.Component<any, IndexStateObj> {
    constructor(props: any) {
        super(props)
        this.state = {
            hotWord: '大家都在搜'
        }
        this.clickHander = this.clickHander.bind(this);
    }
	clickHander() {
        dy.open({
            component: <SearchPage />
        })
	}
    render() {
        return (
            <header>
                <div className="h-icon">
                	logo
                </div>
                <div className="h-search">
					<Search disabled={true} placeholder={this.state.hotWord} onClick={this.clickHander}/>
                </div>
				<div className="write-weibo">
					<Icon type="edit" />
				</div>
            </header>
        )
    }
}