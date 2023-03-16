import { UPDATE_LIKES } from "../actions/types";

const initialState = {
  likes: [],
  like: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_LIKES:
      return {
        ...state,
        goals: state.goals.map(goal =>
          console.log("goal id", goal._id) === console.log("payload id", payload.goalId) ? { ...goal, likes: payload.likes } : goal
        ), 
        loading: false
      };
    default:
      return state;
  }
}
