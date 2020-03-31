// import * as React from 'react';
export const treeData: TreeDataObj[] = [
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

export interface TreeDataObj {
    title: string,
    key: string,
    icon?: string,
    route?: string,
    children?: TreeDataObj[]
}