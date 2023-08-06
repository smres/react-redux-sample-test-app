import { createStore } from 'redux'
import productState from "./reducers/index"

const store = createStore(productState);

export default store;