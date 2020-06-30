import { takeLatest, all } from "redux-saga/effects";
import * as constants from "./constant";
import { getAccountInfoRequest } from "./accountInfo/action";
import { getRequest } from "./dashboard/action";
import { getCollectionRequest } from "./collection/action";

function* watchActions() {
  yield takeLatest(constants.GET_ACCOUNT_INFO_REQUEST, getAccountInfoRequest);
  yield takeLatest(constants.GET_COLLECTION_REQUEST, getCollectionRequest);
  yield takeLatest(constants.GET_REQUEST, getRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
