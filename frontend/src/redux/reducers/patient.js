import {
    CREATE_BOOKING,
    RETRIEVE_BOOKINGS,
    UPDATE_BOOKING,
    DELETE_BOOKING,
    DELETE_ALL_BOOKINGS,
  } from "../actions/types";

  const initialState = [];

  const patientReducer = (bookings = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case CREATE_BOOKING:
        return [...bookings, payload];

      case RETRIEVE_BOOKINGS:
        return payload;

      case UPDATE_BOOKING:
        return bookings.map((booking) => {
          if (booking.id === payload.id) {
            return {
              ...bookings,
              ...payload,
            };
          } else {
            return booking;
          }
        });

      case DELETE_BOOKING:
        return bookings.filter(({ id }) => id !== payload.id);

      case DELETE_ALL_BOOKINGS:
        return [];

      default:
        return bookings;
    }
  };

  export default patientReducer;