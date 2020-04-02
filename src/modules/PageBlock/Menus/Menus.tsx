import React, { useState } from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserInfoObj } from '../../../common/interface/common';
import { language } from '../../../common/helpers/language';
import './index.less'
import { MenusDataObj, menusData } from '../../../common/config/menus';
import { UEventEmitter } from '../../../common/services/eventEmitter';
import { Ioc } from 'qzx-ioc';

export function MenusTem(props: {
    user?: UserInfoObj,
    treeData?: MenusDataObj[],
    mode?: any
}) {
    const [menus] = useState(props.treeData || menusData)
    const addDomToMenus = (item: MenusDataObj) => {
        item.dom = React.createRef();
        return item.dom
    }
    const clickTemDom = (e) => {
        let event: UEventEmitter = Ioc(UEventEmitter)
        event.emit('menuClick', e)
    }
    const renderMenuItem = (_menus: MenusDataObj[] | undefined) => {
        if (_menus && _menus.length > 0) {
            return _menus.map(item => {
                    return (
                        <Menu.Item key={item.key}>
                            {
                                item.route ?
                                <Link to={item.route}>
                                    {language(item.title)}
                                    <div onClick={() => clickTemDom(item)}
                                    ref={addDomToMenus(item)}
                                    className='tem-div'/>
                                </Link> :
                                language(item.title)
                            }
                        </Menu.Item>
                    )
            })
        } else {
            return null
        }
    }
    return (
        <div className="menus-wrapper">
            <Menu
                defaultSelectedKeys={['shopManagement']}
                mode={props.mode || 'inline'}
                theme={props.user && props.user.isLightTheme ? 'light' : 'dark'}
            >
                {
                    menus.map(item => {
                        return (
                            <SubMenu
                                key={item.key}
                                title={language(item.title)}
                            >
                                { renderMenuItem(item.children) }
                            </SubMenu>
                        )
                    })
                }
            </Menu>
        </div>
    )
}
export const Menus =  connect(state => state)(MenusTem)