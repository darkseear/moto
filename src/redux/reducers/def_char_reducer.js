import { CharApi } from "../../api/charAPI"

const DEF_CHAR = "DEF_CHAR"

let initialState = { def_char: null }

const defCharReducer = ( state = initialState, action ) => {

    switch(action.type){
        case DEF_CHAR: {
            return {
                ...state,
                def_char: action.def_char
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

export const createChar = (defChar) => {
    return (dispatch) => CharApi.createChar(defChar)
    .then((res)=>{
        if(res.status === "200"){
            dispatch(getChar())
        }
    })
}


export default defCharReducer