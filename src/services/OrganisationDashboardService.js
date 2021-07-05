import axios from "axios";
import authHeader from "./AuthHeader";


const ORG_PROFILE_API_BASE_URL ="http://localhost:8080/api/v2"
class OrganisationDashboardService{

    getOrganisationDetailsByToken(){

        return axios.get(ORG_PROFILE_API_BASE_URL + "/userinfo", { headers: authHeader() });

    }
    getOrganisationProfileDetailsById(organisationProfileDetailsId){
        return axios.get(ORG_PROFILE_API_BASE_URL + '/' + organisationProfileDetailsId , { headers: authHeader() })
    }
    updateOrganisationProfileDetailsById(OrgProfileDetails, organisationProfileDetailsId){
        return axios.put(ORG_PROFILE_API_BASE_URL + '/' + organisationProfileDetailsId, OrgProfileDetails , { headers: authHeader() })
    }

    getDonorsByOrganisationId(organisationId){
        
        return axios.get(ORG_PROFILE_API_BASE_URL + "/donorsList/" + organisationId, { headers: authHeader() })
    }
    getVolunteersByOrganisationId(organisationId){
        
        return axios.get(ORG_PROFILE_API_BASE_URL + "/volunteersList/" + organisationId, { headers: authHeader() })
    }
}

export default new OrganisationDashboardService()