import React from 'react';
import { Redirect, Switch, Route } from 'react-router';

import { Test1 } from '../modules/Test1/Test1';
import { Test2 } from '../modules/Test2/Test2';

export function MainRouter() {
    return (
        <Switch>
            <Route exact path="/test1">
                <Test1/>
            </Route>
            <Route exact path="/test2">
                <Test2/>
            </Route>
            <Redirect exact path="/" to={{ pathname: '/test1' }}/>
            <Route path="*" render={() => <div>404 未找到页面</div>} />
        </Switch>
    );
}