import { store } from '../store/redux';
import { sysLanguage } from '../config/langulate';
export function language(cn: any) {
    if (cn && sysLanguage[cn]) {
        return store.getState().user.isCNLanguage ? cn : sysLanguage[cn]
    } else {
        return cn || ''
    }
}