import { UserInfoObj, ReduxStoreAction } from '../interface/common';
import { localGetItem } from '../helpers/localStorage';

const userInfo: UserInfoObj = {
    isCNLanguage: localGetItem('isCNLanguage') === 'false' ? false : true,
    isLightTheme: true
}

export const useInfoReducer =  (state: UserInfoObj = userInfo, action: ReduxStoreAction) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                isCNLanguage: !state.isCNLanguage
            }
        case 'CHANGE_THEME':
            return {
                ...state,
                isLightTheme: !state.isLightTheme
            }
        default:
            return state;
    }
};
