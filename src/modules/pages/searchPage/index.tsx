import * as React from 'react';
import './index.less';
import { Icon } from 'antd';
import { Search } from '../../../component/search/index';
import { dy } from 'src/helper/dynamic.helper';
import { HotSearch } from '../../components/hot-search/index';
export class SearchPage extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
      }
      this.backHander = this.backHander.bind(this);
    }
    backHander() {
        dy.destroyed(SearchPage);
    }
    public render() {
      return (
        <div className="search-p-container">
            <div className="search-header">
                <div onClick={this.backHander} className="icon-back">
                    <Icon type="left" />
                </div>
                <div className="search-input">
                    <Search/>
                </div>
            </div>
            <div className="hot-search">
                <HotSearch />
            </div>
            <div className="sort-search">
                <ul>
                    <li>1</li>
                </ul>
            </div>
        </div>
      );
    }
  }