import './index.less'
// import { CloseOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { language } from '../../helpers/language';

function UTabsTem(props: {
    tabsData: UTabsObj[],
    onClick?: (p: UTabsObj) => void,
    close?: (p: UTabsObj) => void,
    currTabProps: UTabsObj
}) {
    const [tabsData, setTabsData] = useState<UTabsObj[]>([])
    const [currTab, setCurrTab] = useState<UTabsObj>(props.currTabProps)
    const clickHandler = (item: UTabsObj) => {
        setCurrTab({...item})
        props.onClick && (props.onClick(item))
    }
    const closeHandler = (e: React.MouseEvent, item: UTabsObj): any => {
        e.stopPropagation()
        props.close && props.close(item)
        setCurrTab(tabsData[tabsData.length - 1])
    }
    useEffect(() => {
        console.log('tabs change')
        setTabsData(props.tabsData)
        // 默认新添加的是currentTab
        setCurrTab(props.currTabProps)
    }, [props.tabsData, props.currTabProps])
    console.log('tabs')
    return (
        <div className='u-tabs'>
            <ul className="u-tabs-container">
                { tabsData.map((item) => {
                    return (
                        <li key={item.key} className={currTab.key === item.key && "active"}  onClick={() => clickHandler(item)}>
                            <span>{language(item.title)}</span>
                            <span onClick={e => closeHandler(e, item)} className='close'>×</span>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export const Utabs = connect(state => state)(UTabsTem)
export interface UTabsObj {
    title: string,
    active?: boolean,
    key: string | number,
    [props: string]: any
}