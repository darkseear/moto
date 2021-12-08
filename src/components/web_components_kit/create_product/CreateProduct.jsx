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

    const onChengeInputCreate = (e) => {
        setCreatProd({ ...creatProd, brand: e.target.value})
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
                            <input type="file" name="photo" onChange={ handlePhotoInputChange }/>
                        </div>
                        <div>
                            <label htmlFor="title"> Название изображения </label>
                            <input type="text" name="title" value={ objImg.title } onChange={ onChengeInputObjImg }/>
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
                    <input placeholder="Brand" name="brand" id="brand"  value={ creatProd.brand } onChange={onChengeInputCreate} />

                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
