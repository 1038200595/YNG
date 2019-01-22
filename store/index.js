import { createStore, applyMiddleware } from 'redux';
import reducers from "../reducers/";
import thunk from 'redux-thunk';//所有中间键都在store中进行  redux是同步的，不支持异步，所以需要中间键
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'a4',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}