import { takeLatest, all } from "redux-saga/effects";
import * as constants from "./constant";
import { getAccountInfoRequest } from "./accountInfo/action";

function* watchActions() {
  yield takeLatest(constants.GET_ACCOUNT_INFO_REQUEST, getAccountInfoRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
