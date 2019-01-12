import { createStore, applyMiddleware } from 'redux';
import reducers from "../reducers/";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//所有中间键都在store中进行  redux是同步的，不支持异步，所以需要中间键
const store = createStore(reducers, applyMiddleware(thunk));
export default store;