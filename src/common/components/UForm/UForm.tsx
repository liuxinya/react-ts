/**
 * 最初设想， 传递一个json就能渲染出form表单
 */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';
import { UFormDataObj } from '../../interfaces/common';
import { Uselect } from '../Uselect/Uselect';
import { FormProps } from 'antd/lib/form';
import { RowProps } from 'antd/lib/row';
import { ColProps } from 'antd/lib/col';
const { RangePicker } = DatePicker;

interface UFormProps extends FormProps {
    data: UFormDataObj[],
    RowProps?: RowProps,
    ColProps?: ColProps
}

export function UForm(propsTem: UFormProps) {
    const [props] = useState<UFormProps>(() => {
        return {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
            // 默认一行摆一个
            ColProps: {
                span: 24
            },
            ...propsTem
        };
    });
    const renderFormByType = (item: UFormDataObj) => {
        switch (item.type) {
            case 'Input':
                return (
                    <Input {...item.InputProps}/>
                );
            case 'Select':
                return (
                    <Uselect { ...item.SelectProps }/>
                );
            case 'Button':
                return (
                    <Button {...item.ButtonProps}>
                        { item.ButtonProps.text}
                    </Button>
                );
            case 'RangePicker':
                return (
                    <RangePicker {...item.RangePickerProps}/>
                );
            case 'DatePicker':
                return (
                    <DatePicker {...item.DatePickerProps}/>
                );
            default:
                return null;
        }
    };
    const renderChildForm = () => {
        // 考虑外界可以快速摆放表单，这里增加了栅格
        return (
            <Row {...props.RowProps}>
                {
                    props.data.map((item, index) => {
                        return (
                            <Col key={index} {...props.ColProps}>
                                <Form.Item
                                    label={item.label}
                                    name={item.name}
                                    rules={item.rules}
                                >
                                    {renderFormByType(item)}
                                </Form.Item>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    };
    return (
        <div className="u-form">
            <Form
                {...props}
                name="basic"
            >
                { renderChildForm() }
            </Form>
        </div>
    );
}