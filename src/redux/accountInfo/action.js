import fireAjax from "../../services/index";
import { call, put } from "redux-saga/effects";
import * as actions from "../../redux/action";
export function* getAccountInfoRequest(action) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "jJQViBKlSo9ZLo5asqU8"
  };
  try {
    const response = yield call(
      fireAjax,
      "GET",
      `${process.env.REACT_APP_BASE_URL}/account/`,
      headers,
      ""
    );
    if (response) {
        console.log(response,"hhh")
      yield put(actions.getAccountInfoSuccess(response.data));
    }
  } catch (e) {
    yield put(actions.getAccountInfoError(e.response));
  }
}
