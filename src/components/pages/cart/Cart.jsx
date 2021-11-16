import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteCart } from '../../../redux/reducers/cart_reducer'
import Categories from '../../web_components_kit/categories/Categories'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Cart() {

    const dispatch = useDispatch()
    const { cart } = useSelector( state => state.carts ) 

    const onClickDeleteCart = (i) => {
        let arr = cart;
        arr.splice(i, 1) 
        dispatch(deleteCart( arr ))
    }

    return (
        <>
            <PageTitle  title={"Корзина"} />
            <div className="__container">
                <div style={{ float:'left', marginRight:'10px'}}>
                        <Categories />
                </div>
                <div>
                    <div>
                        <p>Список добавленных товаров</p>
                    </div>
                    <div>
                        {
                           cart && Array.isArray(cart) ? 
                           <div>
                               {
                               cart.map((item, index)=> <div key={item.id + index} style={{ width:'500px', minHeight:'240px', display:'flex' }}>
                                   <div style={{ width:'400px', height:'100%' }}>
                                        <div>{item.name}</div>
                                        <div>{item.category_name}</div>
                                   </div>
                                   <div style={{ width:'100px', height:'100%' }} >
                                        <button onClick={ ()=>onClickDeleteCart(item.index) } >Удалить</button>
                                   </div>
                               </div>)
                               }
                           </div>
                           
                           :
                           <div>
                               <p>Вы еще не добавили ни одного товара</p>
                           </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
