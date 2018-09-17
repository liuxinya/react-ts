import * as React from 'react';
export class Recommend extends React.Component<any, any> {
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
            推荐推荐推荐
        </div>
      );
    }
    change(e: string) {
      this.setState({
        value: e
      })
    }
  }