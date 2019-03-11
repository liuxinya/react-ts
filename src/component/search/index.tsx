import * as React from 'react';
import './index.less';
import { Icon, Input } from 'antd';
import { SearchPropsObj } from './interface';
export class Search extends React.Component<SearchPropsObj, any> {
    constructor(props: SearchPropsObj) {
        super(props)
        console.log(props)
        this.clickHander = this.clickHander.bind(this);
    }
    clickHander() {
        if(this.props.onClick) {
            this.props.onClick(); 
        }
    }
    render() {
        return <div className="search-input" onClick={this.clickHander}>
                    <div className="icon">
                        <Icon type="search" />
                    </div>
                    <Input disabled={this.props.disabled} placeholder={this.props.placeholder}/>
                </div>
    }
}