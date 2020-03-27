import { createStore } from 'redux'


const initData = {
    testData: true
}
const reducer = (state: {testData: boolean} = initData, action: any) => {
    switch (action.type) {
        case 'CHANGE': return { testData: !state.testData };
        default: return state;
    }
}


export const store = createStore(reducer)
