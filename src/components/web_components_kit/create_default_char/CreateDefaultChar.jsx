import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { category, createCategoryAC, removeCategory } from '../../../redux/reducers/category_reducer';
import { createChar, getChar, removeChar, updateChar } from '../../../redux/reducers/def_char_reducer';

function CreateDefaultChar() {

    const dispatch = useDispatch()
    const { categoryArr } = useSelector( state => state.categorys )
    const { def_char } = useSelector( state => state.def_char )

    const [defCharLoc, setDefCharLoc] = useState({ category_id:'', name:'', value:''})
    const [configId, setConfigId] = useState("")
    const [configIndex, setConfigIndex] = useState({})
    const [configUpdate, setConfigUpdate] = useState({update: false, configId:null})

    useEffect(() => {
        dispatch(getChar())
    }, [])

    useEffect(()=>{
        
        if(def_char && def_char !== null){
            console.log(1)
            for(let i = 0; i < def_char.length; i++){
                // console.log("for:" + i)
                setConfigIndex((prevConfigIndex)=>( {...prevConfigIndex, [def_char[i].id]: i} ))
            }
        }
    }, [def_char])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!configUpdate.update) dispatch(createChar(defCharLoc))
        if(configUpdate.update) dispatch(updateChar(defCharLoc))
        setConfigId("");   
    }
    useEffect(() => {
        if(configId === "" || configId === "Новая конфигурация") {
            setConfigUpdate({ update:false, configId:null })
            setDefCharLoc({
                category_id: '', 
                name:'',
                value:''
            })
        } else {
            setConfigUpdate({ update: true, configId: configId })
            def_char && def_char !== null && def_char[configIndex[configId]] && def_char[configIndex[configId]] !== null && setDefCharLoc({
                category_id:def_char[configIndex[configId]].category_id, 
                name:def_char[configIndex[configId]].name,
                value:def_char[configIndex[configId]].value,
                category_id:configId
            })
            console.log(def_char[configIndex[configId]].value)
        }
    }, [configId])

  

    return (
        <div className="create_category-container bottom_margin">
             <form className="create_product-form" onSubmit={handleSubmit}>
                <div className="title_element">
                    <p>Создать конфигурацию товара</p>
                </div>
                <div className="form_product-category ">
                <div>
                        <select style={{ width: '310px', height: '40px', fontSize: '20px' }} name="def_cghar_all" id="def_char_all" onChange={(e)=> {setConfigId(e.target.value);}}>

                            <option value=""></option>
                            <option value="Новая конфигурация">Новая конфигурация</option>
                            {
                                def_char && def_char !== undefined && def_char.map((item) => <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>)
                            }
                        </select>
                </div>
                <div className="create_product-wrapper create_category-wrapper">
                    
                {    
                  configId === "Новая конфигурация" &&  <div className="form-product__img form-product_element">
                      <div>
                          Новая конфигурация: 
                          {/* { def_char && def_char !== null  && configUpdate && configUpdate.configId !== null && configUpdate !== null && configIndex!==undefined  && configIndex  !== null && def_char[configIndex[configUpdate.configId]]} */}
                      </div>
                      <br />
                        <div className="create_category-element_flex">
                           <label  htmlFor="name_category">Категория конфигурации</label>
                           
                               <div>
                                {   categoryArr && categoryArr !== undefined && 
                               <select name="def_char" value={defCharLoc.category_id} style={{ width: '310px', height: '40px', fontSize: '20px' }} onChange={(e) => { setDefCharLoc({...defCharLoc , category_id: e.target.value});}}  >
                               <option value=""></option>
   
                               {
                                   categoryArr.map((item) => <option value={item.id} key={item.id}>
                                       {item.name}
                                   </option>)
                               }
   
                                </select>
                                }              
                                </div>
                           
                        </div>
                        <br />
                        <div className="create_category-element_flex">
                           <label  htmlFor="name_category">Наименование конфигурации</label>
                            <input className="custom_input" type="text" id="name_category" name="name_category" onChange={ (e) => setDefCharLoc({ ...defCharLoc, name:e.target.value }) } required/> 
                        </div>
                        <br />
                        <div className="create_category-element_flex">
                            <label htmlFor="description_category">Значение характеристики</label>
                            <input className="custom_input" id="description_category" name="description_category"  type="text"  onChange={ (e) => setDefCharLoc({ ...defCharLoc, value:e.target.value }) }  required/>
                        </div>
                        <div>
                            <br />
                            <button className="form_button-submit" type="submit" >Сохранить</button>
                            <br />
                        </div>
                    </div>
                }    

{
                configUpdate.update &&  
                <div className="form-product__img form-product_element">

                      <div>
                          Редактирование конфигурации: 
                      </div>

                      <br />

                        <div className="create_category-element_flex">
                           <label  htmlFor="name_category">Категория конфигурации</label>
                          <div> 
                                {
                                
                                    categoryArr && categoryArr !== undefined && 
                                    <select name="def_char" value={defCharLoc.category_id} style={{ width: '310px', height: '40px', fontSize: '20px' }} onChange={(e) => { setDefCharLoc({...defCharLoc , category_id: e.target.value}) }}  >
                                        <option value=""></option>
                                        {
                                            categoryArr.map((item) => <option value={item.id} key={item.id}>
                                                {item.name}
                                            </option>)
                                        }
                                    </select>
                                        
                                }
                           </div>
                           
                        </div>

                        <br />

                        <div className="create_category-element_flex">
                           <label  htmlFor="name_category">Наименование характеристики</label>
                            <input className="custom_input" type="text" id="name_category" name="name_category" value={defCharLoc.name} onChange={ (e) => setDefCharLoc({ ...defCharLoc, name:e.target.value }) } required/> 
                        </div>

                        <br />

                        <div className="create_category-element_flex">
                            <label htmlFor="description_category">Значение характеристики</label>
                            <input className="custom_input" id="description_category" name="description_category"  type="text" value={defCharLoc.value}  onChange={ (e) => setDefCharLoc({ ...defCharLoc, value:e.target.value }) }  required/>
                        </div>

                        <div style={{ display:'flex' }}>
                            <div>
                                <br />
                                <button className="form_button-submit" type="submit" >Обновить</button>
                                <br />
                            </div>
                            <div>
                                <br />
                                <button className="form_button-submit" type="button" onClick={() => {
                                                                                                    dispatch(removeChar(configId));
                                                                                                    setConfigId("");
                                                                                                }}>Удалить</button>
                                <br />
                            </div>
                        </div>
                        

                    </div>
                    
}

                </div>
                </div>
                
            </form>
            
        </div>
    )
}

export default CreateDefaultChar
