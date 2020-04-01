import { UserInfoObj } from '../interface/common';
import { localGetItem } from '../helpers/localStorage';
export const userInfo: UserInfoObj = {
    isCNLanguage: localGetItem('isCNLanguage') === 'false' ? false : true,
    isLightTheme: true
}

export const userInfoAction: UserInfoActionObj = {
    'CHANGE_LANGUAGE': (user: UserInfoObj) => {
        return {isCNLanguage: !user.isCNLanguage}
    },
    'CHANGE_THEME': (user: UserInfoObj) => {
        return {isLightTheme: !user.isLightTheme}
    }
}

export interface UserInfoActionObj {
    'CHANGE_LANGUAGE': (p: UserInfoObj) => UserInfoActionReturn,
    'CHANGE_THEME': (p: UserInfoObj) => UserInfoActionReturn,
}

type UseInfoActionObjkeys = keyof UserInfoObj

type UserInfoActionReturn = {
    [K in UseInfoActionObjkeys]? : UserInfoObj[K]
}
