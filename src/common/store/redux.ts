import { createStore } from 'redux'
import { ReduxStoreStateObj } from '../interface/common';
import { userInfo, UserInfoActionObj, userInfoAction } from './userStore';

const initData: ReduxStoreStateObj = {
    user: userInfo
}
const AllActions: AllActionsObj = {
    user: userInfoAction
}

const reducer = (state = initData, action: StoreAction) => {
    for (let key of Object.keys(AllActions)) {
        if (AllActions.hasOwnProperty(key)) {
            // @ts-ignore
            let obj = AllActions[key]
            if (obj[action.type]) {
                return {
                    ...state,
                    [key]: {
                        // @ts-ignore
                        ...state[key],
                        // @ts-ignore
                        ...obj[action.type](state[key], action.payload || null)
                    }
                }
            }
        }
    }
    return state
}

export const store = createStore(reducer)

export interface AllActionsObj extends Object {
    user: UserInfoActionObj
}

type StoreAction = {
    type: string,
    payload?: any;
    [props: string]: any
}
