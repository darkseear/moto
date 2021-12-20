import axios from "axios"

// const API_URL = "http://localhost/api/category/"
const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/category/"

let jwt = "";
if (localStorage.getItem("user") && localStorage.getItem("user") !== null) jwt = JSON.parse(localStorage.getItem("user")).jwt


export const CategoryAPI = {

    category() {
        return axios.get(API_URL + "getCategory.php")
            .then((res) => {
                return res.data
            })
    },

    createCategory(category) {

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })

        return instance.post(API_URL + "createCategory.php", category)
            .then((res)=>{
                return res.data;
            })
    },

    removeCategory(id){

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })


        return instance.delete(API_URL + `deleteCategory.php?id=${id}`)
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err)
            })

    }

}