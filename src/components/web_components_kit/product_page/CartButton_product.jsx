import React , {useState} from 'react'

function CartButton_product() {

    const [state, setState] = useState(0)

    const plusHandlerOn = (currentCount) => {
        if(currentCount === "+"){
            setState(state + 1)
        }
        if(currentCount === "-"){
            state !== 0  &&  setState(state - 1)
        }
    }

    return (
        <>
            <div style={{ display: 'flex', alignItems:'center' }}>
                <div className="cart_button" >
                    В корзину
                </div>
                <div style={{ display: 'flex', height: '60px', paddingTop: '10px', width: "76px", paddingLeft: '1px', alignItems: 'center' }} >
                    <div onClick={() => plusHandlerOn("+")} style={{ height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", backgroundColor: '#952714', color: 'white', fontWeight: 'bold', paddingBottom: '0.1px' }}>+</div>
                    <div style={{ height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", fontWeight: 'bold', paddingBottom: '0.1px' }}>{state}</div>
                    <div onClick={() => plusHandlerOn("-")} style={{ height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", backgroundColor: '#952714', color: 'white', fontWeight: 'bold', paddingBottom: '0.1em' }}>-</div>
                </div>
            </div>
        </>
    )
}

export default CartButton_product
