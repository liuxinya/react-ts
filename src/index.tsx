import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import { Main } from './modules/main';

ReactDOM.render(
  <Main/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
