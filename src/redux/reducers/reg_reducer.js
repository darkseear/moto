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

export const registrationUser = (firstname, lastname, email, password) => {
    return (dispatch) => RegAPI.registration(firstname, lastname, email, password)
}