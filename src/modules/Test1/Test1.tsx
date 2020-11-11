import React, { useState } from 'react';
import './index.less';
import { useOnMount, useOnUpdate } from '../../common/myHooks/lifeCycle';
import { store } from '../../common/store/redux';
import { Button } from 'antd';

export function Test1(props: any, context: any) {
    const [age, setAge] = useState<number>(() => {
        return store.getState().user.age || 0;
    });
    useOnMount(() => {
        console.log('只执行一次');
    });

    useOnUpdate(() => {
        console.log(store.getState().user.age);
    });

    const clickHandler = () => {
        setAge(age + 1);
        store.dispatch({
            type: 'UPDATE_AGE',
            data: {
                age: age
            }
        });
    };
    return (
        <div className="test1">
            模块1 age: {age}
            <Button type="primary" onClick={clickHandler}>点击 age + 1</Button>
        </div>
    );
}