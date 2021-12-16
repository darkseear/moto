import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteCart, setCart } from '../../../redux/reducers/cart_reducer'
import Categories from '../../web_components_kit/categories/Categories'
import PageTitle from '../../web_components_kit/page_title/PageTitle'
import SelectSortProduct from '../../web_components_kit/select_sort_product/SelectSortProduct'



function Cart() {

    const dispatch = useDispatch()
    const { cart } = useSelector( state => state.carts ) 

    const onClickDeleteCart = (i) => {
        let arr = cart.filter((item)=> item.id !== i )
        dispatch(deleteCart( arr ))
    }

    const [ cartList, setCartList ] = React.useState(cart)

    useEffect(()=>{
        setCartList(cart)
    }, [cart])

    return (
        <>
            <PageTitle  title={"Корзина"} />
            <div className="__container">
                <div style={{ float:'left', marginRight:'10px'}}>
                        <Categories />
                </div>
                <div style={{ display:'flex', flexDirection:'column' }}>
                    <div>
                        <p>Список добавленных товаров</p>
                    </div>
                        <SelectSortProduct stateArr={ cartList } setStateArr={ setCartList }/>
                    <div>
                        {
                           cartList && Array.isArray(cartList) && cartList.length > 0 ? 
                           <div>
                               {
                               cartList.map((item, index)=> <div key={item.id+index} style={{ width:'500px', minHeight:'240px', display:'flex' }}>
                                   <div style={{ width:'400px', height:'100%' }}>
                                        <div>{item.name}</div>
                                        <div>{item.category_name}</div>
                                   </div>
                                   <div style={{ width:'100px', height:'100%' }} >
                                        <button onClick={ ()=>onClickDeleteCart(item.id) } >Удалить</button>
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
