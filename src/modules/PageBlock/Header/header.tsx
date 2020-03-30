import React from 'react';
import './index.less'
import { Switch, message } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const userMenus = (
    <Menu>
        <Menu.Item>
            登出
        </Menu.Item>
    </Menu>
)

export function Header() {
    const changeTheme = (e: any) => {
        if (e) {
            // @ts-ignore
            console.log(window['less']) 
            // @ts-ignore
            window.less.modifyVars(
                {
                  '@primary-color': '#aaa',
                }
              )
              .then(() => { 
                message.success('主题切换成功')
              })
              .catch((error: any) => {
                message.error(`主题切换失败`);
                console.log(error)
              });
        } else {
            // @ts-ignore
            window.less.modifyVars(
                {
                    '@primary-color': '#1DA57A',
                }
              )
              .then(() => { 
                message.success('主题切换成功')
              })
              .catch((error: any) => {
                message.error(`主题切换失败`);
                console.log(error)
              });
        }
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
                <Switch checkedChildren="EN" unCheckedChildren="CN" defaultChecked />
                <Switch onClick={changeTheme} checkedChildren="D" unCheckedChildren="N" defaultChecked />
            </div>
        </div>
    )
}