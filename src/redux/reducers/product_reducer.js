import { ProductsApi } from "../../api/productAPI"

const PRODUCTS = "PRODUCTS" // список продуктов
const LAST_RECEIPTS = "LAST_RECEIPTS" // список последних поступлений
const SALES = "SALES" // список акций
const PRODUCTS_CATEGORI_ID = "PRODUCTS_CATEGORI_ID"// список определенной категории

let initialState = {}

export const product_reducer = (state = initialState, action) => {
    switch (action.type) {
       case PRODUCTS:{
            return {
                ...state, 
                products: action.products
            }  
       }
       case PRODUCTS_CATEGORI_ID:{
            return {
                ...state, 
                products_category_id: action.products_category_id
            }  
       }
       case LAST_RECEIPTS:{
           return {
               ...state, 
               last_receipts: action.last_receipts
           }
       }

       case SALES: {
           return {
               ...state,
               sales: action.sales
           }
       }

       default:{
           return state
       }
    }
}

export const products = (category_id) => {
    if(category_id){
        return (dispatch) => ProductsApi.products(category_id).then((res)=>{
            dispatch({
                type:PRODUCTS_CATEGORI_ID,
                products_category_id: res
            })
        })
    } else {
        return (dispatch) => ProductsApi.products().then((res)=>{
            dispatch({
                type:PRODUCTS,
                products: res
            })
        })
    }
}

export const getLast_receipts = (category_id) => {
    return (dispatch) => ProductsApi.last_receipts(category_id).then((res)=>{
        dispatch({
            type:LAST_RECEIPTS,
            last_receipts: res
        })
    })
}

export const getSales = (category_id) => {
    return (dispatch) => ProductsApi.sales(category_id).then((res)=>{
        dispatch({
            type:SALES,
            sales: res
        })
    })
}