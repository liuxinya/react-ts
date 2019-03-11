import * as React from 'react';
import './index.less';
import { Header } from 'src/modules/components/header';
import { Nav } from '../../components/nav/index';

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
        </div>
      );
    }
  }