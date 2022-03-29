import React, { useState } from 'react'

function OrderForm({ cart, title_form , close}) {

    const [orderFormState, setOrderFormState] = useState({ email:"", fio:"", phone:"", comment:"",cart:cart})

    function handleSubmite(e){
        e.preventDefault()
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
                    <div className='order_form-container_input_form' >
                        <label htmlFor="nameOrder">Имя</label>
                        <input className='order_form_input' id="nameOrder" name="nameOrder" type="text"/>
                        <br />
                        <label htmlFor="firstNameOrder">Фамилия</label>
                        <input className='order_form_input' type="text" name='firstNameOrder' id="firstNameOrder"/>
                        <br />
                        <label htmlFor="lastNameOrder">Отчество</label>
                        <input className='order_form_input' type="text" name='lastNameOrder' id='lastNameOrder' />
                        <br />
                        <label htmlFor="phoneOrder">Телефон</label>
                        <input className='order_form_input' type="tel" name='phoneOrder' id='phoneOrder' />
                        <br />
                        <label htmlFor="emailOrder">Email</label>
                        <input className='order_form_input' type="email" name='emailOrder' id='emailOrder'/>
                        <br />
                        <label htmlFor="commetOrder">Комментарий</label>
                        <textarea className='order_form_textarea' name="commetOrder" id="commetOrder" cols="30" rows="10" style={{ resize:'none' }}></textarea>
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