import { UserInfoObj } from '../interface/common';
export const UserInfo: UserInfoObj = {
    isCNLanguage: true,
    isLightTheme: true
}

export const UserInfoAction: UserInfoAction = {
    'CHANGE_LANGUAGE': (user: UserInfoObj) => {
        return {isCNLanguage: !user.isCNLanguage}
    },
    'CHANGE_THEME': (user: UserInfoObj) => {
        return {isLightTheme: !user.isLightTheme}
    }
}

export interface UserInfoAction {
    'CHANGE_LANGUAGE': (p: UserInfoObj) => UserInfoActionReturn,
    'CHANGE_THEME': (p: UserInfoObj) => UserInfoActionReturn,
}

type UseInfoActionObjkeys = keyof UserInfoObj

type UserInfoActionReturn = {
    [K in UseInfoActionObjkeys]? : UserInfoObj[K]
}
