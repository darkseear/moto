import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/user/"

export const AuthAPI = {

    login(email, password){
        return axios.post(API_URL + "login.php", { email, password }).then((response) => {
            if (response.data.jwt &&  response.data.jwt !== undefined) {
                
              localStorage.setItem("user", JSON.stringify({ email, password, jwt: response.data.jwt}));
            //   authHeader();
            }
            return response.data;
        });
    },

    logout() {
        localStorage.removeItem("user");
        return true
    }

}