import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Button } from 'antd';
import { language } from '../../common/helpers/language';
import { USearchGroup, USearchGroupObj } from '../../common/components/USearchGroup/USearchGroup';

const { TabPane } = Tabs;

function BusinessManagementTem() {
    const TabsChange = (e) => {
        console.log(e)
    }
    const searchItems: USearchGroupObj[] = [
        {
            label: '商家',
            type: 'select',
            data: [
                {
                    title: '1',
                    value: '1'
                }
            ]
        }, {
            label: '国家地区',
            type: 'select',
            data: [
                {
                    title: '1',
                    value: '1'
                }
            ]
        }, {
            label: '登录邮箱',
            type: 'input',
        }
    ]
    const operations = <Button size='small' type='primary'>{language('创建商家')}</Button>
    return (
        <div className="business-management">
            <Tabs tabBarExtraContent={operations} size='small' defaultActiveKey="1" onChange={e => TabsChange}>
                <TabPane tab={language('商家管理')} key="1">
                    <div className="search-group">
                        <USearchGroup data={searchItems}/>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )
}
export const BusinessManagement = connect(state => state)(BusinessManagementTem)