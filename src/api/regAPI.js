import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/user/"

const instance = axios.create({
    withCredentials: false,
    timeout: 3600,
    headers: {
      'Content-Type': 'application/json',
      }
  });

export const RegAPI = {

    registration(body_reg){
        let data = JSON.stringify(body_reg);
        return axios.post(API_URL + "create_user.php", body_reg)
            .then((res)=>{
                console.log(res.data)
            })
    }

}