import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteCart, setCart } from '../../../redux/reducers/cart_reducer'
import Categories from '../../web_components_kit/categories/Categories'
import PageTitle from '../../web_components_kit/page_title/PageTitle'
import SelectSortProduct from '../../web_components_kit/select_sort_product/SelectSortProduct'
import plaseholder_image from '../../../images/plaseholder_image.png'
import OrderForm from '../../web_components_kit/order_form/OrderForm'



function Cart() {

    const dispatch = useDispatch()
    const { cart } = useSelector( state => state.carts ) 

    const [openOrderForm, setOpenOrderForm] = useState(false)

    function openOrderFormFN(variant){
        setOpenOrderForm(variant)
    }

    const onClickDeleteCart = (i) => {
        let arr = cart.filter((item)=> item.id !== i )
        dispatch(deleteCart( arr ))
    }

    const [ cartList, setCartList ] = React.useState(cart)

    useEffect(()=>{
        setCartList(cart)
    }, [cart])

    const URL = "http://xn--k1acecair0j.xn--p1ai/"

    return (
        <>
            {openOrderForm&&<OrderForm cart={cart} title_form={"Оформление заказа"} close={openOrderFormFN}/>}
            <PageTitle  title={"Корзина"} />
            <div className="__container">
                <div style={{ float:'left', marginRight:'10px'}}>
                        <Categories />
                </div>
                <div style={{ display:'flex', flexDirection:'column' }}>
                    <div>
                        <p>Список добавленных товаров</p>
                        <br />
                    </div>
                        <SelectSortProduct stateArr={ cartList } setStateArr={ setCartList }/>
                        <br />
                    <div>
                        {
                           cartList && Array.isArray(cartList) && cartList.length > 0 ? 
                           <div>
                               {
                               cartList.map((item, index)=> <div key={item.id+index} style={{ width:'100%', minHeight:'120px', display:'flex', borderRadius: '10px',
                               boxShadow: '0px 0px 5px', marginBottom:'30px' }}>
                                   <div style={{ width:'80%', display:"flex",  padding:'10px' }}>
                                            <div style={{ width:'170px', height:'150px', display:'flex', alignItems:'center', padding:"10px"}}>
                                                <div style={{width:"100%", height:"80%", background:`url('${item.photo !== null ? URL + item.photo : plaseholder_image }')`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
                                                    
                                                </div>
                                            </div>
                                            <div>
                                                <div> 
                                                    <p style={{fontWeight:"bold"}}>Название товара: </p> 
                                                    {item.name}
                                                </div>
                                                
                                                <br />
                                                <div> 
                                                    <p style={{fontWeight:"bold"}}>Категория товара: </p> 
                                                    {item.category_name}
                                                </div>
                                            </div>
                                   </div>
                                   <div style={{ width:'20%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
                                        <button className='cart_button' onClick={ ()=>onClickDeleteCart(item.id) } >Удалить</button>
                                        <div style={{ display: 'flex', height: '60px', paddingTop: '10px', width: "76px", paddingLeft: '1px', alignItems: 'center' }}>

                                        <div
                                        //  onClick={() => plusHandlerOn("+")}
                                          style={{cursor:'pointer' ,height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", backgroundColor: '#952714', color: 'white', fontWeight: 'bold', paddingBottom: '0.1px' }}>+</div>
                                        <div style={{ height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", fontWeight: 'bold', paddingBottom: '0.1px' }}>{item.cart_count}</div>
                                        <div 
                                        // onClick={() => plusHandlerOn("-")} 
                                        style={{ cursor:'pointer' , height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: "25px", backgroundColor: '#952714', color: 'white', fontWeight: 'bold', paddingBottom: '0.1em' }}>-</div>

                                            
                                        </div>
                                   </div>
                               </div>)
                               }

                               <div>
                                   <button onClick={()=>openOrderFormFN(true)} style={{ minWidth:'220px' }} className='cart_button'>Оформить запрос</button>
                               </div>
                           </div>
                           
                           :
                           <div>
                               <p>Вы не добавили ни одного товара</p>
                           </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
