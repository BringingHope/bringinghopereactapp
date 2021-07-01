import axios from "axios";

const ORG_PROFILE_API_BASE_URL ="http://localhost:8080/api/v2/profileDetails"

class OrganisationProfileService{

    getOrganisationProfileDetailsById(organisationProfileDetailsId){
        return axios.get(ORG_PROFILE_API_BASE_URL + '/' + organisationProfileDetailsId )
    }
    updateOrganisationProfileDetailsById(OrgProfileDetails, organisationProfileDetailsId){
        return axios.put(ORG_PROFILE_API_BASE_URL + '/' + organisationProfileDetailsId, OrgProfileDetails )
    }
}

export default new OrganisationProfileService()