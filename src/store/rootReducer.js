import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
const rootReducer = combineReducers({
  counter: counterReducer,
  //   todo: {},
  //   loadData: {},
});

export default rootReducer;
