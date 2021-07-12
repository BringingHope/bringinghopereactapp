// import {
//     GET_USER_FAILURE,
//     GET_USER_REQUEST,
//     GET_USER_SUCCESS
// } from './types'

// const initialState = {
//     loading: false,
//     usersProfiledetails: [],
//     error: ''
// };

// export default function details (state = initialState, action) {

//     const {type, payload} = action;

//     switch(type){
//         case GET_USER_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case GET_USER_SUCCESS:
//             return {
//                 loading: false,
//                 usersProfiledetails: payload,
//                 error: ''
//             };
//         case GET_USER_FAILURE:
//             return {
//                 loading: false,
//                 usersProfiledetails: [],
//                 error: payload
//             };
//         default: 
//         return state;
//     }
// }
