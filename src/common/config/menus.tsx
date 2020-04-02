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
                title: '商家管理',
                route: '/businessManagement',
                key: 'businessManagement',
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