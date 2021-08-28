import { all } from "redux-saga/effects";

import { watchAccessToken } from "./access_token.saga";

export default function* rootSaga(): any {
  yield all([watchAccessToken()]);
}
