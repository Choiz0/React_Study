import { combineReducers } from "redux";
import todoReducer from "./todo";
import counter from "./counter";

const rootReducer = combineReducers({
    todos: todoReducer,
    counter: counter
  });
export default rootReducer;