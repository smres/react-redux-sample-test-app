import { combineReducers } from "redux";
import productReducer from "./productReducer";

let productState = combineReducers({ productStateInitial: productReducer });


export default productState;