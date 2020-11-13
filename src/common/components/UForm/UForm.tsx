/**
 * 最初设想， 传递一个json就能渲染出form表单
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { ColProps } from 'antd/lib/col';
import { UFormDataObj } from '../../interfaces/common';
import { Uselect } from '../Uselect/Uselect';

export function UForm(props: {
    data: UFormDataObj[],
    layout?: {
        labelCol: ColProps,
        wrapperCol: ColProps,
    }
} = {
    data: [],
    layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }
}) {
    const getPropsVal = (item: UFormDataObj, attr: string) => {
        // @ts-ignore
        return item.props && item.props[attr] ? item.props[attr] : null;
    };
    const getOnEvent = (item: UFormDataObj, event: string, e: any) => {
        // @ts-ignore
        return item.on && item.on[event] ? item.on[event](e, item) : null;
    };
    const renderFormByType = (item: UFormDataObj) => {
        switch (item.type) {
            case 'Input':
                return (
                    <Input
                        onChange={e => getOnEvent(item, 'change', e)}
                        size={getPropsVal(item, 'size')}
                        placeholder={getPropsVal(item, 'placeholder')}
                        defaultValue={getPropsVal(item, 'defaultValue')}
                    />
                );
            case 'Select':
                return (
                    <Uselect
                        defaultValue={getPropsVal(item, 'defaultValue')}
                        onChange={e => getOnEvent(item, 'change', e)}
                        data={item.props.data} />
                );
            case 'Button':
                return (
                    <Button
                        type={getPropsVal(item, 'buttonType')}
                        size={getPropsVal(item, 'size')}
                        icon={getPropsVal(item, 'icon')}
                        onClick={e => getOnEvent(item, 'click', item)}
                    >
                        { item.title}
                    </Button>
                );
            default:
                return null;
        }
    };
    const renderChildForm = () => {
        return (
            props.data.map((item, index) => {
                return (
                    <Form.Item
                        key={index}
                        label={item.label}
                        name={item.name}
                        rules={item.rules}
                    >
                        {renderFormByType(item)}
                    </Form.Item>
                );
            })
        );
    };
    return (
        <div className="u-form">
            <Form
                {...props.layout}
                name="basic"
                initialValues={{ remember: true }}
            >
                { renderChildForm() }
            </Form>
        </div>
    );
}