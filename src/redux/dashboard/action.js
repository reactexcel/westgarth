import fireAjax from "../../services/index";
import { call, put } from "redux-saga/effects";
import * as actions from "../../redux/action";

export function* getRequest(action) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "jJQViBKlSo9ZLo5asqU8"
  };
  try {
    const response = yield call(
      fireAjax,
      "GET",
      `${process.env.REACT_APP_BASE_URL}/collections/`,
      headers,
      ""
    );
    if (response) {
      yield put(actions.getSuccess(response.data));
    }
  } catch (e) {
    yield put(actions.getError(e.response));
  }
}
