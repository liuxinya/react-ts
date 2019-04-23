import { Route, Switch } from 'react-router';
import * as React from 'react';
import './index.less';
import { Home } from '../modules/home';
import { Rank } from '../modules/rank';
import { Find } from '../modules/find';
import { Recommend } from '../modules/recommend';

class MainRouter extends React.Component  {
    render() {
        return <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/find' component={Find}>
                        <Route path='/find/:id' component={Find} />
                    </Route>
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/rank' component={Rank} />
                </Switch>
    }
    
}

export { MainRouter };