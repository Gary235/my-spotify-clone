import axios from 'axios';
import qs from 'qs';

import { base64Encode } from 'helpers/base64Encode';
import { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } from 'configs/configs';

export const getToken = async (): Promise<unknown> => {
  
  const data = { 'grant_type': 'client_credentials' };
  const auth = `Basic ${base64Encode(REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET)}`;
  
  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: { 
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization' : auth,
      },
      data: qs.stringify(data)
    });
    console.log(response)
    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
}