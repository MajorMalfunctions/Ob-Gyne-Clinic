import { USER_SET_DETAILS, SET_AUTHENTICATED } from '../actions/types';

const user = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = {
  details: null,
  isAuthenticated: false
};

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

switch (type) {
    case USER_SET_DETAILS:
        return {
            ...state,
            details: action.payload,
            user: payload.user
            };
    case SET_AUTHENTICATED:
        return {
            ...state,
            isAuthenticated: true
        }
        default:
            return state;
        }
  }




// const currentUser = (state = {}, action) => {
//     switch(action.type){
//         case "SET_USER":
//             return {
//                 ...state,
//                 user: action.payload,
//                 loggedIn: true
//             }
//         case "LOG_OUT":
//             return {
//                 ...state,
//                 user: {},
//                 loggedIn: false
//             }
// //             case "ADD_NINJA":
// //                 return {
// //                     ...state,
// //                     ninjas: [...state.ninjas, payload],
// //                 };
// //             case "DELETE_NINJA":
// //                 return {
// //                     ...state,
// //                     ninjas: state.ninjas.filter((ninja) => ninja.id !== payload),
// //                 };

//         default:
//             return state
//     }
// }

// export default currentUser;