import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { decodeJwtToken } from '../utils/decodeJwtToken';
import { SET_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth/signin', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      const decodedToken = jwtDecode(token);
      dispatch(
        setCurrentUser({
          username: decodeJwtToken.username,
          role: decodeJwtToken.role
        })
      );
    });
  };
}
