import axios from "axios";
import { UPDATE_LIKES } from "./types";

// Add like

export const addLike = goalId => async dispatch => {
    try {
      const res = await axios.put(`/api/goal/like/${goalId}`);
  
      dispatch({
        type: UPDATE_LIKES,
        payload: { goalId, likes: res.data }
      });
    } catch (error) {
      dispatch({
        // type: LIKE_ERROR,
        payload: { msg: error.response }
      });
    }
  };
  
  // Remove like

export const removeLike = goalId => async dispatch => {
    try {
  
      const res = await axios.put(`/api/goal/unlike/${goalId}`);
  
      dispatch({
        type: UPDATE_LIKES,
        payload: { goalId, likes: res.data }
      });
    } catch (error) {
      dispatch({
        // type: LIKE_ERROR,
        payload: { msg: error.response }
      });
    }
  };