import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './ducks';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(reducers);

export default createStore(rootReducer, {}, applyMiddleware(thunk));
