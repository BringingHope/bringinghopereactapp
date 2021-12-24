import {
    GET_ORGANISATION_LIST_REQUEST,
    GET_ORGANISATION_LIST_SUCCESS,
    GET_ORGANISATION_LIST_FAILURE
} from './types'

const initialState = {
    loading: false,
    organisations: [],
    error: ''
};

export default function list (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case GET_ORGANISATION_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ORGANISATION_LIST_SUCCESS:
            return {
                loading: false,
                organisations: payload,
                error: ''
            };
        case GET_ORGANISATION_LIST_FAILURE:
            return {
                loading: false,
                organisations: [],
                error: payload
            };
        default: 
        return state;
    }
}
