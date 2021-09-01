import { all, call, put, takeLatest } from "redux-saga/effects";

import { authUser as authUserApi } from "api/actions";
import constants from "../constants/auth_user.constants";

function* authUser() {
  try {
    const data: unknown = yield call(authUserApi);
    yield put({ type: constants.AUTH_USER_SUCCESS, data });
  } catch (error) {
    yield put({ type: constants.AUTH_USER_ERROR });
  }
}

export function* watchAutUser() {
  yield all([takeLatest([constants.AUTH_USER_REQUESTED], authUser)]);
}
