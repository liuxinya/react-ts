import { Injectable, Ioc } from '@baidu/ioc';
import { ReduxStoreAction } from '../interfaces/common';

type Other = {
    test: number
}

const other: Other = {
    test: 1
};


@Injectable()
class OtherAction {
    'TEST_USER' = (data: Other) => ({
        test: data.test
    })
}

// 这个地方 要再封装一下 先放着， 这只是起手， 以防小伙伴们再看代码
export function otherReducer(state: Other = other, action: ReduxStoreAction<OtherAction, Other>): Other {
    let res = null;
    const otherAction: OtherAction = Ioc(OtherAction);
    Object.keys(otherAction).forEach(item => {
        if (action.type === item) {
            res = {
                ...state,
                ...otherAction[item](action.data),
            };
        }
    });
    return res || state;
    // switch (action.type) {
    //     case 'TEST_USER':
    //         return {
    //             ...state,
    //             test: action.data.test
    //         };
    //     default:
    //         return state;
    // }
}
