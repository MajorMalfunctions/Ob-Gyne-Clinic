import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    REFRESH_TOKEN,
    SET_AUTHENTICATED,
    SET_USER,
    USER_SET_DETAILS
  } from "./types";

  import { API_URL } from '../commonData';
  import axios from "axios";
  import AuthService from "../services/auth.service";
  import AuthHeader from "../services/auth-header";

  export const register = (fullname, email, password) => (dispatch) => {
    return AuthService.register(fullname, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

  export const login = (email, password, cover, ip) => (dispatch) => {
    return AuthService.login(email, password, cover, ip).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };

  export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
      type: LOGOUT,
    });
  };


  // export const logout = () => (dispatch) => {
  //   const promise = new Promise((resolve, reject) => {
  //     axios.post(API_URL + 'auth/logout', null)
  //       .then((res) => {
  //         dispatch({type: LOGOUT, value: null});
  //         localStorage.clear();
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       })
  //   })
  //   return promise
  // };


  export const refreshToken = (accessToken) => (dispatch) => {
    dispatch({
      type: REFRESH_TOKEN,
      payload: accessToken,
    })
  };

  export function getUserData  () {
    return dispatch => {
      return axios.get(`${API_URL}/me`, { headers: AuthHeader() })
            .then(res => {
                const { profile } = res.data;
                console.log(res.data)
                    if(res.status === 200) {
                        dispatch({type: SET_AUTHENTICATED});
                        dispatch({type: SET_USER, payload: { profile, user: res.data }})
                    }
                    dispatch(failure(res));
                    return res
                }
            ).catch(error => {
                console.log(error)
            dispatch(failure(error));
        });
    };
    function request() { return { type: 'REQUEST_DATA' }}
    function success(data) { return { type: 'RECEIVE_DATA', payload : data }}
    function failure(error) { return { type: 'ERROR_DATA', error }}
  };

  export const userSetDetails = (user) => ({
    type: USER_SET_DETAILS,
    payload: user,
  });