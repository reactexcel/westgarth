import * as constants from "./constant";
import { createAction } from "redux-actions";

export const getAccountInfoRequest = createAction(constants.GET_ACCOUNT_INFO_REQUEST);
export const getAccountInfoSuccess=createAction(constants.GET_ACCOUNT_INFO_SUCCESS);
export const getAccountInfoError=createAction(constants.GET_ACCOUNT_INFO_ERROR);

export const getCollectionRequest = createAction(constants.GET_COLLECTION_REQUEST);
export const getCollectionSuccess=createAction(constants.GET_COLLECTION_SUCCESS);
export const getCollectionError=createAction(constants.GET_COLLECTION_ERROR);


export const getRequest = createAction(constants.GET_REQUEST);
export const getSuccess=createAction(constants.GET_SUCCESS);
export const getError=createAction(constants.GET_ERROR);