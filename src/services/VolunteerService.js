import axios from "axios";

const VOLUNTEER_API_BASE_URL ="http://localhost:8080/api/v1/volunteers"

class VolunteerService{

    getVolunteer(){
        return axios.get(VOLUNTEER_API_BASE_URL);
    }

    createVolunteer(volunteer){
        return axios.post(VOLUNTEER_API_BASE_URL, volunteer);
    }
}

export default new VolunteerService()