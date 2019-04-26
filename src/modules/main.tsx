import * as React from 'react';
import './main.less';
import { IndexPage } from './pages/indexPage/index';
class Main extends React.Component<any, any>  {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className="main-wrapper">
                <IndexPage/>
            </div>
        )
    }
    
}

export { Main };