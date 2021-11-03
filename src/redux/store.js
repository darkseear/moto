import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { auth_reducer } from './reducers/auth_reducer';
import { category_reducer } from './reducers/category_reducer';
import { product_reducer } from './reducers/product_reducer';
import { reg_reducer } from './reducers/reg_reducer';

const reducer = combineReducers(
    {
        auth:auth_reducer,
        registration:reg_reducer,
        products:product_reducer,
        category:category_reducer
    }
)

let store = createStore(reducer, applyMiddleware(thunk));

export default store