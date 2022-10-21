import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isAuthenticated: true, user }
  : { isAuthenticated: false, user: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
