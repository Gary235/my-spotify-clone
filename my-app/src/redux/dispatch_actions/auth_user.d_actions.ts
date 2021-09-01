import constants from "../constants/auth_user.constants";

export function onGetAuthUser(): { type: string } {
  return {
    type: constants.AUTH_USER_REQUESTED,
  };
}
