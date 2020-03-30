// import { DatePicker, Button, ConfigProvider } from 'antd';
import React from 'react';
// import enUS from 'antd/es/locale/en_US';
// import zhCN from 'antd/es/locale/zh_CN';
// import { store } from '../../common/store/redux';
// import { UserInfoStore } from '../../common/store/user';
// import { Ioc } from 'qzx-ioc';
// import moment from 'moment';
// import 'moment/locale/zh-cn';

// moment.locale('en');

export function Test() {
    // let userInfo: UserInfoStore = Ioc(UserInfoStore)
    return (
        <div>
            Test
        </div>
    )
}
// export function Test() {
//     const [flag, setFlag] = useState(true)
//     const [locale, setLocale] = useState(enUS)
//     const aa = () => {
//         console.log(flag)
//         if (flag) {
//             setLocale(enUS)
//             moment.locale('en') 
//         } else {
//             setLocale(zhCN as any)
//             moment.locale('zh-cn');
//         }
//         setFlag(!flag)
//     }
//     return (
//         <div>
//             <Button onClick={aa}>中文</Button>
//             <Button>英文</Button>
//             <ConfigProvider locale={locale}>
//                 <DatePicker />
//             </ConfigProvider>
//         </div>
//     )
// }


// import './App.less';
// import { hot } from 'react-hot-loader/root';
// import enUS from 'antd/es/locale/en_US';
// import React from 'react';
// import moment from 'moment';
// import { Radio, ConfigProvider, Pagination } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN';

// class App extends React.Component<any, {
//     locale: any
//   }> {
//     constructor() {
//       super({}, null);
//       this.state = {
//         locale: enUS,
//       };
//     }
  
//     changeLocale = (e: any) => {
//       const localeValue = e.target.value;
//       this.setState({ locale: localeValue });
//       if (!localeValue) {
//         moment.locale('en');
//       } else {
//         moment.locale('zh-cn');
//       }
//     };
  
//     render() {
//       const { locale } = this.state;
//       return (
//         <div>
//           <div className="change-locale">
//             <span style={{ marginRight: 16 }}>Change locale of components: </span>
//             <Radio.Group value={locale} onChange={this.changeLocale}>
//               <Radio.Button key="en" value={enUS}>
//                 English
//               </Radio.Button>
//               <Radio.Button key="cn" value={zhCN}>
//                 中文
//               </Radio.Button>
//             </Radio.Group>
//           </div>
//           <ConfigProvider locale={locale}>
//             <Page
//               key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}
//             />
//           </ConfigProvider>
//         </div>
//       );
//     } 
// }
// class Page extends React.Component {
//     state = {
//       visible: false,
//     };
  
//     showModal = () => {
//       this.setState({ visible: true });
//     };
  
//     hideModal = () => {
//       this.setState({ visible: false });
//     };
  
//     render() {
//         console.log(this)
//       return (
//         <div className="locale-components">
//           <div className="example">
//             <Pagination defaultCurrent={1} total={50} showSizeChanger />
//           </div>
//         </div>
//       );
//     }
//   }
// Test.contextTypes = {
//     flag: Boolean
// }