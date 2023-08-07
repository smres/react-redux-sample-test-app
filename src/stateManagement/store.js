import { createStore } from 'redux'
import productState from "./reducers/index";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, productState)

// const store = createStore(productState);
// export default store;

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)