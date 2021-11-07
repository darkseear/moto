import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/product/"

export const ProductsApi = {
    products(category_id){
        if(category_id !==null && category_id !==undefined) {
            return axios.get(API_URL + `getProducts.php?category_id=${category_id}`)
                .then((res)=>{
                    console.log(res.data)
                    return res.data
                })
                
        } else {
            return axios.get(API_URL + "getProducts.php")
                .then((res)=>{
                    console.log(res.data)
                    return res.data
                })
            
        }
    }, 

    last_receipts(){
        return axios.get(API_URL + "getLastReceipts.php")
            .then((res)=>{
                return res.data
            })
    },

    sales(){
        return axios.get(API_URL + "getSales.php")
            .then((res)=>{
                return res.data
            })
    },

    read_one(id){
        return axios.get(API_URL + `read_one.php/?${id}`)
            .then((res)=>{
                return res.data
            })
    }

}