import React from 'react';
import './index.less'
// import { Router } from 'react-router';
// import { createBrowserHistory } from 'history';
import { MainRouter } from '../../../router/MainRouter';

export function RightContent() {
    // const aa = () => {

    // }
    return (
        <div className="right-content-wrapper">
            <div className="opening-menus"></div>
            <div className="content">
                <MainRouter/>
            </div>
        </div>
    )
}