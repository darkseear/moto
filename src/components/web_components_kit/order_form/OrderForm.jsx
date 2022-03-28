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
                        <label htmlFor="nameOrder">ФИО</label>
                        <input value={orderFormState.fio} onChange={ (e) => setOrderFormState({...orderFormState, fio:e.target.value}) } placeholder="Фамилия Имя Отчество" id="nameOrder" name="nameOrder" type="text"/>
                        <br />
                        {/* <label htmlFor="firstNameOrder">Фамилия</label>
                        <input type="text" name='firstNameOrder' id="firstNameOrder"/>
                        <br />
                        <label htmlFor="lastNameOrder">Отчество</label>
                        <input type="text" name='lastNameOrder' id='lastNameOrder' />
                        <br /> */}
                        <label htmlFor="phoneOrder">Телефон</label>
                        <input value={orderFormState.phone} onChange={ (e) => setOrderFormState({...orderFormState, phone:e.target.value}) } type="tel" name='phoneOrder' id='phoneOrder' />
                        <br />
                        <label htmlFor="emailOrder">Email</label>
                        <input value={orderFormState.email} onChange={ (e) => setOrderFormState({...orderFormState, email:e.target.value}) } type="email" name='emailOrder' id='emailOrder'/>
                        <br />
                        <label htmlFor="commetOrder">Комментарий</label>
                        <textarea value={orderFormState.comment} onChange={ (e) => setOrderFormState({...orderFormState, comment:e.target.value}) } name="commetOrder" id="commetOrder" cols="30" rows="10" style={{ resize:'none' }}></textarea>
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