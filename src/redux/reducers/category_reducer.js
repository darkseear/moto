import { CategoryAPI } from "../../api/categoryAPI"

const CATEGORY = "CATEGORY"

let initialState = {}

export const category_reducer = ( state = initialState, action ) => {
    switch (action.type){
        case CATEGORY:{
            return {
                ...state,
                category: action.category
            }
        }
        default:{
            return state
        }
    }
}

export const category = () => {
    return (dispatch) => CategoryAPI.category().then((res)=>{
        dispatch({ 
            type:CATEGORY,
            category: res
        })
    })
}