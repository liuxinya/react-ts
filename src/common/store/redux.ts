import { createStore, combineReducers, applyMiddleware } from 'redux';
import { useInfoReducer } from './userStore';
import thunk from 'redux-thunk';
import { otherReducer } from './commonStore';

const rootReducer = combineReducers({
    user: useInfoReducer,
    commonStore: otherReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
