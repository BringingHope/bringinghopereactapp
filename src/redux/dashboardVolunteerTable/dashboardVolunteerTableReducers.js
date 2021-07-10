import {
    GET_VOLUNTEERS_FAILURE,
    GET_VOLUNTEERS_REQUEST,
    GET_VOLUNTEERS_SUCCESS
} from './types'

const initialState = {
    loading: false,
    volunteers: [],
    error: ''
};

export default function volunteerTale (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case GET_VOLUNTEERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_VOLUNTEERS_SUCCESS:
            return {
                loading: false,
                volunteers: payload,
                error: ''
            };
        case GET_VOLUNTEERS_FAILURE:
            return {
                loading: false,
                volunteers: [],
                error: payload
            };
        default: 
        return state;
    }
}
