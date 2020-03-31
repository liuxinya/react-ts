import { createStore } from 'redux'
import { ReduxStoreStateObj } from '../interface/common';
import { UserInfo, UserInfoAction } from './userStore';

const initData: ReduxStoreStateObj = {
    user: UserInfo
}
const AllActions: AllActionsObj = {
    user: UserInfoAction
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
                        ...obj[action.type](state[key])
                    }
                }
            }
        }
    }
    return state
}

export const store = createStore(reducer)

export interface AllActionsObj extends Object {
    user: UserInfoAction
}

type StoreAction = {
    type: string,
    [props: string]: any
}
