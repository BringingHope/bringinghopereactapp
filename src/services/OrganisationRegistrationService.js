import axios from "axios";

const ORG_REGISTRATION_API_BASE_URL ="http:://localhost:8080/api/v1/registration"

class OrganisationRegistrationService{

    getOrgRegistrationDetails(){
        return axios.get(ORG_REGISTRATION_API_BASE_URL);
    }

    createOrganisation(OrgRegistrationDetails){
        return axios.post(ORG_REGISTRATION_API_BASE_URL);
    }
}

export default new OrganisationRegistrationService()