import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

class AuthService {
  login(LoginDetails) {
    return axios
      .post(API_URL + "login", LoginDetails)
      .then((response) => {
        console.log(response.data)
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("successful")
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
  forgotPassword(email) {
    return axios.post(API_URL + "forgotPassword", email);
  }
  resetPassword(newPassword) {
    return axios.put(API_URL + "resetPassword", newPassword);
  }
}


export default new AuthService();