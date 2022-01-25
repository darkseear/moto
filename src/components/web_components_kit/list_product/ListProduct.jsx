import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { category } from '../../../redux/reducers/category_reducer';
import { deleteProduct, products } from '../../../redux/reducers/product_reducer';

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
                <form className="create_product-form" onSubmit={handleSubmit} action="">
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
                flag && <div className="list_element">
                    {
                        products_category_id && 
                        products_category_id !== null ?
                        products_category_id.map((item)=> <div key={item.id} className='element_products-list_element'>
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
                                <div>
                                    <div onClick={()=> dispatch(deleteProduct(item.id))}>Удалить (X)</div>
                                    <div>Обновить</div>
                                </div>
                            </div>
                        )
                        :
                        <div>Нет товара</div>
                    }
                </div>
}               

                </form>

            </div>
        </>
   
)}

export default ListProduct;
