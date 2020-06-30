import { handleActions } from "redux-actions";
import * as constants from "../constant";
import update from "immutability-helper";

const initialState = {
  isLoading: false,
  isSuccess: false,
  data: {},
  isError: false
};



const getSuccess = (state = initialState, action) => {
    return update(state, {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data:{$set :action.payload}
    });
  }
 
export default handleActions(
  {
    
    [constants.GET_SUCCESS]:getSuccess

    
  },
  initialState
);
