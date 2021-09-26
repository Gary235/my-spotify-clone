import axios from "axios";
import qs from "qs";

import { base64Encode, getRandomString } from "helpers/base64Encode";
import { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } from "configs/configs";

export const getAccessToken = async (code: any): Promise<unknown> => {
  const data = {
    grant_type: "authorization_code",
    code,
    redirect_uri: "http://localhost:3000/home",
  };
  const auth = `Basic ${base64Encode(
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET
  )}`;
  let response;

  try {
    const apiResponse = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "content-type": "application/x-www-form-urlencoded",
        Authorization: auth,
      },
      data: qs.stringify(data),
    });
    response = apiResponse.data;
  } catch (error) {
    response = error;
  }
  return response;
};

export const authUser = async (): Promise<unknown> => {
  let response;

  const url =
    "https://accounts.spotify.com/authorize?client_id=0a9fb1ada11e478598ab365960f8b855" +
    "&response_type=code" +
    "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome" +
    "&code_challenge_method=S256" +
    `code_challenge=${getRandomString(43, 128)}`;

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "X-Requested-With": "XMLHttpRequest",
  };

  try {
    const apiResponse = await axios.get(url, { headers });
    response = apiResponse.data;
  } catch (error) {
    response = error;
  }
  console.log("response", response);
  return response;
};
