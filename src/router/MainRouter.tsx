import { Test } from '../modules/test/test';
import { Test1 } from '../modules/test/test1';
import { Test2 } from '../modules/test/test2';
import { Switch, Route } from 'react-router';
import React from 'react';
import { KeepAlive } from 'react-keep-alive';

export function MainRouter() {
    return (
        <Switch>
            <Route exact path='/'>
                <KeepAlive name='Test'>
                    <Test/>
                </KeepAlive>
            </Route>
            <Route path='/test'>
                <KeepAlive name='Test1'>
                    <Test1/>
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