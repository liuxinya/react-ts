import React from 'react';
import './index.less'
import { Switch } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UUserService } from '../../../common/services/user';
import { store } from '../../../common/store/redux';
import { Ioc } from 'qzx-ioc';

const userMenus = (
    <Menu>
        <Menu.Item>
            登出
        </Menu.Item>
    </Menu>
)

export function Header() {
    // const userService: UUserService = Ioc(UUserService);
    const changeTheme = () => {
        const userService: UUserService = Ioc(UUserService);
        userService.changeTheme()
    }
    const ChangeLanguage = () => {
        const userService: UUserService = Ioc(UUserService);
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
                <Switch onClick={ChangeLanguage}
                        checkedChildren="CN"
                        unCheckedChildren="EN"
                        defaultChecked={store.getState().user.isCNLanguage}
                />
                <Switch onClick={changeTheme} checkedChildren="D" unCheckedChildren="N" defaultChecked />
            </div>
        </div>
    )
}