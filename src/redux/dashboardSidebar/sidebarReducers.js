import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS
} from './types'

const initialState = {
    loading: false,
    userdetails: [],
    error: ''
};

export default function sidebar (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_USER_SUCCESS:
            return {
                loading: false,
                userdetails: payload,
                error: ''
            };
        case GET_USER_FAILURE:
            return {
                loading: false,
                userdetails: [],
                error: payload
            };
        default: 
        return state;
    }
}
