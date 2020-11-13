import React, { useState } from 'react';
import './index.less';
import { useOnMount, useOnUpdate } from '../../common/myHooks/lifeCycle';
import { store } from '../../common/store/redux';
import { Button, Form } from 'antd';
// import { Uselect } from '../../common/components/Uselect/Uselect';
import { UFormDataObj } from '../../common/interfaces/common';
import { UForm } from '../../common/components/UForm/UForm';

export function Test1(props: any, context: any) {
    const [age, setAge] = useState<number>(() => {
        return store.getState().user.age || 0;
    });
    const [form] = Form.useForm();
    useOnMount(() => {
        console.log('只执行一次1');
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
        name: 'name',
        rules: [{ required: true, message: 'Please input your username!' }],
        InputProps: {
            defaultValue: 1
        }
    }, {
        label: '哈哈哈',
        type: 'Select',
        SelectProps: {
            data: [
                {
                    title: '1',
                    value: 1
                }
            ],
            onChange(e) {
                console.log(e);
            }
        }
    }, {
        // label: '哈哈哈',
        type: 'RangePicker',
        RangePickerProps: {
            onChange: e => {
                console.log(e[0].toLocaleString());
            }
        }
    }, {
        // label: '哈哈哈',
        type: 'DatePicker',
        DatePickerProps: {
            onChange: e => {
                console.log(e.valueOf());
            }
        }
    }, {
        // label: '哈哈哈',
        type: 'Button',
        ButtonProps: {
            text: '按时打算',
            onClick: () => {
                console.log(form.validateFields());
            }
        }
    }];
    return (
        <div className="test1">
            模块1 age: {age}
            <Button type="primary" onClick={clickHandler}>点击 age + 1</Button>
            <UForm form={form} data={testFormData}/>
        </div>
    );
}