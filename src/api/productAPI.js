import axios from "axios"

const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/product/"

export const ProductsApi = {
    products(category_id){
        if(category_id !==null && category_id !==undefined) {
            axios.get(API_URL + `getProducts.php?category_id=${category_id}`)
                .then((res)=>{
                    console.log(res.data)
                    return res.data
                })
                
        } else {
            axios.get(API_URL + "getProducts.php")
                .then((res)=>{
                    console.log(res.data)
                    return res.data
                })
            
        }
    }, 

    last_receipts(){
        axios.get(API_URL + "getLastReceipts.php")
            .then((res)=>{
                return res.data
            })
    },

    sales(){
        axios.get(API_URL + "getSales.php")
            .then((res)=>{
                return res.data
            })
    },

    read_one(id){
        axios.get(API_URL + `read_one.php?${id}`)
            .then((res)=>{
                return res.data
            })
    }

}