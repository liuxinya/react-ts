import { User } from 'src/common/model/user';
import { Ioc, Injectable } from 'qzx-ioc';
import { Detect } from 'src/helper/detect';
@Injectable()
export class UserService {
    private handlers: cbType[] = [];
    constructor() {
        let user: User = Ioc(User);
        Detect.detectDataChange({
            obj: user,
            key: 'isLogin',
            oper: this.userStatusChange
        })
    }
    private userStatusChange = (val: boolean) => {
        this.handlers.length > 0 && this.handlers.forEach((item: cbType) => {
            item(val);
        })
    }
    userStatusChangeHandler(fn: cbType) {
        let funId = fn;
        this.handlers.push(funId)
    }
}
type cbType = (param: boolean) => void;