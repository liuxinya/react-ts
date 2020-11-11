import React from 'react';
// import { Button } from 'antd';
import './App.less';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { MainRouter } from '../router/mainRouter';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="app-container">
            <Router history={createBrowserHistory()}>
                <div className="left-menu">
                    菜单
                    <div className="test-menu">
                        <Link to="/test1">test1test1test1test1test1</Link>
                    </div>
                    <div className="test-menu">
                        <Link to="/test2">test2test2test2test2test2</Link>
                    </div>
                </div>
                <div className="right-content">
                    <header>
                        头部已打开菜单
                    </header>
                    <div className="content">
                        <MainRouter />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
