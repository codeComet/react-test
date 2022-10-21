import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
}
