import { FunctionComponent } from "react";

import { IAuthUser } from "types/auth_user.type";
import constants from "../constants/access_token.constants";

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
    case constants.ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        code: data.code,
        state: data.state,
      };
    case constants.ACCESS_TOKEN_ERROR:
    default:
      return state;
  }
};

export default authUserReducer;
