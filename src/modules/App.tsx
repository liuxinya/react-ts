import React from 'react';
// import { Button } from 'antd';
import './App.less';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { MainRouter } from '../router/mainRouter';
import { Menu } from './PageBlocks/Menu/Menu';
import { Header } from './PageBlocks/Header/Header';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

function App() {
    return (
        <div className="app-container">
            <Router history={createBrowserHistory()}>
                <div className="left-menu">
                    <Menu />
                </div>
                <div className="right-content">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="content">
                        <ErrorBoundary>
                            <MainRouter />
                        </ErrorBoundary>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
