import OrganisationDashboardService from "../../services/OrganisationDashboardService"
import {
    GET_VOLUNTEERS_FAILURE,
    GET_VOLUNTEERS_SUCCESS,
    GET_VOLUNTEERS_REQUEST,
} from './types'



export const getVolunteersByOrganisationId = (organisationId) => {

    return async (dispatch) => {
        dispatch({
            type:     GET_VOLUNTEERS_REQUEST,
        });
        await OrganisationDashboardService.getVolunteersByOrganisationId(organisationId).then(
            (response) => {
                const volunteers = response.data
                dispatch
                    ({
                        type: GET_VOLUNTEERS_SUCCESS,
                        payload: volunteers
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: GET_VOLUNTEERS_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
