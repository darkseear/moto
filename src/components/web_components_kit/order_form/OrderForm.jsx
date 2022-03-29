import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductsApi } from '../../../api/productAPI'

function OrderForm({ cart, title_form , close, setCart}) {

    const dispatch = useDispatch()

    const [orderFormState, setOrderFormState] = useState({ email:"", fio:"", phone:"", comment:"",cart:cart})

    async function handleSubmite(e){
        e.preventDefault()
        console.log(orderFormState)
       try{ let res = await ProductsApi.order(orderFormState)
        let data = res.data;
        dispatch(setCart([]))
        closeOrderForm()
       } catch (error){
           alert("Запрос не отправлен:" + error)
            return error.response;
       }
    }

    function closeOrderForm(){
        close(false)
    }

  return (
    <div  className='order_form' >
        {/* container */}
        <div className='order_form-container'>
            {/* fon */}
            <div className='order_form-fon'></div>
            {/* container_form */}
            <div className='order_form-container_form'>

                <div  onClick={closeOrderForm}  className='order_form-close_button' >
                    x
                </div>

                <form onSubmit={handleSubmite}>
                    {/* title_form */}
                    <div className='order_form-title_form' >
                        {title_form}
                    </div>
                    {/* container input for rorm  */}
                    <div className='order_form-container_input_form'>
                        <label htmlFor="nameOrder">ФИО</label>
                        <input className='order_form_input' value={orderFormState.fio} onChange={ (e) => setOrderFormState({...orderFormState, fio:e.target.value}) } placeholder="Фамилия Имя Отчество" id="nameOrder" name="nameOrder" type="text"/>
                        <br />
                        {/* <label htmlFor="firstNameOrder">Фамилия</label>
                        <input type="text" name='firstNameOrder' id="firstNameOrder"/>
                        <br />
                        <label htmlFor="lastNameOrder">Отчество</label>
                        <input type="text" name='lastNameOrder' id='lastNameOrder' />
                        <br /> */}
                        <label htmlFor="phoneOrder">Телефон</label>
                        <input className='order_form_input' value={orderFormState.phone} onChange={ (e) => setOrderFormState({...orderFormState, phone:e.target.value}) } type="tel" name='phoneOrder' id='phoneOrder' />
                        <br />
                        <label htmlFor="emailOrder">Email</label>
                        <input className='order_form_input' value={orderFormState.email} onChange={ (e) => setOrderFormState({...orderFormState, email:e.target.value}) } type="email" name='emailOrder' id='emailOrder'/>
                        <br />
                        <label htmlFor="commetOrder">Комментарий</label>
                        <textarea className='order_form_textarea' value={orderFormState.comment} onChange={ (e) => setOrderFormState({...orderFormState, comment:e.target.value}) } name="commetOrder" id="commetOrder" cols="30" rows="10" style={{ resize:'none' }}></textarea>
                        <br />
                        <button className='cart_button' type='submite'>Отправить</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}

export default OrderForm