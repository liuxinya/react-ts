import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.less'
import { Header } from './PageBlock/Header/header';
import { Menus } from './PageBlock/Menus/Menus';
import { RightContent } from './PageBlock/RightContent/RightContent';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

export function App() {
    return (
        <div className='app-container'>

            <Router history={createBrowserHistory()}>
                <div className="header-container">
                    <Header />
                </div>
                <div className="body-container">
                    <div className="left-menu-container">
                        <Menus/>
                    </div>
                    <div className="right-content-container">
                        <RightContent/>
                    </div>
                </div>
            </Router>
        </div>
    )
}
const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
