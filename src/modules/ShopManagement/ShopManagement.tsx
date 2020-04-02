import React from 'react';
import { SearchOutlined, PlusOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';
import { UButtonGroupObj, UButtonGroup } from '../../common/components/UButtonGroup/UButtonGroup';
import { USearchGroup, USearchGroupObj } from '../../common/components/USearchGroup/USearchGroup';
import { Table } from 'antd';

const btns: UButtonGroupObj[] = [
    {
        title: '查询',
        icon: <SearchOutlined/>,
    },
    {
        title: '新增',
        icon: <PlusOutlined />,
    },
    {
        title: '修改',
        icon: <EditOutlined />,
    },
    {
        title: '删除',
        icon: <CloseOutlined />,
    },
]
const searchItems: USearchGroupObj[] = [
    {
        label: '店铺编码',
        type: 'input',
    }, {
        label: '店铺中文名称',
        spanValue: 7,
        type: 'input'
    }
]

const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
];
export function ShopManagement() {
    return (
        <div className='shop-management'>
            <div className="header-btns">
                <UButtonGroup data={btns}/>
            </div>
            <div className="search-group">
                <USearchGroup data={searchItems}/>
            </div>
            <div className="content">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}