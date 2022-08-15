import { combineReducers } from "redux";
import { tests } from "./tests";
import { modal } from "./modal";

export const rootReducer = combineReducers({
  modal,
  tests,
});
