import * as React from 'react';
import './main.less';
import { IndexPage } from './pages/indexPage/index';
import axios from 'axios';
class Main extends React.Component<any, any>  {
    constructor(props: any) {
        super(props)
    }
    componentWillMount() {
        axios.post('http://localhost:3000/index', {info: 444}).then(res => {
            console.log(res)
        })
        axios.get('http://localhost:3000/about').then(res => {
            console.log(res)
        })
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