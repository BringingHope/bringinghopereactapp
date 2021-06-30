import axios from "axios";

const ORG_REGISTRATION_API_BASE_URL ="http://localhost:8080/api/v1/registration"

class OrganisationRegistrationService{

    getOrgRegistrationDetails(){
        return axios.get(ORG_REGISTRATION_API_BASE_URL);
    }

    createOrganisation(OrgRegistrationDetails){
        console.log("Hello Organisation")
        return axios.post(ORG_REGISTRATION_API_BASE_URL, OrgRegistrationDetails);
    }
}

export default new OrganisationRegistrationService()