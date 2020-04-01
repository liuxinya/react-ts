import React, { useState, useEffect } from 'react';
import './index.less'
// import { Router } from 'react-router';
// import { createBrowserHistory } from 'history';
import { MainRouter } from '../../../router/MainRouter';
import { Utabs, UTabsObj } from '../../../common/components/Utabs/Utabs';
import { removeFromArrayByCondition } from '../../../common/helpers/array';
import { message } from 'antd';
import { UEventEmitter } from '../../../common/services/eventEmitter';
import { menusData, MenusDataObj } from '../../../common/config/menus';
import { Ioc } from '../../../common/helpers/injectable';

export function RightContent() {
    const [tabsData, setTabsData] = useState([menusData[0].children[0]])
    const [currMenu, setCurrMenu] = useState(menusData[0].children[0])
    const findItembyKeyInMenusData = (key: string): MenusDataObj | null => {
        let res: any = null
        menusData.forEach(item => {
            if (item.key === key) {
                res = item
            }
            if (item.children && item.children.length > 0 && !res) {
                item.children.forEach(item2 => {
                    if (item2.key === key) {
                        res = item2
                    }
                })
            }
        })
        return res
    }
    const isHaveItemInTabsData = (data: UTabsObj[], item: MenusDataObj): boolean => {
        let res = data.find(tab => tab.key === item.key)
        return Boolean(res)
    }
    useEffect(() => {
        let event: UEventEmitter = Ioc(UEventEmitter)
        event.on('menuClick', e => {
            let currMenuItem = findItembyKeyInMenusData(e.key)
            setCurrMenu(currMenuItem)
            if (currMenuItem) {
                setTabsData(data => {
                    if (!isHaveItemInTabsData(data, currMenuItem)) {
                        data.push({
                            ...currMenuItem,
                            dom: e.item.node
                        })
                    }
                    return [...data]
                })
            }
        })
    }, [])
    const closeTabHandler = (item: UTabsObj) => {
        if (tabsData.length > 1) {
            let arr = removeFromArrayByCondition(tabsData, (item1: UTabsObj) => {
                return item1.key === item.key
            })
            setTabsData([...arr])
        } else {
            message.warning('最后一个不能关闭')
        }
    }
    const clickTabHandler = (e: UTabsObj) => {
        console.log(e, '阿斯达')
        e && e.dom && e.dom.click()
    }

    return (
        <div className="right-content-wrapper">
            <div className="opening-menus">
                <Utabs onClick={(e: UTabsObj) => clickTabHandler(e)}
                       close={(item: UTabsObj) => closeTabHandler(item)}
                       currTabProps={currMenu} tabsData={tabsData}
                />
            </div>
            <div className="content">
                <MainRouter/>
            </div>
        </div>
    )
}