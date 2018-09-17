import * as React from 'react';
export class Rank extends React.Component<any, any> {
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
            榜单榜单榜单榜单榜单
        </div>
      );
    }
    change(e: string) {
      this.setState({
        value: e
      })
    }
  }