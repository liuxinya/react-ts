import { Ioc } from "qzx-ioc";
import { UNetService } from '../services/net';
import { localGetItem } from '../helpers/localStorage';

export function projectInit() {
    // 拿到用户信息
    let net = Ioc(UNetService);
    // net.get('/api/user').then(() => {

    // })
    // 设置 axios 
    net.setHeader('Accept-Language', localGetItem('isCNLanguage') || 'true')
}