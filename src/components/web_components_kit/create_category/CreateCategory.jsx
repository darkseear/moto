import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { category, createCategoryAC, removeCategory, updateCategoryAC } from '../../../redux/reducers/category_reducer';

function CreateCategory() {

    const [categoryState, setCategoryState] = useState({name:'', description:'', title:'', sendimage:null })
    const [categoryId, setCategoryId] = useState("")
    const [categoryIndex, setCategoryIndex] = useState({})
    const [categoryUpdate, setCategoryUpdate] = useState({update: false, categoryId: null})
    const dispatch = useDispatch()
    const { categoryArr } = useSelector( state => state.categorys )

    const handlePhotoInputChange = (e) => {
        setCategoryState({ ...categoryState, sendimage: e.currentTarget.files[0] })
    }

    useEffect(()=>{
        // alert(JSON.stringify(categoryUpdate))
        
       if(categoryArr && categoryArr !== null) {
            // alert(JSON.stringify(categoryArr[categoryId]));
            for(let i  = 0; i < categoryArr.length; i++){
                // alert(JSON.stringify(categoryArr[i]))
                setCategoryIndex(  (prevCategoryIndex) =>( {...prevCategoryIndex, [categoryArr[i].id]: i}) )
            }
        }
    }, [categoryUpdate.update])

    const onChengeInputCreate = (e, name) => {
        switch(name){
            case "category_id": {
                e.target.value === "" || e.target.value === "Новая категория" ? setCategoryUpdate({update:false, categoryId:null }) : setCategoryUpdate({...categoryUpdate, categoryId:e.target.value })
                return setCategoryId(e.target.value)
            }
            case "name":{
                return setCategoryState({ ...categoryState, name: e.target.value })
            }
            case "description":{
                return setCategoryState({ ...categoryState, description: e.target.value })
            }
            case "title": {
                return setCategoryState({ ...categoryState, title: e.target.value })
            }
            default: {
                return setCategoryState({...categoryState})
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let photoData = new FormData();
        if(categoryState.sendimage && categoryState.sendimage.name) photoData.append('sendimage', categoryState.sendimage, categoryState.sendimage.name);
        if(categoryState.title) photoData.append('title', categoryState.title);
        if(categoryState.name) photoData.append('name', categoryState.name);
        if(categoryState.description) photoData.append('description', categoryState.description);
        categoryUpdate.update ? dispatch(updateCategoryAC(photoData)) : dispatch(createCategoryAC(photoData))
    }

    return (
        <div className="create_category-container bottom_margin">
            <form className="create_product-form" onSubmit={handleSubmit}>
                <div className="title_element">
                    <p>Создание категории товара</p>
                </div>
                <div className="form_product-category ">
                    <label htmlFor="category" >  </label>
                    <br />
                    {
                        categoryArr && categoryArr !== undefined ? <div>
                            <select name="category" value={categoryId} style={{ width: '310px', height: '40px', fontSize: '20px' }} onChange={(e) => {onChengeInputCreate(e, 'category_id');}} name="category" id="category" >
                            <option value=""></option>
                            <option value="Новая категория">Новая категория</option>

                            {
                                categoryArr.map((item, index) => {
                                    // setCategoryIndex({...categoryIndex, [item.id]: index})
                                return <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                                })

                            }

                        </select>
                        <div style={{ display:'flex', width:'750px', marginTop:'30px' }}>

                        {
                           categoryId !== null && categoryId && categoryId !== "Новая категория" && categoryId !== "" && <button className="form_button-submit" style={{ cursor:'pointer', marginRight:'30px' }} onClick={(e) => {e.preventDefault();dispatch(removeCategory(categoryId));}} >
                            Удалить категорию
                            </button> 
                        }
                        { 
                             categoryId !== null && categoryId && categoryId !== "Новая категория" && categoryId !== ""  && <button className="form_button-submit" style={{ cursor:'pointer' }} onClick={(e) => {e.preventDefault(); setCategoryUpdate({...categoryUpdate, update:true})}} >
                             Изменить категорию
                             </button>  
                        }
                        
                        </div>
                       
                        </div>
                            : <div> Loading... </div>
                    }
                </div>
                {
                categoryId === "Новая категория" &&
                <div>
                <div className="create_product-wrapper create_category-wrapper">
                    <div className="form-product__img form-product_element">
                        <div className="create_category-element_flex">
                            <label htmlFor="">Загрузите изображение</label>
                            <input className="custom_input" placeholder="Pictures" type="file" onChange={(e) => { handlePhotoInputChange(e) }} />
                        </div>
                        <div className="create_category-element_flex">
                            <label htmlFor="">Название изображения</label>
                            <input className="custom_input" placeholder="Pictures" type="text" onChange={ (e) => onChengeInputCreate(e ,"title") } />
                        </div>
                        <br />
                        <img style={{ width: '250px', height: '250px' }} src={categoryState.sendimage ? URL.createObjectURL(categoryState.sendimage) : null} alt={categoryState.sendimage ? categoryState.sendimage.name : null} />
                    </div>                    
                    <div className="form-product__img form-product_element">
                        <div className="create_category-element_flex">
                           <label  htmlFor="name_category">Наименование категории</label>
                            <input className="custom_input" type="text" id="name_category" name="name_category" onChange={ (e) => onChengeInputCreate(e ,"name") } required/> 
                        </div>
                        <br />
                        <div className="create_category-element_flex">
                            <label htmlFor="description_category">Описание категории</label>
                            <textarea className="custom_input" id="description_category" name="description_category" style={{ height:'70px' }} type="text"  onChange={ (e) => onChengeInputCreate(e ,"description") }  required/>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <button className="form_button-submit" type="submit" disabled={ categoryState.name === "" ? true : false }>Загрузить категорию</button>
                    <br />
                </div>
                </div>
                }
                {
                categoryUpdate.update  &&
                <div>
                    {/* <div>
                        {JSON.stringify(categoryIndex)}
                    </div> */}
                    <div className="create_product-wrapper create_category-wrapper">
                        {/* <div className="form-product__img form-product_element">
                            <div className="create_category-element_flex">
                                <label htmlFor="">Загрузите изображение</label>
                                <input  className="custom_input" placeholder="Pictures" type="file" onChange={(e) => { handlePhotoInputChange(e) }} />
                            </div>
                            <div className="create_category-element_flex">
                                <label htmlFor="">Название изображения</label>
                                <input value={ categoryArr[categoryIndex[categoryId]] && categoryArr[categoryIndex[categoryId]] !== null && categoryArr[categoryIndex[categoryId]].title} className="custom_input" placeholder="Pictures" type="text" onChange={ (e) => onChengeInputCreate(e ,"title") } />
                            </div>
                            <br />
                            <img style={{ width: '250px', height: '250px' }} src={categoryState.sendimage ? URL.createObjectURL(categoryState.sendimage) : null} alt={categoryState.sendimage ? categoryState.sendimage.name : null} />
                        </div>                     */}
                        <div className="form-product__img form-product_element">
                            <div className="create_category-element_flex">
                                <label  htmlFor="name_category">Наименование категории</label>
                                <input value={ categoryArr[categoryIndex[categoryId]] && categoryArr[categoryIndex[categoryId]]!== null && categoryArr[categoryIndex[categoryId]].name} className="custom_input" type="text" id="name_category" name="name_category" onChange={ (e) => onChengeInputCreate(e ,"name") } required/> 
                            </div>
                            <br />
                            <div className="create_category-element_flex">
                                <label htmlFor="description_category">Описание категории</label>
                                <textarea value={ categoryArr[categoryIndex[categoryId]] && categoryArr[categoryIndex[categoryId]]!== null && categoryArr[categoryIndex[categoryId]].description} className="custom_input" id="description_category" name="description_category" style={{ height:'70px' }} type="text"  onChange={ (e) => onChengeInputCreate(e ,"description") }  required/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <button className="form_button-submit" type="submit" disabled={ categoryState.name === "" ? true : false }>Сохранить изменения</button>
                        <br />
                    </div>
                </div>
                
                }
                
            </form>
        </div>
    )
}

export default CreateCategory
