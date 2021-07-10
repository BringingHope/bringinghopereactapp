import {
    EMail_SENT_SUCCESS,
    EMail_SENT_FAILURE,
    EMail_SENT_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_FAILURE,
    EMail_SENT_SUCCESS_MESSAGE
} from './types'

const initialState = {
    loading: false,
    token: '',
    error: '',
    message: ''
};

export default function resetPassword (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case EMail_SENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case EMail_SENT_SUCCESS:
            return {
                loading: false,
                token: payload,
                error: ''
            };
        case EMail_SENT_SUCCESS_MESSAGE:
            return {
                loading: false,
                message: payload,
                error: ''
            };
        case EMail_SENT_FAILURE:
            return {
                loading: false,
                token: '',
                error: payload
            };
        case PASSWORD_CHANGE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PASSWORD_CHANGE_SUCCESS:
            return {
                loading: false,
                message: payload,
                error: ''
            };
        case PASSWORD_CHANGE_FAILURE:
            return {
                loading: false,
                token: '',
                error: payload
            };
        default: 
        return state;
    }
}
