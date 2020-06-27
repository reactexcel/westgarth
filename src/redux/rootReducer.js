import { combineReducers } from "redux";
import accountInfo from "./accountInfo/reducer";

const appReducer = combineReducers({
accountInfo
  
});
const makeRootReducer = (state, action) => {
  return appReducer(state, action);
};
export default makeRootReducer;
