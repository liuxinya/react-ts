import React, { useState } from 'react';
import './index.less';
import { useOnMount, useOnUpdate } from '../../common/myHooks/lifeCycle';
import { store } from '../../common/store/redux';
import { Button } from 'antd';
// import { Uselect } from '../../common/components/Uselect/Uselect';
import { UFormDataObj } from '../../common/interfaces/common';
import { UForm } from '../../common/components/UForm/UForm';

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
    const testFormData: UFormDataObj[] = [{
        label: '欧户名',
        type: 'Input',
    }, {
        label: '哈哈哈',
        type: 'Select',
        props: {
            data: [
                {
                    title: '1',
                    value: 1
                }
            ]
        }
    }];
    return (
        <div className="test1">
            模块1 age: {age}
            <Button type="primary" onClick={clickHandler}>点击 age + 1</Button>
            {/* <Uselect data={[{
                title: '1',
                value: 1
            }, {
                title: '12',
                value: 12,
            }]}/> */}
            <UForm data={testFormData}/>
        </div>
    );
}