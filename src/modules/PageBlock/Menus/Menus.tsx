import React, { useState } from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserInfoObj } from '../../../common/interface/common';
import { language } from '../../../common/helpers/language';
import { treeData, TreeDataObj } from '../../../common/config/menus';
import './index.less'

export function MenusTem(props: {
    user?: UserInfoObj,
    treeData?: TreeDataObj[],
    mode?: any
}) {
    console.log(props)
    const [menusData] = useState(props.treeData || treeData)
    const handleClick = (e: any) => {
        console.log('click ', e);
        e.item.node.click()
        
    }
    const renderMenuItem = (tree: TreeDataObj[] | undefined) => {
        if (tree && tree.length > 0) {
            return tree.map(item => {
                    return (
                        <Menu.Item key={item.key}>
                            { item.route ?  <Link to={item.route}>{language(item.title)}</Link> : language(item.title)}
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
                onClick={handleClick}
                mode={props.mode || 'inline'}
                theme={props.user && props.user.isLightTheme ? 'light' : 'dark'}
            >
                {
                    menusData.map(item => {
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