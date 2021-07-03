import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

class AuthService {
  login(LoginDetails) {
    return axios
      .post(API_URL + "login",LoginDetails)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(OrgRegistrationDetails) {
    return axios.post(API_URL + "registration", OrgRegistrationDetails);
  }
}

export default new AuthService();