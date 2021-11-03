import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/category/"

export const CategoryAPI = {

    category(){
        return axios.get(API_URL + "getCategory.php")
            .then((res)=>{  
                return res.data
            })
    }

}