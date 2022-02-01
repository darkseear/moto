import { ProductsApi } from "../../api/productAPI"

const PRODUCTS = "PRODUCTS" // список продуктов
const LAST_RECEIPTS = "LAST_RECEIPTS" // список последних поступлений
const SALES = "SALES" // список акций
const PRODUCTS_CATEGORI_ID = "PRODUCTS_CATEGORI_ID" // список определенной категории
const READ_ONE = "READ_ONE" // возвращает по одному товар с выббранным ид 

let initialState = {}

export const product_reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
            {
                return {
                    ...state,
                    products: action.products
                }
            }
        case PRODUCTS_CATEGORI_ID:
            {
                return {
                    ...state,
                    products_category_id: action.products_category_id
                }
            }
        case LAST_RECEIPTS:
            {
                return {
                    ...state,
                    last_receipts: action.last_receipts
                }
            }

        case SALES:
            {
                return {
                    ...state,
                    sales: action.sales
                }
            }

        case READ_ONE:
            {
                return {
                    ...state,
                    read_one: action.read_one
                }
            }

        default:
            {
                return state
            }
    }
}

export const products = (category_id) => {
    if (category_id) {
        return (dispatch) => ProductsApi.products(category_id).then((res) => {
            
            console.log(res)

            if(res === null || res === undefined){
                dispatch({
                    type: PRODUCTS_CATEGORI_ID,
                    products_category_id: null
                })
            }
            dispatch({
                type: PRODUCTS_CATEGORI_ID,
                products_category_id: res
            })
        })
    } else {
        return (dispatch) => ProductsApi.products().then((res) => {
            dispatch({
                type: PRODUCTS,
                products: res
            })
        })
    }
}

export const getLast_receipts = (category_id) => {
    return (dispatch) => ProductsApi.last_receipts(category_id).then((res) => {
        dispatch({
            type: LAST_RECEIPTS,
            last_receipts: res
        })
    })
}

export const getSales = (category_id) => {
    return (dispatch) => ProductsApi.sales(category_id).then((res) => {
        dispatch({
            type: SALES,
            sales: res
        })
    })
}

export const getReadOne = (id) => {
    return (dispatch) => ProductsApi.read_one(id).then((res) => {
        dispatch({
            type: READ_ONE,
            read_one: res
        })
    })
}

export const remuveReadOne = () =>{
    return (dispatch) => {
        dispatch({
            type: READ_ONE,
            read_one: null
        })
    }
}

export const createProduct = (objImg, objProd) => {

    ProductsApi.uploadPrImgSome(objImg)
        .then((res) => {
            alert(JSON.stringify(res))
            if ( res.id !== null  ) {
                
                ProductsApi.createProduct({...objProd, imgsArr: JSON.stringify(res.id) })
                    .then((res) => {
                        alert(JSON.stringify(res.message))
                    })
            } else {
                alert(JSON.stringify(res));
            }
        })
}

export const createProductTest = (objImg, objProd) => {
    ProductsApi.uploadPrImgSome(objImg)
        .then((res) => {
            alert(JSON.stringify(res))
            if ( res.id !== null  ) {
                ProductsApi.createProductTest({...objProd, imgsArr: JSON.stringify(res.id) })
                    .then((res) => {
                        alert(JSON.stringify(res.message))
                    })
            } else {
                alert(JSON.stringify(res));
            }
        })
}

export const deleteProduct = (id, category_id) => {
    return (dispatch) => ProductsApi.deleteProduct(id)
        .then((res)=>{
            alert(JSON.stringify(res))
            dispatch(products(category_id))
        })
}

export const updateProduct = (updateObj, category_id, objImgNew, arrImgOld) => {

    return (dispatch) =>  ProductsApi.uploadPrImgSome(objImgNew)
    .then((res) => {
        alert(JSON.stringify(res))
        if ( res.id !== null  ) {
            ProductsApi.updateProductTest({...updateObj, imgsArr: JSON.stringify((res.id + arrImgOld).split(',').map(parseFloat)) })
                .then((res) => {
                    alert(JSON.stringify(res))
                    dispatch(products(category_id))
                })
        } else {
            alert(JSON.stringify(res));
        }
    })
}

export const uoloadImage = (objImg) => {

    ProductsApi.uploadPrImg(objImg)
        .then((res) => {
            if (res.id && res.id !== null) {

                alert(JSON.stringify(res))

            } else {
                alert(JSON.stringify(res));
            }
        })
}