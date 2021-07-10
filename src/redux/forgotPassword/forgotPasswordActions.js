import AuthService from "../../services/AuthService";
import {
    EMail_SENT_SUCCESS,
    EMail_SENT_FAILURE,
    EMail_SENT_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_FAILURE,
    EMail_SENT_SUCCESS_MESSAGE
} from './types'



export const forgotPassword = (email) => {

    return async (dispatch) => {
        dispatch({
            type:     EMail_SENT_REQUEST,
        });
        await AuthService.forgotPassword(email).then(
            (response) => {
                const token = response.data
                dispatch
                    ({
                        type: EMail_SENT_SUCCESS,
                        payload: token
                    })
                    dispatch({
                        type: EMail_SENT_SUCCESS_MESSAGE,
                        payload: response.data.message,
                      });
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: EMail_SENT_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
export const resetPassword = (newPassword) => {

    return async (dispatch) => {
        dispatch({
            type:     PASSWORD_CHANGE_REQUEST,
        });
        await AuthService.resetPassword(newPassword).then(
            (response) => {
                dispatch
                
                    ({
                        type: PASSWORD_CHANGE_SUCCESS,
                        payload: response.data.message
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: PASSWORD_CHANGE_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
