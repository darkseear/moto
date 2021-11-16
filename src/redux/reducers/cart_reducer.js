const CART = "CART"

let initialState = {cart:[]}

export const cartReducer = ( state = initialState , action) => {

    switch(action.type){
        case CART: {
            return {
                ...state,
                cart: action.arrCart
            }
        }

        default:{
            return state
        }
    }

}

export const setCart = (arrCart) => {
    return (dispatch) => {
        dispatch({
            type:CART,
            arrCart
        })
    }
}

export const deleteCart = (arrCart) => {
    return (dispatch) => {
        dispatch({ 
            type: CART, 
            arrCart
        })
    }
}