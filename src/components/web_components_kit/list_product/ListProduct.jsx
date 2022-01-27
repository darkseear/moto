import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { category } from '../../../redux/reducers/category_reducer';
import { deleteProduct, products, updateProduct } from '../../../redux/reducers/product_reducer';


function Search({ item, setDataSearchState }){

    const [search, setSearch] = useState("");
    
    const dataSearch = (e) => { 
        setSearch(e)
        const value = e.toLowerCase(); 
        const filter = item.filter(product => { 
            return product.name.toLowerCase().includes(value); 
        }); 
        setDataSearchState(filter)
        // update({ data: filter, active: 0, term: value }); 
    }

    return(
        <>
            <div className='search_conainer'>
                {/* <div className='title_search'>
                    Поиск
                </div> */}
                <div>
                    <input placeholder='Введите название товара для поиска...' style={{width:'100%', height:'50px', fontSize:'30px'}} type="text" value={search} onChange={(e)=> dataSearch(e.target.value)}/>
                </div>
            </div>
        </>
    )
}

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

        const URL = "http://xn--k1acecair0j.xn--p1ai/"

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
                        
                    <div className='info_update_block-container'>
                        <div className='input_update_block-container_element'>
                            <div className="input_container-element_product">
                                <label>Photo</label>
                                {/* <input value={updateObj.name} onChange={(e)=> setUpdateObj({...updateObj, name: e.target.value})} type="text" disabled={!update}/> */}
                                {
                                    updateObj && updateObj.imgsArr.length !== 0 ?
                                    updateObj.imgsArr.map((item, index)=><div className="obramlenie_udalenie" key={item.id} >
                                        <img src={`${URL}/${item.url}`} style={{width: '250px', height: '250px'}}></img>
                                       <div style={{display:'flex', justifyContent:'center', width:'250px', marginTop:'10px'}}><button type='button' style={{ width:'250px' }} className='form_button-submit'>Удалить </button>
                                   </div>
                                    </div>
                                    )
                                    : 
                                    <div>
                                        У вас не добавлены фото
                                    </div>
                                }
                            </div>
                            <div>
                               <p>Добавить изображение</p> 
                                <label htmlFor="photo_new" className='new_poto-list_element-list'>+</label>
                                <input name='photo_new' id='photo_new' type="file" style={{display:"none"}}/>
                            </div>
                            
                        </div>
                        <div className='input_update_block-container_element'>
                            <label>Сведения о товаре:</label>
                            <br />
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
                            <div className="input_container-element_product">
                                <label>Описание</label>
                                <textarea value={updateObj.description} onChange={(e)=> setUpdateObj({...updateObj, description: e.target.value})} type="text" disabled={!update}/>
                            </div>
                        </div>
                        <div className='input_update_block-container_element'>
                           {
                                updateObj && updateObj.char.length !== 0 ? 
                                updateObj.char.map((item, index) => <div key={item.id} className="input_container-element_product">
                                    <label>{item.name}</label>
                                    <input value={updateObj.char[index]["value"]} onChange={(e)=> {
                                        let obj = {...updateObj};
                                        obj.char[index] = {...obj.char[index], ["value"]: e.target.value}
                                        debugger
                                        setUpdateObj(obj)
                                        }
                                    } type="text" disabled={!update}/>
                                </div>)
                                :
                                <div>
                                    Нет характеристик
                                </div>
                            }
                        </div>
                    </div>
                        <button className='form_button-submit' type='submit'>Update</button>
                    </form>
                }
                                
            </div>
    )
}

function ListElement({products_category_id , dispatch, deleteProduct, selectState}){

    const [dataSearchState, setDataSearchState] = useState(null);

    useEffect(()=>{
        products_category_id && 
        products_category_id !== null && 
        setDataSearchState(products_category_id)
    }, [products_category_id])

    return(
        <>
            <div>
                {
                    dataSearchState && 
                    dataSearchState !== null &&
                    <Search item={products_category_id} setDataSearchState={setDataSearchState}/>
                }        
            </div>
            <div className="list_element">
                    {
                        dataSearchState && 
                        dataSearchState !== null ?
                        <>
                            
                        {    
                            dataSearchState.map((item)=> <ProductionListElement key={item.id} dispatch={dispatch} deleteProduct={deleteProduct} selectState={selectState} item={item}/>
                            )
                        }

                        </>
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
