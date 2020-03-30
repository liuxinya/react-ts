import React from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

export function Menus() {
    const handleClick = (e: any) => {
        console.log('click ', e);
    }
    return (
        <div className="menus-wrapper">
            <Menu
                onClick={handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">
                        <Link to='/test'>test1</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/test2'>test2</Link>
                    </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        </div>
    )
}