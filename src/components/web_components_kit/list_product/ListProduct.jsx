import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { category } from '../../../redux/reducers/category_reducer';
import { deleteProduct, products, updateProduct } from '../../../redux/reducers/product_reducer';


function ProductionListElement ({dispatch, deleteProduct, selectState, item}){

    const [hidden, setHidden] = useState(false)
    const [update, setUpdate] = useState(false)
    const [updateObj, setUpdateObj] = useState({ ...item })

        console.log(updateObj)

        const handleSubmit = (e) =>{
            e.preventDefault();
            dispatch(updateProduct(updateObj, selectState))
            setUpdate(false)
        }

    return (
            <div key={item.id} className='element_products-list_element'>
                <div className='element_products-list_element__container'>
                                <div>
                                    <div>{ item.name }</div>
                                    <div>
                                        {
                                        item.brand  && <div>
                                            Производитель: 
                                            { item.brand }
                                        </div>
                                        
                                        }
                                    </div>
                                </div>
                                <div className='element-list_button'>
                                    <div className='element-list_button-hidden' onClick={()=>setHidden(!hidden)}>
                                        {
                                            !hidden ? "Развернуть" : "Свернуть"
                                        }
                                    </div   >
                                    <div>
                                        <div onClick={()=> dispatch(deleteProduct(item.id, selectState))}>Удалить (X)</div>
                                        <div onClick={()=> setUpdate(!update) } >
                                            {
                                                !update ? "Редактировать" : "Не редактировать"
                                            }
                                        </div>
                                    </div>
                                </div>
                </div>
                {
                    hidden && <form className='info_update_block-element_product' onSubmit={handleSubmit}>
                        <div className="input_container-element_product">
                            <label>Название</label>
                            <input value={updateObj.name} onChange={(e)=> setUpdateObj({...updateObj, name: e.target.value})} type="text" disabled={!update}/>
                        </div>
                        <div className="input_container-element_product">
                            <label>Производитель</label>
                            <input value={updateObj.brand} onChange={(e)=> setUpdateObj({...updateObj, brand: e.target.value})} type="text" disabled={!update}/>
                        </div>
                        <div className="input_container-element_product">
                            <label>Цена</label>
                            <input value={updateObj.price} onChange={(e)=> setUpdateObj({...updateObj, price: e.target.value})} type="text" disabled={!update}/>
                        </div>

                        <button className='form_button-submit' type='submit'>Update</button>
                    </form>
                }
                                
            </div>
    )
}

function ListElement({products_category_id , dispatch, deleteProduct, selectState}){

    return(
        <>
            <div className="list_element">
                    {
                        products_category_id && 
                        products_category_id !== null ?
                        products_category_id.map((item)=> <ProductionListElement key={item.id} dispatch={dispatch} deleteProduct={deleteProduct} selectState={selectState} item={item}/>
                        )
                        :
                        <div>Нет товара</div>
                    }
                </div>
        </>
    )
}


function ListProduct() {

    const { products_category_id } = useSelector( state => state.products )
    const { categoryArr } = useSelector( state => state.categorys )

    const [selectState, setSelectState] = useState("")
    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{

        if(selectState === ""){
            setFlag(false)
        } else {
            setFlag(true)
            console.log(products_category_id)
            dispatch(products(selectState))
        }
        
    },[selectState])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="create_product-container bottom_margin">
                <div className="create_product-form" >
                <div className="title_element">
                    <p>Список товаров</p>
                </div>

                <div className='select_container-listElement' >
                    {
                            categoryArr &&
                            categoryArr !== null && <select className='select_category-element' value={selectState} onChange={(e)=>setSelectState(e.target.value)}>
                        <option value=""></option>
                        
                            {
                            categoryArr.map((item)=><option key={item.id} value={item.id}>{item.name}</option>
                            )
                        }
                       
                    </select>
                     }
                </div>
{
                flag && <ListElement products_category_id ={products_category_id } dispatch={dispatch} deleteProduct={deleteProduct} selectState={selectState}/>
                           
}               

                </div>

            </div>
        </>
   
)}

export default ListProduct;
