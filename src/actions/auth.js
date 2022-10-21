import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  LOGOUT,
} from "./actionTypes";
import { login, register, logout } from "../services/auth";

export const registerUser = (username, email, password) => (dispatch) => {
  return register(username, email, password).then(
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

export const loginUser = (username, password) => (dispatch) => {
  return login(username, password).then(
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

export const logoutUser = () => (dispatch) => {
  logout();

  dispatch({
    type: LOGOUT,
  });
};
