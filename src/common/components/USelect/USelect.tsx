import React from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { language } from '../../helpers/language';
const { Option } = Select;

function UselectTem(props: {
    data: USelectObj[],
    width?: number;
    defaultValue?: string | number;
    onChange: (value: any, option: any) => void
}) {
    return (
        <div className="u-select">
            <Select defaultValue={props.defaultValue} style={{ width: props.width || '100%' }} onChange={props.onChange}>
                {
                    props.data.map(item => {
                        return (
                            <Option disabled={item.disabled} value={item.value}>{language(item.title)}</Option>
                        )
                    })
                }
            </Select>
        </div>
    )
}

export const Uselect = connect(state => state)(UselectTem)

export interface USelectObj {
    title: string;
    value: string | number;
    disabled?: boolean
}
