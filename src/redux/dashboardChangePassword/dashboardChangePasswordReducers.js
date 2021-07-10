import {
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_FAILURE,
} from './types'

const initialState = {
    loading: false,
    message: '',
    error: ''
};

export default function donorTable (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
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
                message: '',
                error: payload
            };
        default: 
        return state;
    }
}
