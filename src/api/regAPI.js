import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/user/"

export const RegAPI = {

    registration(firstname, 
        lastname,
        email,
        password){
        axios.post(API_URL + "create_user.php", { firstname, lastname, email, password}).then((res)=>{
            console.log(res.data)
        })
    }

}