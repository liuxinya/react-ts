import React, { useEffect, useState } from 'react';
import { UselectDataObj } from '../../interfaces/common';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

const { Option } = Select;

interface UselectProps<VT> extends SelectProps<VT> {
    data: UselectDataObj[],
    style?: React.CSSProperties,
}

export function Uselect(props: UselectProps<string| number>) {
    const [data, setData] = useState<UselectDataObj[]>(props.data);

    // 有可能外界，异步的去改变了 data
    useEffect(() => {
        if (props.data && props.data.length > 0) {
            setData([...props.data]);
        }
    }, [props.data]);
    return (
        <div className="u-select" style={{ width: '100%', ...props.style }}>
            <Select {...props}>
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