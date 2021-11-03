import { ProductsApi } from "../../api/productAPI"

const PRODUCTS = "PRODUCTS" // список продуктов
const LAST_RECEIPTS = "LAST_RECEIPTS" // список последних поступлений
const SALES = "SALES" // список акций

let initialState = {}

export const product_reducer = (state = initialState, action) => {
    switch (action.type) {
       case PRODUCTS:{
            return {
                ...state, 
                products: action.products
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
    return (dispatch) => ProductsApi.products(category_id).then((res)=>{
        dispatch({
            type:PRODUCTS,
            products: res
        })
    })
}

export const last_receipts = (category_id) => {
    return (dispatch) => ProductsApi.last_receipts(category_id).then((res)=>{
        dispatch({
            type:LAST_RECEIPTS,
            products: res
        })
    })
}

export const sales = (category_id) => {
    return (dispatch) => ProductsApi.sales(category_id).then((res)=>{
        dispatch({
            type:SALES,
            products: res
        })
    })
}