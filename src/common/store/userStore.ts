import { UserInfoObj, ReduxStoreAction } from '../interfaces/common';
// 保存用户信息，系统操作的信息
const userInfo: UserInfoObj = {
    name: '',
    age: 0
};

export function useInfoReducer(state: UserInfoObj = userInfo, action: ReduxStoreAction<UserInfoObj>): UserInfoObj {
    switch (action.type) {
        case 'UPDATE_AGE':
            return {
                ...state,
                age: action.data.age
            };
        default:
            return state;
    }
}
