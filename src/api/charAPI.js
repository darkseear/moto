import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/def_char/"


let jwt = "";
if (localStorage.getItem("user") && localStorage.getItem("user") !== null) jwt = JSON.parse(localStorage.getItem("user")).jwt


export const CharApi = {

    getChar() {

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })

        return instance.get(API_URL + "getChar.php")
            .then((res) => {
                return res.data
            })
            .catch((err)=>{
                console.log(err)
            })
    },



    createChar(defChar) {

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })

        return instance.post(API_URL + "createChar.php", defChar)
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err)
            })
    },

    updateChar(defChar) {

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })

        return instance.put(API_URL + "updateChar.php", defChar)
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err)
            })
    },

    getCharId(id){

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })


        return instance.delete(API_URL + `getChar.php?category_id=${id}`)
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err)
            })
    }

}