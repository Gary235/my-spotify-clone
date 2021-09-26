import { FunctionComponent } from "react";

import { IAuthUser } from "types/auth_user.type";
import constants from "../constants/auth_user.constants";

const defaultState: IAuthUser = {
  code: null,
  state: null,
};

const authUserReducer: FunctionComponent<any> = (
  state = defaultState,
  action: any
) => {
  const { data, type } = action;
  switch (type) {
    case constants.AUTH_USER_SUCCESS:
      return {
        ...state,
        code: data.code,
        state: data.state,
      };
    case constants.AUTH_USER_ERROR:
    default:
      return state;
  }
};

export default authUserReducer;
