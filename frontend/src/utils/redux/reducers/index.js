import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import booking from "./booking";
import blog from "./blog";
import message from "./message";
import patient from "./patient";
import post from "./post";


export default combineReducers({
    auth,
    user,
    blog,
    booking,
    patient,
    message,
    post
});