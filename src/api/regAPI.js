import axios from "axios"

// const API_URL = "http://localhost/api/user/"
    const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/user/"


export const RegAPI = {

    registration(body_reg) {
        return axios.post(API_URL + "create_user.php", body_reg)
            .then((res) => {
                console.log(res.data)
            })
    }

}