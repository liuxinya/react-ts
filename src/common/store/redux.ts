import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userInfoReducer } from './userStore';
import thunk from 'redux-thunk';
import { otherReducer } from './otherStore';

const rootReducer = combineReducers({
    user: userInfoReducer,
    Other: otherReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
