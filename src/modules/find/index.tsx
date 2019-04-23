import * as React from 'react';
import { Link } from 'react-router-dom';
export class Find extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        value: ''
      }
      this.change = this.change.bind(this)
    }
    public render() {
      return (
        <div className="hh">
            {/* 发现发现发现sad */}
            <Link to='/find/1'>查看</Link>
        </div>
      );
    }
    change(e: string) {
      this.setState({
        value: e
      })
    }
  }