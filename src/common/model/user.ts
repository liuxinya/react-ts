import { Injectable } from 'qzx-ioc';
@Injectable()
class User {
    isLogin: boolean = false;
    private name: string;
    private token: string;
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
        this.isLogin = true;
    }
    getToken() {
        return this.token;
    }
    setToken(token: string) {
        this.token = token;
        document.cookie=`userId=${this.token}`;
    }
    destroyToken() {
        this.setToken('');
        this.isLogin = false;
    }
}
export { User };

export interface UserObj {
    username: string;
    token: string;
}