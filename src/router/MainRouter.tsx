// import { Test1 } from '../modules/test/test1';
import { Test2 } from '../modules/test/test2';
import { Switch, Route } from 'react-router';
import React from 'react';
import { KeepAlive } from 'react-keep-alive';
import { ShopManagement } from '../modules/ShopManagement/index';
import { isProd } from '../common/helpers/env';

export function MainRouter() {
    return !isProd() ? (
        <Switch>
            <Route exact path='/'></Route>
            <Route path='/shopManagement'><ShopManagement/></Route>
            <Route path='/test2'><Test2/></Route>
        </Switch>
    ) : (
        <Switch>
            <Route exact path='/'>
            </Route>
            <Route path='/login'>
                
            </Route>
            <Route path='/shopManagement'>
                <KeepAlive name='shopManagement'>
                    <ShopManagement/>
                </KeepAlive>
            </Route>
            <Route path='/test2'>
                <KeepAlive name='Test2'>
                    <Test2/>
                </KeepAlive>
            </Route>
        </Switch>
    )
}