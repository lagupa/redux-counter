import CounterReducer from "./Counter_Reducer";
import LogStatusReducers from "./LogStatus_Reducer";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
  LogStatus: LogStatusReducers,
  Counter: CounterReducer
});

export default AllReducers;
