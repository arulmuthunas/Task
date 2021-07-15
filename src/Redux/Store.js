import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import getReducer from './Reducer';
//combineReducer
const rootReducer = combineReducers({getReducer});

export const Store = createStore(rootReducer,applyMiddleware(thunk));