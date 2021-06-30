import axios from "axios";

const ORG_REGISTRATION_API_BASE_URL ="http://localhost:8080/api/v2/profile"

class OrganisationProfileService{

    getOrgProfileDetails(){
        return axios.get(ORG_REGISTRATION_API_BASE_URL);
    }

    createOrganisationProfile(OrgProfileDetails){
        return axios.post(ORG_REGISTRATION_API_BASE_URL, OrgProfileDetails);
    }
}

export default new OrganisationProfileService()