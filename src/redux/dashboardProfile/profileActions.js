import OrganisationDashboardService from "../../services/OrganisationDashboardService"
import {
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
} from './types'



export const getOrganisationProfileDetailsById = (organisationId) => {

    return async (dispatch) => {
        dispatch({
            type: GET_USER_REQUEST

        });
        await OrganisationDashboardService.getOrganisationProfileDetailsById(organisationId).then(
            (response) => {
                const usersProfiledetails = response.data
                dispatch
                    ({
                        type: GET_USER_SUCCESS,
                        payload: usersProfiledetails
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
