import React from 'react';
import './App.less';
import { Button } from 'antd';
import { UNetService } from '../common/services/net';
import { Ioc } from 'qzx-ioc';

function App() {
    let net: UNetService = Ioc(UNetService)
    function send1() {
        net.get('/test/a', {
            a: 1
        })
    }
    function send2() {
        net.post('/test/a', {
            a: 1
        })
    }
    function send3() {
        net.delete('/test/a', {
            a: 1
        })
    }
    function send4() {
        net.put('/test/a', {
            a: 1
        })
    }
    return (
        <div className="App">
            <Button type='primary' onClick={send1}>get</Button>
            <Button type='danger' onClick={send2}>post</Button>
            <Button type='danger' onClick={send3}>delete</Button>
            <Button type='danger' onClick={send4}>put</Button>
            123123
        </div>
    );
}

export default App;
