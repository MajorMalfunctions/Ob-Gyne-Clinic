// const currentUser = (state = { type, payload}, action) => {
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
//             case "ADD_NINJA":
//                 return {
//                     ...state,
//                     ninjas: [...state.ninjas, payload],
//                 };
//             case "DELETE_NINJA":
//                 return {
//                     ...state,
//                     ninjas: state.ninjas.filter((ninja) => ninja.id !== payload),
//                 };
//         default:
//             return state
//     }
// }

// export default currentUser;