import axios from "axios";

const ORG_PROFILE_API_BASE_URL ="http://localhost:8080/api/v1/organisations"

class OrganisationListService{

    getOrganisations(){
        return axios.get(ORG_PROFILE_API_BASE_URL)
    }
    
}

export default new OrganisationListService()