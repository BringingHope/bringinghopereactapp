import OrganisationDashboardService from "../../services/OrganisationDashboardService"
import {
    GET_DONORS_FAILURE,
    GET_DONORS_SUCCESS,
    GET_DONORS_REQUEST,
} from './types'



export const getDonorsByOrganisationId = (organisationId) => {

    return async (dispatch) => {
        dispatch({
            type:     GET_DONORS_REQUEST,
        });
        await OrganisationDashboardService.getDonorsByOrganisationId(organisationId).then(
            (response) => {
                const donors = response.data
                dispatch
                    ({
                        type: GET_DONORS_SUCCESS,
                        payload: donors
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: GET_DONORS_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
