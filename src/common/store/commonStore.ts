import { ReduxStoreAction } from '../interfaces/common';

type Other = {
    test: number
}

const other: Other = {
    test: 1
};

export function otherReducer(state: Other = other, action: ReduxStoreAction<Other>): Other {
    switch (action.type) {
        case 'TestUser':
            return {
                ...state,
                test: action.data.test
            };
        default:
            return state;
    }
}
