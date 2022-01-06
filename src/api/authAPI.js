import axios from "axios"

// const API_URL = "http://localhost/api/user/"
    const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/user/"


export const AuthAPI = {

    login(data) {
      
        return axios.post(API_URL + "login.php", data).then((response) => {
            if (response.data.jwt && response.data.jwt !== undefined) {

                localStorage.setItem("user", JSON.stringify({ email: data.email, jwt: response.data.jwt }));
                //   authHeader();
            }

            return response.data;
        });
    },

    logout() {
        localStorage.removeItem("user");

    }

}