import {
    REFRESH_TOKEN
  } from "../actions/types";

  const user = JSON.parse(localStorage.getItem("user"));

  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

  export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case REFRESH_TOKEN:
        return {
          ...state,
          user: { ...user, accessToken: payload },
        };
      default:
        return state;
    }
  }