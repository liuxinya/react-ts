import React from 'react';
import './index.less'
import { Switch } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UUserService } from '../../../common/services/user';
import { Ioc } from 'qzx-ioc';

const userMenus = (
    <Menu>
        <Menu.Item>
            登出
        </Menu.Item>
    </Menu>
)

export function Header() {
    const userService: UUserService = Ioc(UUserService);
    const changeTheme = () => {
        userService.changeTheme()
    }
    const ChangeLanguage = () => {
        userService.chageLanguage()
    }
    return (
        <div className="header-wrapper">
            <div className="user">
                <Dropdown overlay={userMenus}>
                    <span>
                        刘新亚 <DownOutlined />
                    </span>
                </Dropdown>
            </div>
            <div className="language-change">
                <Switch onClick={ChangeLanguage} checkedChildren="CN" unCheckedChildren="EN" defaultChecked />
                <Switch onClick={changeTheme} checkedChildren="D" unCheckedChildren="N" defaultChecked />
            </div>
        </div>
    )
}