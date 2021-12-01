import React, { useState } from 'react'

function CreateProduct() {

    const [photo, setPhoto] = useState()
    const [creatProd, setCreatProd] = useState({ brand:'', name:'', price:'', decription:'', characteristics:'', category_id:'' })

    const handlePhotoInputChange = (e) => {
        setPhoto(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const photoData = new FormData();
        photoData.append('file', photo);

        console.warn(photo);


    }

    return (
        <div className="create_product-container">
            <form className="create_product-form" onSubmit={ handleSubmit } action="">
                <div className="form-product__img"> 
                    <label htmlFor="photo" >Загрузите фото</label>
                    <input type="file" name="photo" onChange={ handlePhotoInputChange }/>
                </div>
                <div className="form-product__img">
                    <p>Введи сведения о товаре:</p>
                    <input/>

                </div>
            </form>
        </div>
    )
}

export default CreateProduct
