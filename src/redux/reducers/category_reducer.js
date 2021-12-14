import { CategoryAPI } from "../../api/categoryAPI"

const CATEGORY = "CATEGORY"

let initialState = {}

export const category_reducer = ( state = initialState, action ) => {
    switch (action.type){
        case CATEGORY:{
            return {
                ...state,
                categoryArr: action.category
            }
        }
        default:{
            return state
        }
    }
}

export const category = () => (dispatch) => {
    CategoryAPI.category()
    .then((res)=>{
        dispatch({ 
            type:CATEGORY,
            category: res
        })
    })
}

export const createCategoryAC = (categoryData) => {
    return (dispatch)=> CategoryAPI.createCategory(categoryData)
    .then((res)=>{
        category()
        alert(res.message)
    })
}
