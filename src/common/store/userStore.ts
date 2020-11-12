import { Injectable, Ioc } from '@baidu/ioc';
import { UserInfoObj, ReduxStoreAction } from '../interfaces/common';

// 为什么要改成这样？
// 都是为了少写类型定义 + 让redux支持提示和值的推断

// 保存用户信息，系统操作的信息
const userInfo: UserInfoObj = {
    name: '',
    age: 0
};

// type ActionType = 'UPDATE_AGE' | 'BBB'

@Injectable()
class UserAction {
    'UPDATE_AGE' = (data: UserInfoObj) => ({
        age: data.age
    })
    'BBB' = (data: UserInfoObj) => ({
        age: data.age
    })
}

export function userInfoReducer(state: UserInfoObj = userInfo, action: ReduxStoreAction<UserAction, UserInfoObj>): UserInfoObj {
    let res = null;
    const userAction: UserAction = Ioc(UserAction);
    Object.keys(userAction).forEach(item => {
        if (action.type === item) {
            res = {
                ...state,
                ...userAction[item](action.data)
            };
        }
    });
    return res || state;
    // switch (action.type) {
    //     case 'UPDATE_AGE':
    //         return {
    //             ...state,
    //             age: action.data.age
    //         };
    //     case 'BBB':
    //         return {
    //             ...state,
    //             age: action.data.age
    //         };
    //     default:
    //         return state;
    // }
}
