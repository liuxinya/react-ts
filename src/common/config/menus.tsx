// import * as React from 'react';
export const menusData: MenusDataObj[] = [
    {
        title: '主档管理',
        key: 'mainFileManagement',
        icon: '',
        children: [
            {
                title: '店铺管理',
                icon: '',
                route: '/shopManagement',
                key: 'shopManagement',
            },
            {
                title: 'test',
                route: '/test2',
                key: '0-0-1',
            },
        ],
    },
];

export interface MenusDataObj {
    title: string,
    key: string,
    icon?: string,
    route?: string,
    children?: MenusDataObj[],
    [props: string]: any
}