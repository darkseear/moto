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
    <div style={{ position:'fixed', width:'100%', height:'100%', zIndex:"2500",top:'0', left:'0' }}>
        {/* container */}
        <div style={{ position:'relative', width:"100%", height:"100%", display:'flex', alignItems:"center", justifyContent:"center" }}>
            {/* fon */}
            <div style={{ position:'absolute', width:'100%', height:"100%", background:"black", opacity:'0.3'}}></div>
            {/* container_form */}
            <div style={{ minWidth:'520px', minHeight:"800px", background:'white', zIndex:'1000', borderRadius:"10px", boxShadow:'0px 0px 6px', position:"relative" }}>

                <div  onClick={closeOrderForm} style={{ position:'absolute', top:'0', right:'0', padding:'0px 10px 5px 10px', borderRadius:'10px', border:'1px solid black', cursor:'pointer', marginTop:'5px', marginRight:"3px" }}>
                    x
                </div>

                <form onSubmit={handleSubmite}>
                    {/* title_form */}
                    <div style={{ textAlign:'center' , width:'100%', height:"40px", padding:'10px'}}>
                        {title_form}
                    </div>
                    {/* container input for rorm  */}
                    <div style={{ display:'flex', flexDirection:"column" , padding:'15px'}}>
                        <label htmlFor="nameOrder">Имя</label>
                        <input id="nameOrder" name="nameOrder" type="text"/>
                        <br />
                        <label htmlFor="firstNameOrder">Фамилия</label>
                        <input type="text" name='firstNameOrder' id="firstNameOrder"/>
                        <br />
                        <label htmlFor="lastNameOrder">Отчество</label>
                        <input type="text" name='lastNameOrder' id='lastNameOrder' />
                        <br />
                        <label htmlFor="phoneOrder">Телефон</label>
                        <input type="tel" name='phoneOrder' id='phoneOrder' />
                        <br />
                        <label htmlFor="emailOrder">Email</label>
                        <input type="email" name='emailOrder' id='emailOrder'/>
                        <br />
                        <label htmlFor="commetOrder">Комментарий</label>
                        <textarea name="commetOrder" id="commetOrder" cols="30" rows="10" style={{ resize:'none' }}></textarea>
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