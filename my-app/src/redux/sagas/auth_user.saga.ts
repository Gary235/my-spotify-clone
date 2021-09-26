import { all, call, put, takeLatest } from "redux-saga/effects";

import { authUser as authUserApi } from "api/actions";
import constants from "../constants/auth_user.constants";
import accessTokenConstants from "../constants/access_token.constants";

function* authUser() {
  try {
    const data: Record<string, unknown> = yield call(authUserApi);
    yield put({ type: constants.AUTH_USER_SUCCESS, data });

    yield put({
      type: accessTokenConstants.ACCESS_TOKEN_REQUESTED,
      code: data.code,
    });
  } catch (error) {
    yield put({ type: constants.AUTH_USER_ERROR });
  }
}

export function* watchAuthUser() {
  yield all([takeLatest([constants.AUTH_USER_REQUESTED], authUser)]);
}
