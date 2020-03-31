import * as React from 'react';
// import { Input } from 'antd';
import { language } from '../../common/helpers/language';
import { connect } from 'react-redux';
// import { T } from '../../common/decorators/t.dec';

// @connect()
// @ts-ignore
// @T()
// function Test1() {
//     return (
//         <div>
//             test1111
//             {language('打开')}
//             <Input placeholder='213'></Input>
//         </div>
//     )
// }
// function mapStateToProps(state: any){
//     console.log(state, 11)
//     return state
// }
// export { Test1 }
@connect(state => state)
export class Test1 extends React.Component {
    render() {
        return (
            <div>1{language('打开')}</div>
        )
    }
}
// export const Test1 = connect(mapStateToProps)(Test1Tem)