import { combineReducers } from 'redux';
import goods from './goods';
import carts from './carts';
import clear from "./clear";
import order from "./order";


export default combineReducers({   //combineReducers类似于object.assign,不过两者不同
    goods,
    carts,
    clear,
    order
})