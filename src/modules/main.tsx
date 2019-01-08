import * as React from 'react';
import './main.less';
import { MainRouter } from '../router';
// import { NavFooter } from '../component/nav-footer/index';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
class Main extends React.Component<any, any>  {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className="main-wrapper">
                <Router history={createBrowserHistory()}>
                    <div className="main-content">
                        <MainRouter/>
                        {/* <NavFooter/> */}
                    </div>
                </Router>
            </div>
        )
    }
    
}

export { Main };