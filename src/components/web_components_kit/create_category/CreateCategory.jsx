import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CreateCategory() {

    const [categoryState, setCategoryState] = useState({name:'', description:'', title:'', sendimage:null })
    const dispatch = useDispatch()
    const { categoryArr } = useSelector( state => state.categorys )

    const onChengeInputCreate = (e, name) => {
        switch(name){
            case "category_id": {
                setCategoryState({...categoryState, name: e.target.value})
            }
            default: {
                setCategoryState({...categoryState})
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="create_category-container bottom_margin">
            <form className="create_product-form" onSubmit={handleSubmit}>
                <div className="title_element">
                    <p>Создание категории товара</p>
                </div>
                <div className="form_product-category ">
                    <label htmlFor="category" > Список существующих категорий товара: </label>
                    <br />
                    {
                        categoryArr && categoryArr !== undefined ? <select name="category" value={categoryState.category_id} style={{ width: '310px', height: '40px', fontSize: '20px' }} onChange={(e) => onChengeInputCreate(e, 'category_id')} name="category" id="category" required>
                            
                            {
                                categoryArr.map((item) => <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>)

                            }

                        </select>
                            : <div> Loading... </div>
                    }
                </div>
                <div className="create_product-wrapper create_category-wrapper">
                    <div className="form-product__img form-product_element">
                        <div className="create_category-element_flex">
                           <label  htmlFor="">Наименование категории</label>
                            <input className="custom_input" type="text" /> 
                        </div>
                        <div className="create_category-element_flex">
                            <label htmlFor="">Описание категории</label>
                            <input className="custom_input" type="text" />
                        </div>
                        <div className="create_category-element_flex">
                            <label htmlFor="">Описание изображения категории</label>
                            <input className="custom_input" type="text" />
                        </div>
                        <div className="create_category-element_flex">
                            <label htmlFor="">Загрузите изображение</label>
                            <input className="custom_input" type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <button className="form_button-submit" type="submit" disabled={ categoryState.name === "" ? true : false }>Загрузить категорию</button>
                    <br />
                </div>
            </form>
        </div>
    )
}

export default CreateCategory
