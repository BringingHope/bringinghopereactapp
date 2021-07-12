import {
    GET_PROFILE_DETAILS_FAILURE,
    GET_PROFILE_DETAILS_REQUEST,
    GET_PROFILE_DETAILS_SUCCESS,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from './types'

const initialState = {
    loading: false,
    usersProfiledetails: [],
    error: '',
    message: ''
};

export default function profileDetails (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case GET_PROFILE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PROFILE_DETAILS_SUCCESS:
            return {
                loading: false,
                usersProfiledetails: payload,
                error: ''
            };
        case GET_PROFILE_DETAILS_FAILURE:
            return {
                loading: false,
                usersProfiledetails: [],
                error: payload
            };
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                message: payload,
                error: ''
            };
        case UPDATE_PROFILE_FAILURE:
            return {
                loading: false,
                usersProfiledetails: [],
                error: payload
            };
        default: 
        return state;
    }
}
