import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import bookingReducer from '../redux/booking/bookingSlice'
// import blogReducer from '../redux/blog/blogReducer'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    // blog: blogReducer
  },
})