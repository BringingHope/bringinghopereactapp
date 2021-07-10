import {
    GET_DONORS_FAILURE,
    GET_DONORS_REQUEST,
    GET_DONORS_SUCCESS
} from './types'

const initialState = {
    loading: false,
    donors: [],
    error: ''
};

export default function donorTable (state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case GET_DONORS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_DONORS_SUCCESS:
            return {
                loading: false,
                donors: payload,
                error: ''
            };
        case GET_DONORS_FAILURE:
            return {
                loading: false,
                donors: [],
                error: payload
            };
        default: 
        return state;
    }
}
