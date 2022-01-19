import { CharApi } from "../../api/charAPI"

const DEF_CHAR = "DEF_CHAR"
const DEF_CHAR_ID = "DEF_CHAR_ID"

let initialState = { def_char: null, def_char_id: null }

const defCharReducer = ( state = initialState, action ) => {

    switch(action.type){
        case DEF_CHAR: {
            return {
                ...state,
                def_char: action.def_char
            }
        }

        case DEF_CHAR_ID: {
            return {
                ...state,
                def_char_id: action.def_char_id
            }
        }

        default: {
            return state
        }
    }

}

export const getChar = () => {
    return (dispatch)=> CharApi.getChar()
    .then((res)=>{
        dispatch({
            type:DEF_CHAR,
            def_char: res
        })
    })
}

export const getCharId = (id) => {
    return (dispatch)=> CharApi.getCharId(id)
    .then((res)=>{
        console.log(res)
        dispatch({
            type:DEF_CHAR_ID,
            def_char_id: res
        })
    })
}

export const removeChar = (id) => {
    return (dispatch)=> CharApi.removeChar(id)
    .then((res)=>{
        
        if(res.status === 200)dispatch(getChar())
    })
}

export const createChar = (defChar) => {
    return (dispatch) => CharApi.createChar(defChar)
    .then((res)=>{
        debugger
        if(res.status === 201){
            
            dispatch(getChar())
        }
    })
}

export const updateChar = (defChar) => {
    return (dispatch) => CharApi.updateChar(defChar)
    .then((res)=>{
        if(res.status === 200){
            dispatch(getChar())
        }
    })
}

export default defCharReducer