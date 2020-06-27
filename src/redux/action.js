import * as constants from "./constant";
import { createAction } from "redux-actions";

export const getAccountInfoRequest = createAction(constants.GET_ACCOUNT_INFO_REQUEST);
export const getAccountInfoSuccess=createAction(constants.GET_ACCOUNT_INFO_SUCCESS);
export const getAccountInfoError=createAction(constants.GET_ACCOUNT_INFO_ERROR);