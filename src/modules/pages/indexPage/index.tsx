import * as React from 'react';
import './index.less';
import { Header } from 'src/modules/components/header';
import { Nav } from '../../components/nav/index';
import { WeiBoItem } from '../../components/weiboItem/index';
// import { NavListItemObj } from '../../components/nav/interface';

export class IndexPage extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
      }
  }
    public render() {
      return (
        <div className="index-container">
          <Header />
          <Nav/>
          <div className="weibo-list">
            <WeiBoItem />
          </div>
        </div>
      );
    }
  }