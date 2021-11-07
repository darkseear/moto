import { RegAPI } from "../../api/regAPI"

const REGISTRATION = "REGISTRATION"

let initialState = {}

export const reg_reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTRATION: {
            return {
                ...state
            }
        }

        default:{
            return state
        }
    }
}

export const registrationUser = (obj) => {
    return (dispatch) => RegAPI.registration(obj)
        .then((res)=>{
            console.log(res)
            alert("Зарегистрировались")
        })
}