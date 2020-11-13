import React, { useEffect, useState } from 'react';
import { UselectDataObj } from '../../interfaces/common';
import { Select } from 'antd';

const { Option } = Select;

export function Uselect(props: {
    data: UselectDataObj[],
    defaultValue?: any,
    style?: React.CSSProperties,
    disabled?: boolean,
    onChange?: (value: any, option: any) => void,
} = {
    data: [],
    disabled: false
}) {
    const [data, setData] = useState<UselectDataObj[]>(props.data);

    // 有可能外界，异步的去改变了 data
    useEffect(() => {
        if (props.data && props.data.length > 0) {
            setData([...props.data]);
        }
    }, [props.data]);

    const handleChange = (value: any, option: any) => {
        console.log(value, option);
    };
    return (
        <div className="u-select" style={{ width: '100%', ...props.style }}>
            <Select disabled={props.disabled} defaultValue={props.defaultValue || null} style={{ width: '100%' }} onChange={handleChange}>
                {
                    data.map(item => {
                        return (
                            <Option disabled={item.disabled || false} key={item.value} value={item.value}>{item.title}</Option>
                        );
                    })
                }
            </Select>
        </div>
    );
}