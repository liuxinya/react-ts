import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { language } from '../../helpers/language';
import './index.less'

function UButtonGroupTem(props: {
    data: UButtonGroupObj[]
}) {
    const clickHandler = (e: React.MouseEvent, item: UButtonGroupObj) => {
        item.onClick && item.onClick(e)
    }
    return props.data && props.data.length > 0 ? (
        <div className="u-button-group">
            {
                props.data.map((item, index) => {
                    return item.hide ? null : (
                        <Button type={item.type || 'primary'}
                                size={item.size}
                                icon={item.icon}
                                onClick={e => clickHandler(e, item)}
                                shape={item.shape}
                                disabled={item.disabled}
                                key={index}
                        >
                            {language(item.title)}
                        </Button>                    )
                })
            }
        </div>
    ) : null
}

export const UButtonGroup = connect(state => state)(UButtonGroupTem)

export interface UButtonGroupObj {
    title: string,
    hide?: boolean,
    type?: "primary" | "link" | "dashed" | "ghost" | "danger" | "default"
    disabled?: false,
    icon?: React.ReactNode | null,
    size?: null,
    onClick?: (e: React.MouseEvent) => void | null,
    shape?: "circle" | "circle-outline" | "round"
}