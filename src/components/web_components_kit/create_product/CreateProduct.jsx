import React, { useState } from 'react'
import { createProduct , uoloadImage} from '../../../redux/reducers/product_reducer';

function CreateProduct() {

    // const [photo, setPhoto] = useState()
    const [creatProd, setCreatProd] = useState({ brand:'', name:'', price:'', decription:'', characteristics:'', category_id:'' })

    const [objImg, setObjImg] = useState({ title:'', sendimage:null});

    const handlePhotoInputChange = (e) => {
        setObjImg({ ...objImg , sendimage: e.currentTarget.files[0] })
    }

    // React.useEffect(()=>{
    //     console.log(photo);
    //     setObjImg({ ...objImg, sendimage: photo })
    // }, [photo])

    const handleSubmit = (e) => {
        e.preventDefault()
        createProduct(objImg, creatProd);
    }

    const handlePhoto = () => {
        uoloadImage(objImg)
    }

   

    const onChengeInputCreate = (e, name) => {
        switch(name){
            case 'brand':{
                setCreatProd({ ...creatProd, brand: e.target.value})
            }
            case 'name': {
                setCreatProd({ ...creatProd, name: e.target.value})
            }
            case 'price':{
                setCreatProd({ ...creatProd, price: e.target.value})
            }
            case 'description':{
                setCreatProd({ ...creatProd, decription: e.target.value})
            }
            case 'characterisrics': {
                setCreatProd({ ...creatProd, characteristics: e.target.value})
            }
            default:{
                setCreatProd({ ...creatProd })
            }
        }
    }

    const onChengeInputObjImg = (e) => {
       setObjImg({...objImg,  title: e.target.value})
    }

    return (
        <div className="create_product-container">
            <form className="create_product-form" onSubmit={ handleSubmit } action="">
                <div className="form-product__img" style={{ display:'flex', flexDirection:'column' }}> 
                    <div>
                        <div>
                            <label htmlFor="photo" >Загрузите изображения</label>
                            <br/>
                            <input type="file" name="photo" multiple onChange={ handlePhotoInputChange }/>
                        </div>
                        <div>
                            <label htmlFor="title"> Название изображения </label>
                            <br/>
                            <input className="custom_input" type="text" name="title" value={ objImg.title } onChange={ onChengeInputObjImg }/>
                        </div>
                        <div onClick={()=> handlePhoto() }>
                            отправить только фото 
                        </div>
                    </div>
                    <br/>
                    <img style={{ width:'250px', height:'250px' }}  src={objImg.sendimage? URL.createObjectURL(objImg.sendimage) : null} alt={objImg.sendimage ? objImg.sendimage.name : null} />
                </div>
                <div className="form-product__img">
                    <p>Введи сведения о товаре:</p>
                    <div>
                        <label htmlFor="brand" > Бренд товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Brand" name="brand" id="brand"  value={ creatProd.brand } onChange={(e) => onChengeInputCreate(e, "brand")} />
                    </div>
                    <div>
                        <label htmlFor="name" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Name" name="name" id="name"  value={ creatProd.name } onChange={(e) => onChengeInputCreate(e, "name")} />
                    </div>   
                    <div>
                        <label htmlFor="price" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Price" name="price" id="price"  value={ creatProd.price } onChange={(e) => onChengeInputCreate(e, "prce")} />
                    </div>   
                    <div>
                        <label htmlFor="description" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Description" name="description" id="description"  value={ creatProd.description } onChange={(e) => onChengeInputCreate(e, "description")} />
                    </div>   
                    <div>
                        <label htmlFor="proisvod" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Производитель" name="proizvod" id="proizvod"  value={ creatProd.proizvod } onChange={(e) => onChengeInputCreate(e, "proizvod")} />
                    </div>   
                    <div>
                        <label htmlFor="dvigatel" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Двигатель" name="dvigatel" id="dvigatel"  value={ creatProd.dvigatel } onChange={(e) => onChengeInputCreate(e, "dvigatel")} />
                    </div>    
                    <div>
                        <label htmlFor="sila_dvigatel" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Мощность двигателя" name="sila_dvigatel" id="sila_dvigatel"  value={ creatProd.name } onChange={(e) => onChengeInputCreate(e, "name")} />
                    </div>   
                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
