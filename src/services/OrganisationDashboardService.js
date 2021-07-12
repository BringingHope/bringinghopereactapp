import axios from "axios";
import authHeader from "./AuthHeader";


const ORG_PROFILE_API_BASE_URL ="http://localhost:8080/api/v2"
class OrganisationDashboardService{

    getOrganisationDetailsByToken(){
        return axios.get(ORG_PROFILE_API_BASE_URL + "/userinfo", { headers: authHeader() });

    }
    getOrganisationProfileDetailsById(organisationId){
        return axios.get(ORG_PROFILE_API_BASE_URL + '/orgProfile/' + organisationId , { headers: authHeader() })
    }
    updateOrganisationProfileDetailsById(organisationProfileDetailsId, OrgProfileDetails){
        console.log("called successfully");
        return axios.put(ORG_PROFILE_API_BASE_URL + '/orgProfile/' + organisationProfileDetailsId, OrgProfileDetails , { headers: authHeader() })
    }

    getDonorsByOrganisationId(organisationId){
        
        return axios.get(ORG_PROFILE_API_BASE_URL + "/donorsList/" + organisationId, { headers: authHeader() })
    }
    getVolunteersByOrganisationId(organisationId){
        
        return axios.get(ORG_PROFILE_API_BASE_URL + "/volunteersList/" + organisationId, { headers: authHeader() })
    }

    changePasswordByOrganisationId(organisationId, oldPasswordDetails, newPasswordDetails){
       return axios.put(ORG_PROFILE_API_BASE_URL + "/changePasssword/" + organisationId, oldPasswordDetails, newPasswordDetails );
        
    }
}

export default new OrganisationDashboardService()