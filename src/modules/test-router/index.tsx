import * as React from 'react';
import { Switch, Route } from 'react-router';
import { TestComponent } from '../test-component/index';
export class TestRoute extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        value: ''
      }
    }
    render() {
        return <Switch>
                    <Route exact path='/find/:id' component={TestComponent} />
                </Switch>
    }
  }