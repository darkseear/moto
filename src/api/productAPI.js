import axios from "axios"

// const API_URL = "http://localhost/api/product/"
    const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/product/"
    const API_URL_CART = "http://xn--k1acecair0j.xn--p1ai/api/cart/"

let jwt = "";
if (localStorage.getItem("user") && localStorage.getItem("user") !== null) jwt = JSON.parse(localStorage.getItem("user")).jwt

export const ProductsApi = {
    
    order(order){
        return axios.post(API_URL_CART + "makeOrder.php", order )
    }
    ,
    products(category_id) {
        if (category_id !== null && category_id !== undefined) {
            return axios.get(API_URL + `getProducts.php?category_id=${category_id}`)
                .then((res) => {
                    console.log(res.data)
                    return res.data
                })
                .catch((err)=>{
                    console.log(err)
                })

        } else {
            return axios.get(API_URL + "getProducts.php")
                .then((res) => {
                    console.log(res.data)
                    return res.data
                })

        }
    },

    last_receipts() {
        return axios.get(API_URL + "getLastReceipts.php")
            .then((res) => {
                return res.data
            })
    },

    sales() {
        return axios.get(API_URL + "getSales.php")
            .then((res) => {
                return res.data
            })
    },

    read_one(id) {
        return axios.get(API_URL + `read_one.php/?id=${id}`)
            .then((res) => {
                return res.data
            })
    },

    uploadPrImgSome(objImg){
        alert(JSON.stringify(objImg))
        const conf = {
            headers:{
                "X-Access-Token": jwt,
                "Content-Type": "application/json"
            }
        }

        const photoData = new FormData();
        objImg.title && photoData.append('title', objImg.title);

        for (let x = 0; x < Object.keys(objImg.sendimage).length; x++) {
            photoData.append(`sendimage${x}`, objImg.sendimage[x], objImg.sendimage[x].name);
            console.log(photoData)
        }

        return axios.post(API_URL + `uploadPrImgSome.php`, photoData, {...conf })
            .then((res) => {
                console.log(res.data);
                return res.data;
            })

    },  

    uploadPrImg(objImg) {
        const conf = {
            headers: {
                "X-Access-Token": jwt,
                "Content-Type": "application/json"
            }
        }

        const photoData = new FormData();
        photoData.append('sendimage', objImg.sendimage, objImg.sendimage.name);
        photoData.append('title', objImg.title);
        // JSON.stringify(objImg)
        console.log(objImg.sendimage.name)
        return axios.post(API_URL + `uploadPrImg.php`, photoData, {...conf })
            .then((res) => {
                console.log(res.data);
                return res.data;
            })
    },

    createProduct(objProd) {

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })

        return instance.post(API_URL + `createProduct.php`, objProd)
            .then((res) => {
                console.log(res.data);
                return res.data;
            })
    },

    createProductTest(objProd) {

        const instance = axios.create({
            headers: {
                "X-Access-Token": jwt
            }
        })

        return instance.post(API_URL + `createProductTest.php`, objProd)
            .then((res) => {
                console.log(res.data);
                return res.data;
            })
    },

    updateProduct(objProd) {

        const instance = axios.create({
            headers: {
                'X-Access-Token': jwt
            }
        })

        return instance.put(API_URL + `update.php`, objProd)
            .then((res) => {
                console.log(res.data)
                return res.data
            })
    },

    updateProductTest(objProd) {

        const instance = axios.create({
            headers: {
                'X-Access-Token': jwt
            }
        })

        return instance.put(API_URL + `updateTest.php`, objProd)
            .then((res) => {
                console.log(res.data)
                return res.data
            })
    },

    deleteProduct(id){
        
        const instance = axios.create({
            headers: {
                'X-Access-Token': jwt
            }
        })

        return instance.post(API_URL + `/delete.php`, {id:id})
            .then((res) => {
                console.log(res.data)
                return res.data
            })
            .catch((err)=>{
                console.log(err)
            })
    }

}