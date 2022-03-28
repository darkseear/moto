import React , {useState} from 'react'
import { useDispatch } from 'react-redux'

function CartButton_product({ read_one, cart, setCart}) {

    const [state, setState] = useState(1)
    const dispatch = useDispatch()

    const plusHandlerOn = (currentCount) => {
        if(currentCount === "+"){
            setState(state + 1)
        }
        if(currentCount === "-"){
            state !== 1  &&  setState(state - 1)
        }
    }

    const handlerAddCart = () => {
        if(cart){
            let flag_find = false;
                cart.forEach((item, index)=>{
                    if(item.id === read_one.id){
                        flag_find= true;
                        let newCart = cart;
                        newCart[index].cart_count = newCart[index].cart_count + state;
                        dispatch(setCart(newCart))
                    }
                })
            if(!flag_find){
                let newCart = cart;
                let newOrder = { 
                    id: read_one.id, 
                    name: read_one.name, 
                    category_id: read_one.category_id , 
                    category_name: read_one.category_name,
                    cart_count: state,
                    photo:read_one.imgsArr[0] ? read_one.imgsArr[0].url : null
                }
                newCart.push(newOrder)
                dispatch(setCart(newCart))
            }  
        }
        
    }

    return (
        <>
            <div style={{ display: 'flex', alignItems:'center' }}>
                <div onClick={handlerAddCart} className="cart_button" >
                    В корзину
                </div>
                <div style={{ display: 'flex', height: '60px', paddingTop: '10px', width: "76px", paddingLeft: '1px', alignItems: 'center' }} >
                    <div onClick={() => plusHandlerOn("+")} style={{cursor:'pointer' ,height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", backgroundColor: '#952714', color: 'white', fontWeight: 'bold', paddingBottom: '0.1px' }}>+</div>
                    <div style={{ height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", fontWeight: 'bold', paddingBottom: '0.1px' }}>{state}</div>
                    <div onClick={() => plusHandlerOn("-")} style={{ cursor:'pointer' , height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", backgroundColor: '#952714', color: 'white', fontWeight: 'bold', paddingBottom: '0.1em' }}>-</div>
                </div>
            </div>
        </>
    )
}

export default CartButton_product
