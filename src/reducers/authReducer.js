import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "../actions/actions";

const initialState = {
  users: [
    {
      username: "admin",
      password: "Test12345",
    },
  ],
  loggedInUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      JSON.stringify(localStorage.setItem("user", action.payload.username));
      return {
        ...state,
        loggedInUser: action.payload,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem(
        "users",
        JSON.stringify({ users: [...state.users, action.payload] })
      );
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        loggedInUser: null,
      };
    default:
      return state;
  }
};

export default reducer;
