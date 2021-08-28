import { FunctionComponent } from "react";

import { IAccessToken } from "types/access_token.type";
import constants from "../constants/access_token.constants";

const defaultState: IAccessToken = {
  accessToken: "",
  tokenType: "",
  expiresIn: 0,
};

const accessTokenReducer: FunctionComponent<any> = (
  state = defaultState,
  action: any
) => {
  const { data, type } = action;
  switch (type) {
    case constants.ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: data.access_token,
      };
    case constants.ACCESS_TOKEN_ERROR:
    default:
      return state;
  }
};

export default accessTokenReducer;
