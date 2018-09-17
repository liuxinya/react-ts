import * as React from 'react';
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
            发现发现发现sad
        </div>
      );
    }
    change(e: string) {
      this.setState({
        value: e
      })
    }
  }