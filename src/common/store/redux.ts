import { createStore, combineReducers } from 'redux'
import { useInfoReducer } from './userStore';

const rootReducer = combineReducers({
    user: useInfoReducer,
})

export const store = createStore(rootReducer)
