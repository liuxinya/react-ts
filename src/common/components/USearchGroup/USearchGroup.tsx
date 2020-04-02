import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input } from 'antd';
import { language } from '../../helpers/language';
import { Uselect, USelectObj } from '../USelect/USelect';
import './index.less'

function USearchGroupTem(props: {
    data: USearchGroupObj[]
}) {
    const renderEleByType = (item: USearchGroupObj) => {
        switch (item.type) {
            case 'input':
                return <Input size={item.size} placeholder={item.label} />
            case 'select':
                return <Uselect data={item.data} onChange={item.onchange}></Uselect>
            default:
                return null
        }
    }
    
    return props.data && props.data.length > 0 ? (
        <div className="u-search-group">
            <Row gutter={16}>
                { props.data.map((item, index) => {
                    return (
                        <Col className="gutter-row" span={6} key={index}>
                            <div className='u-search-item'>
                                <Row align='middle'>
                                    <Col className='label-col' span={item.spanValue || 6}>
                                        <span className='label'>{language(item.label)}</span>
                                    </Col>
                                    <Col span={item.spanValue ? 24 - item.spanValue : 18}>
                                        {renderEleByType(item)}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    )
                }) }
            </Row>
        </div>
    ) : null
}

export const USearchGroup = connect(state => state)(USearchGroupTem)

export interface USearchGroupObj {
    label?: string;
    type?: 'input' | 'select' | 'datepicker',
    data?: USelectObj[],
    placeholder?: string,
    width?: number,
    spanValue?: number,
    size?: 'large' | 'middle' | 'small',
    onchange?: (e: any, p: any) => void
}