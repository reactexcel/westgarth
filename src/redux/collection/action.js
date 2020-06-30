import fireAjax from "../../services/index";
import { call, put } from "redux-saga/effects";
import * as actions from "../../redux/action";
export function* getCollectionRequest(action) {
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
      yield put(actions.getCollectionSuccess(response.data));
    }
  } catch (e) {
    yield put(actions.getCollectionError(e.response));
  }
}
