import React, { useState } from 'react';
import './index.less';
import { useOnMount, useOnUpdate } from '../../common/myHooks/lifeCycle';
import { store } from '../../common/store/redux';
import { Button, Form } from 'antd';
// import { Uselect } from '../../common/components/Uselect/Uselect';
import { UFormDataObj, UFormModalPropsObj } from '../../common/interfaces/common';
import { UForm } from '../../common/components/UForm/UForm';
import { UDynamicService } from '../../common/services/dynamic';
import { Ioc } from '@baidu/ioc';
import { UFormModal } from '../../common/components/UFormModal/UFormModal';

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
        type: 'RangePicker',
        label: 'asdas',
        RangePickerProps: {
            onChange: e => {
                console.log(e[0].toLocaleString());
            }
        }
    }, {
        type: 'DatePicker',
        label: 'asdasdzsd',
        DatePickerProps: {
            onChange: e => {
                console.log(e.valueOf());
            }
        }
    }, {
        type: 'Button',
        ButtonProps: {
            text: '按时打算',
            onClick: () => {
                const dy: UDynamicService = Ioc(UDynamicService);
                const div = dy.open<UFormModalPropsObj>({
                    component: UFormModal,
                    props: {
                        modalProps: {
                            title: '123123',
                            onCancel: () => {
                                dy.destroyed(div);
                            },
                            onOk: e => {
                                e.close();
                                dy.destroyed(div);
                            }
                        },
                        formData: testFormData
                    }
                });
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