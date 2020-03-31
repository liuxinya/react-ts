
import { Injectable } from 'qzx-ioc';
import { message } from 'antd';
import { themeColor } from '../config/theme.color'
import { store } from '../store/redux';
import { localSetItem } from '../helpers/localStorage';
import { UNetService } from './net';
@Injectable()
export class UUserService {
    constructor (
        private net: UNetService
    ) {}
    isCNLanguage: boolean = true
    changeTheme() {
        // @ts-ignore
        window.less && window.less.modifyVars(
            store.getState().user.isLightTheme ? themeColor.dark : themeColor.white
        ).then(() => {
            message.success('主题切换成功')
            store.dispatch({
                type: 'CHANGE_THEME'
            })
        }).catch((error: any) => {
            message.error(`主题切换失败`);
            console.log(error)
        });
    }
    chageLanguage() {
        store.dispatch({
            type: 'CHANGE_LANGUAGE'
        })
        this.isCNLanguage = store.getState().user.isCNLanguage
        localSetItem('isCNLanguage', this.isCNLanguage)
        this.net.setHeader('isCNLanguage', this.isCNLanguage)
    }
}