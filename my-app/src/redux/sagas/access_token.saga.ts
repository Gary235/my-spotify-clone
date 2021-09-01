import { all, call, put, takeLatest } from "redux-saga/effects";

import { getAccessToken as getAccessTokenApi } from "api/actions";
import constants from "../constants/access_token.constants";

export function* getAccessToken(action: any) {
  try {
    const data: unknown = yield call(getAccessTokenApi, action.code);
    yield put({ type: constants.ACCESS_TOKEN_SUCCESS, data });
  } catch (error) {
    yield put({ type: constants.ACCESS_TOKEN_ERROR });
  }
}

export function* watchAccessToken() {
  yield all([takeLatest([constants.ACCESS_TOKEN_REQUESTED], getAccessToken)]);
}
