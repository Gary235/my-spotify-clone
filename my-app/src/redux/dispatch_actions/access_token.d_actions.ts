import constants from '../constants/access_token.constants';

export function onGetAccessToken(): { type: string } {
  return {
    type: constants.ACCESS_TOKEN_REQUESTED,
  };
}
