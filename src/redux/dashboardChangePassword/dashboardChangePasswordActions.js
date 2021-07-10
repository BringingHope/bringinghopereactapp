import OrganisationDashboardService from "../../services/OrganisationDashboardService"
import {
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_FAILURE,
} from './types'



export const changePasswordByOrganisationId = (organisationId, oldPasswordDetails, newPasswordDetails) => {

    return async (dispatch) => {
        dispatch({
            type:     PASSWORD_CHANGE_REQUEST,
        });
        await OrganisationDashboardService.changePasswordByOrganisationId(organisationId, oldPasswordDetails, newPasswordDetails).then(
            (response) => {
                dispatch
                    ({
                        type: PASSWORD_CHANGE_SUCCESS,
                        payload: response.data.message,
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
