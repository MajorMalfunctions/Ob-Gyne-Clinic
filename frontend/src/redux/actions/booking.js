import {
    CREATE_BOOKING,
    RETRIEVE_BOOKINGS,
    UPDATE_BOOKING,
    DELETE_BOOKING,
    DELETE_ALL_BOOKINGS,
  } from "./types";

  import BookService from "../services/booking.service";

  export const createBooking = (name, time, date) => async (dispatch) => {
    try {
      const res = await BookService.create({ name, time, date });

      dispatch({
        type: CREATE_BOOKING,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const retrieveBookings = () => async (dispatch) => {
    try {
      const res = await BookService.getAll();

      dispatch({
        type: RETRIEVE_BOOKINGS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateBooking = (id, data) => async (dispatch) => {
    try {
      const res = await BookService.update(id, data);

      dispatch({
        type: UPDATE_BOOKING,
        payload: data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteBooking = (id) => async (dispatch) => {
    try {
      await BookService.remove(id);

      dispatch({
        type: DELETE_BOOKING,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deleteAllBookings = () => async (dispatch) => {
    try {
      const res = await BookService.removeAll();

      dispatch({
        type: DELETE_ALL_BOOKINGS,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const findBookingsByName = (name) => async (dispatch) => {
    try {
      const res = await BookService.findByName(name);

      dispatch({
        type: RETRIEVE_BOOKINGS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };