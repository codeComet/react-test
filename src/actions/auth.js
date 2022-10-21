import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  LOGOUT,
} from "./actionTypes";
import Auth from "../services/auth";

export const register = (username, email, password) => (dispatch) => {
  return Auth.register(username, email, password).then(
    (res) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: res.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.res && error.res.data && error.res.data.message) ||
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

export const login = (username, password) => (dispatch) => {
  return Auth.login(username, password).then(
    (res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: res },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.res && error.response.res.message) ||
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
  Auth.logout();

  dispatch({
    type: LOGOUT,
  });
};
