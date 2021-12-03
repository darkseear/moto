import { AuthAPI } from "../../api/authAPI"

const SIGN_IN = "SIGN_IN"
const SIGN_OUT = "SIGN_OUT"

let user = JSON.parse(localStorage.getItem("user"))

let initialState = user ? { isLogged: true } : { isLogged: false }

export const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            {
                return {
                    ...state,
                    isLogged: true
                }
            }
        case SIGN_OUT:
            {
                return {
                    ...state,
                    isLogged: false
                }
            }
        default:
            {
                return state
            }
    }
}

export const login = (data) => {
    return (dispatch) => AuthAPI.login(data)
        .then((res) => {
            if (res.jwt) {
                user = JSON.parse(localStorage.getItem("user"))
                dispatch({
                    type: SIGN_IN
                })

            } else {
                console.log("что то пошло не так ")
            }
        })
}

export const logout = () => {
    return (dispatch) => {
        AuthAPI.logout()
        dispatch({
            type: SIGN_OUT
        })
    }
}