import { combineReducers } from "redux";
import productReducer from "./productReducer";

combineReducers({productState: productReducer})

export default combineReducers;