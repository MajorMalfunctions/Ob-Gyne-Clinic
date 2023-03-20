import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import booking from "./booking";
import blog from "./blog";
import message from "./message";
import patient from "./patient";
import likes from "./likes";


export default combineReducers({
    auth,
    blog,
    booking,
    likes,
    message,
    user,
    patient
});