import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import { Main } from './modules/main';
import { getCookie } from './helper/cookie';
import { net } from './services/net';
import { ResData } from './common/interface/resData';
import { UserObj, User } from './common/model/user';
import { Ioc } from 'qzx-ioc';

ReactDOM.render(
  <Main/>,
  document.getElementById('root') as HTMLElement
);
let token: string = getCookie('userId');
if(token) {
  net.post('/getUserInfo', { token }).then((res: ResData<UserObj>) => {
    if(res.data.succ) {
      let user: User = Ioc(User);
      user.setName(res.data.data.username);
      user.setToken(res.data.data.token);
    }
  })
}
registerServiceWorker();
