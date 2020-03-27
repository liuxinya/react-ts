import React from 'react';
// import { UserInfoStore } from '../../common/store/user';
// import { Ioc } from 'qzx-ioc';
import { store } from '../../common/store/redux';
export class Test2 extends React.Component {
    constructor(
        props: any,
        context: any,
    ) {
        super(props, context)
        
    }
    render() {
        // let userInfo: UserInfoStore = Ioc(UserInfoStore)
        return (
            <div>
                {store.getState().testData ? '哈哈' : '呵呵'}
            </div>
        )
    }
}