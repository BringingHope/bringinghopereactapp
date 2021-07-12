import OrganisationDashboardService from "../../services/OrganisationDashboardService"
import {
    GET_PROFILE_DETAILS_FAILURE,
    GET_PROFILE_DETAILS_SUCCESS,
    GET_PROFILE_DETAILS_REQUEST,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,

} from './types'



export const getOrganisationProfileDetailsById = (organisationId) => {

    return async (dispatch) => {
        dispatch({
            type: GET_PROFILE_DETAILS_REQUEST

        });
        await OrganisationDashboardService.getOrganisationProfileDetailsById(organisationId).then(
            (response) => {
                const usersProfiledetails = response.data
                dispatch
                    ({
                        type: GET_PROFILE_DETAILS_SUCCESS,
                        payload: usersProfiledetails
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: GET_PROFILE_DETAILS_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
export const updateOrganisationProfileDetailsById = (organisationProfileDetailsId, OrgProfileDetails) => {

    return async (dispatch) => {
        dispatch({
            type: UPDATE_PROFILE_REQUEST

        });
        await OrganisationDashboardService.updateOrganisationProfileDetailsById(organisationProfileDetailsId, OrgProfileDetails).then(
            (response) => {
                dispatch
                    ({
                        type: UPDATE_PROFILE_SUCCESS,
                        payload: response.data.message
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: UPDATE_PROFILE_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
