import OrganisationDashboardService from "../../services/OrganisationDashboardService"
import {
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
} from './types'



export const getOrganisationDetailsByToken = () => {

    return async (dispatch) => {
        dispatch({
            type: GET_USER_REQUEST

        });
        await OrganisationDashboardService.getOrganisationDetailsByToken().then(
            (response) => {
                const usersdetails = response.data
                dispatch
                    ({
                        type: GET_USER_SUCCESS,
                        payload: usersdetails
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: GET_USER_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
