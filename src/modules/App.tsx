import React, { useState } from 'react';
import './App.less';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';

const App = () => {
    const [test, setTest] = useState(0)
    console.log(888999)
    return (
        <div>
            <Button type='danger' onClick={() => setTest(test + 1)}>12312</Button>
            { test }
        </div>
    )
};

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
