import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './modules/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './common/store/redux';
import { Provider as KeepAlivePrivoder} from 'react-keep-alive';
import { projectInit } from './common/setup/setup';
import { isProd } from './common/helpers/env';

projectInit()

ReactDOM.render(
  <React.StrictMode>
    {
      !isProd() ? <Provider store={store}>
                    <App />
                  </Provider>
                : <Provider store={store}>
                        <KeepAlivePrivoder include={['shopManagement', 'Test2']}>
                            <App />
                        </KeepAlivePrivoder>
                    </Provider>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
