import { all } from "redux-saga/effects";

import { watchAccessToken } from "./access_token.saga";
import { watchAuthUser } from "./auth_user.saga";

export default function* rootSaga(): any {
  yield all([watchAccessToken(), watchAuthUser()]);
}
