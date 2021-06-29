import axios from "axios";

const DONOR_API_BASE_URL ='http://localhost:8080/api/v1/donors';

class DonorService{

    getDonors(){
        return axios.get(DONOR_API_BASE_URL);
    }

    createDonor(donor){
        console.log("Hello donor");
        return axios.post(DONOR_API_BASE_URL,donor);
    }
}

export default new DonorService()