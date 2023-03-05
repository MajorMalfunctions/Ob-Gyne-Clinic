import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import bookingReducer from "./slices/bookingSlice";
// import blogReducer from "./slices/bookingSlice";
import messageReducer from "./slices/messageSlice";

const reducer = {
  auth: authReducer,
  user: userReducer,
  booking: bookingReducer,
  // blog: blogReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;