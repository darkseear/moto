import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../../../redux/reducers/category_reducer';
import { getCharId } from '../../../redux/reducers/def_char_reducer';
import { createProduct, createProductTest, uoloadImage } from '../../../redux/reducers/product_reducer';

function CreateProductTest() {

    function isEmptyObject(obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    }

    // const [photo, setPhoto] = useState()
    // const [creatProd, setCreatProd] = useState({ brand: '', name: '', price: '', description: '', characteristics: [], category_id: '' })
    const [creatProd, setCreatProd] = useState({ brand: '', name: '', price: '', description: '', char:[], category_id: '' })
    const [ categoryState, setCategoryState ] = useState("")

    const dispatch = useDispatch()

    const { categoryArr } = useSelector(state => state.categorys)
    const { def_char_id , def_char} = useSelector( state => state.def_char )

    useEffect(() => {
        dispatch(category())
    }, [])
    
    const [objImg, setObjImg] = useState({ title: '', sendimage: null });

    const handlePhotoInputChange = (e) => {
        setObjImg({ ...objImg, sendimage: e.currentTarget.files })
    }

    const onChengeInputObjImg = (e) => {
        setObjImg({ ...objImg, title: e.target.value })
    }

    // React.useEffect(()=>{
    //     console.log(photo);
    //     setObjImg({ ...objImg, sendimage: photo })
    // }, [photo])

    const handleSubmit = (e) => {
        e.preventDefault()

        // createProduct(objImg, { ...creatProd, characteristics: JSON.stringify(creatProd.characteristics) });
        createProductTest(objImg, { ...creatProd, characteristics: '[]'});
    }

    const onChengeInputCreate = (e, name) => {
        // console.log(1)
        if(name === "category_id"){
            return setCreatProd({ ...creatProd, category_id: e.target.value })
        }
        for(let i = 0; i < def_char_id.length; i++){
                if (def_char_id[i].name === name) {
                    console.log(2)
                    let arrCharacteristics = creatProd.characteristics;
                    arrCharacteristics[i].description = e.target.value;
                   return setCreatProd({ ...creatProd, characteristics: arrCharacteristics})
                }
        }
            
        switch (name) {
            case "brand": {
                return setCreatProd({ ...creatProd, brand: e.target.value })
            }
            case 'name': {
                return setCreatProd({ ...creatProd, name: e.target.value })
            }
            case 'price': {
                return setCreatProd({ ...creatProd, price: e.target.value })
            }
            case 'description': {
                return setCreatProd({ ...creatProd, description: e.target.value })
            }
            default: {
                console.log(3)
                setCreatProd({ ...creatProd })
            }
        }
    }

    useEffect(() => {
        if(categoryState !== "" && categoryState !== null) {
            dispatch(getCharId(categoryState))
        }
       if(categoryState === "" || categoryState === null) setCategoryState(null)
    }, [categoryState, def_char])

    useEffect(() => {
        if(categoryState !== "" && categoryState !== null) {
            if(def_char_id && def_char_id !== null) { 
                let arrCharacteristics = [];
               if( !isEmptyObject(def_char_id)){ 
                    def_char_id.forEach((item)=> {
                        return arrCharacteristics.push({ name: item.name, value: item.value })
                    })
                    // console.log( "arrNew:" + JSON.stringify(arrCharacteristics))
                    setCreatProd({ ...creatProd, char: arrCharacteristics })
                } else {
                    setCreatProd({ ...creatProd, char: arrCharacteristics })
                }
            }
        }
        
       if(categoryState === "" || categoryState === null) setCategoryState(null)
    }, [def_char_id, def_char])

    return (
        <div className="create_product-container bottom_margin">
            <form className="create_product-form" onSubmit={handleSubmit} action="">
                <div className="title_element">
                    <p>Создание товара</p>
                </div>

                <div className="form_product-category">
                    <label htmlFor="category" > Категория товара: </label>
                    <br />
                    {
                        categoryArr && categoryArr !== undefined ? <select name="category" value={creatProd.category_id} style={{ width: '310px', height: '40px', fontSize: '20px' }} onChange={(e) =>{ onChengeInputCreate(e, 'category_id');  setCategoryState(e.target.value) }} name="category" id="category" required>
                            <option value="" ></option>
                            {
                                categoryArr.map((item) => <option value={item.id} key={Math.random()}>
                                    {item.name}
                                </option>)
                            }

                        </select>
                            : <div> Loading... </div>
                    }
                </div>

                <div className="create_product-wrapper" style={creatProd.category_id === "" ? { display:'none'} : { display:'flex'} }>

                    <div className={  !objImg.title  || objImg.sendimage === null ? "form-product__img form-product_element" : "form-product__img form-product_element form-product_element-green"} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <div>
                                <label htmlFor="photo" >Загрузите изображения</label>
                                <br />
                                <input type="file" name="photo" multiple onChange={handlePhotoInputChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="title"> Название изображения </label>
                                <br />
                                <input placeholder='Именование товара' className="custom_input" type="text" name="title" value={objImg.title} onChange={onChengeInputObjImg} required />
                            </div>
                            {/* <div onClick={()=> handlePhoto() }>
                                отправить только фото 
                            </div> */}
                        </div>
                        <br />
                        <img style={{ width: '250px', height: '250px' }} src={objImg.sendimage ? URL.createObjectURL(objImg.sendimage[0]) : null} alt={objImg.sendimage ? objImg.sendimage.name : null} />
                    </div>

                    <div className="form-product__img form-product_element">
                        <p>Введи сведения о товаре:</p>
                        <br />
                        <div className="create_category-element_flex">
                            <label htmlFor="brand" > Бренд товара: </label>
                            <input className="custom_input" placeholder="" name="brand" type="text" value={creatProd.brand} onChange={(e) => onChengeInputCreate(e, "brand")} required />
                        </div>
                        <br />
                        <div className="create_category-element_flex">
                            <label htmlFor="name" > Название товара: </label>
                            <input className="custom_input" placeholder="" name="name" id="name" value={creatProd.name} onChange={(e) => onChengeInputCreate(e, "name")} required />
                        </div>
                        <br />
                        <div className="create_category-element_flex">
                            <label htmlFor="price" > Цена: </label>
                            <input className="custom_input" placeholder="" name="price" id="price" value={creatProd.price} onChange={(e) => onChengeInputCreate(e, "price")} required />
                        </div>
                        <br />
                        <div className="create_category-element_flex">
                            <label htmlFor="description" > Описание: </label>
                            <textarea className="custom_input" style={{ height:'70px' }}  name="description" id="description" value={creatProd.description} onChange={(e) => onChengeInputCreate(e, "description")} required />
                        </div>
                        <br />
                    </div>

                    <div className="form-product_element">
                        <div>
                            Характеристики :
                        </div>
                        <br />

                            {
                                creatProd.char !== null && creatProd.char &&  creatProd.char.length !== 0 ? 
                                
                                creatProd.char.map((item, index) => <div key={ Math.random()}>
                                        <div className="create_category-element_flex">
                                            <label htmlFor={ item.name } > { item.name } </label>
                                        {
                                            creatProd.char[index] && creatProd.char[index] !== undefined && creatProd.char[index] !== null && <input className="custom_input"  name={item.name} type="text" value={creatProd.char[index].value} onChange={(e) => setCreatProd({ ...creatProd, [item.name]: e.target.value})} required /> 
                                            
                                            }
                                        </div>
                                        <br />
                                    </div> )
                                 :
                                  <div>Создайте характеристику</div>
                            }
                    </div>

                </div>

                <div>
                    <br />
                    <button className="form_button-submit" type="submit" disabled={ creatProd.category_id === "" ? true : false }>Загрузить товар</button>
                    <br />
                </div>

            </form>
        </div>
    )
}

export default CreateProductTest
