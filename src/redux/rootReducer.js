import { combineReducers } from "redux";
import accountInfo from "./accountInfo/reducer";
import dashboard from "./dashboard/reducer";
import collection from "./collection/reducer";

const appReducer = combineReducers({
  accountInfo,
  dashboard,
  collection
});
const makeRootReducer = (state, action) => {
  return appReducer(state, action);
};
export default makeRootReducer;
