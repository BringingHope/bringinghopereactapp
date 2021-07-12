import OrganisationListService from "../../services/OrganisationListService"
import {
    GET_ORGANISATION_LIST_REQUEST,
    GET_ORGANISATION_LIST_SUCCESS,
    GET_ORGANISATION_LIST_FAILURE
} from './types'


export const getOrganisations = () => {

    return async (dispatch) => {
        dispatch({
            type: GET_ORGANISATION_LIST_REQUEST

        });
        await OrganisationListService.getOrganisations().then(
            (response) => {
                const organisationsList = response.data
                dispatch
                    ({
                        type: GET_ORGANISATION_LIST_SUCCESS,
                        payload: organisationsList
                    })
            },
        )
        .catch(
                error => {
                    dispatch
                    ({
                        type: GET_ORGANISATION_LIST_FAILURE,
                        payload: error.message
                    });
                }
            )
    };
}
