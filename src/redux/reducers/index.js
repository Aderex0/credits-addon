import { combineReducers } from "redux";
import credits from "./credits.reducer";

const rootReducer = combineReducers({
  credits,
});

export default rootReducer;
