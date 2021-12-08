import axios from "axios"

// const API_URL = "http://localhost/api/product/"
    const API_URL = "http://xn--k1acecair0j.xn--p1ai/api/product/"

let jwt = "";
if (localStorage.getItem("user") && localStorage.getItem("user") !== null) jwt = JSON.parse(localStorage.getItem("user")).jwt

export const ProductsApi = {
    products(category_id) {
        if (category_id !== null && category_id !== undefined) {
            return axios.get(API_URL + `getProducts.php?category_id=${category_id}`)
                .then((res) => {
                    console.log(res.data)
                    return res.data
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
    }

}