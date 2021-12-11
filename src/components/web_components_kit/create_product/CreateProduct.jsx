import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../../../redux/reducers/category_reducer';
import { createProduct , uoloadImage} from '../../../redux/reducers/product_reducer';

function CreateProduct() {

    // const [photo, setPhoto] = useState()
    const [creatProd, setCreatProd] = useState({ brand:'', name:'', price:'', description:'', characteristics:[ {Производитель: ""}, {Двигатель: ""}, {['Мощность двигателя']:""}, {['Объём двигателя'] : ''}, {КПП: ''} ], category_id:''})

    const [objImg, setObjImg] = useState({ title:'', sendimage:null});

    const dispatch = useDispatch()

    const { categoryArr } = useSelector(state => state.categorys)

    useEffect(()=>{
        dispatch(category())
    }, [])

    const handlePhotoInputChange = (e) => {
        setObjImg({ ...objImg , sendimage: e.currentTarget.files[0] })
    }

    // React.useEffect(()=>{
    //     console.log(photo);
    //     setObjImg({ ...objImg, sendimage: photo })
    // }, [photo])

    const handleSubmit = (e) => {
        e.preventDefault()

        createProduct(objImg, {...creatProd, characteristics: JSON.stringify(creatProd.characteristics)});
    }

    const handlePhoto = () => {
        uoloadImage(objImg)
    }

    const onChengeInputObjImg = (e) => {
        setObjImg({...objImg,  title: e.target.value})
     }

    const onChengeInputCreate = (e, name) => {
        console.log(1)
        switch(name){
            case "brand":{
                console.log(2)
                return setCreatProd({ ...creatProd, brand: e.target.value})
            }
            case 'name': {
                console.log(3)
                return setCreatProd({ ...creatProd, name: e.target.value})
            }
            case 'price':{
                return setCreatProd({ ...creatProd, price: e.target.value})
            }
            case 'description':{
                return setCreatProd({ ...creatProd, description: e.target.value})
            }
            case 'Производитель': {
                let arrTest = creatProd.characteristics;
                arrTest[0].Производитель = e.target.value ;
                return setCreatProd({ ...creatProd, characteristics: arrTest })
            }
            case 'Двигатель': {
                let arrTest = creatProd.characteristics;
                arrTest[1].Двигатель = e.target.value ;
                return setCreatProd({ ...creatProd, characteristics: arrTest })
            }
            case 'Мощность двигателя': {
                let arrTest = creatProd.characteristics;
                arrTest[2]['Мощность двигателя'] = e.target.value ;
                return setCreatProd({ ...creatProd, characteristics: arrTest })
            }
            case 'Объём двигателя': {
                let arrTest = creatProd.characteristics;
                arrTest[3]['Объём двигателя'] = e.target.value ;
                return setCreatProd({ ...creatProd, characteristics: arrTest })
            }
            case 'КПП': {
                let arrTest = creatProd.characteristics;
                arrTest[4].КПП = e.target.value ;
                return setCreatProd({ ...creatProd, characteristics: arrTest})
            }
            case 'category_id': {
                return setCreatProd({ ...creatProd, category_id: e.target.value})
            }

            default:{
                console.log(3)
                setCreatProd({ ...creatProd })
            }
        }
    }

    return (
        <div className="create_product-container">
            <form className="create_product-form" onSubmit={ handleSubmit } action="">
                <div className="form-product__img" style={{ display:'flex', flexDirection:'column' }}> 
                    <div>
                        <div>
                            <label htmlFor="photo" >Загрузите изображения</label>
                            <br/>
                            <input type="file" name="photo" multiple onChange={ handlePhotoInputChange } required/>
                        </div>
                        <div>
                            <label htmlFor="title"> Название изображения </label>
                            <br/>
                            <input placeholder='Именование товара' className="custom_input" type="text" name="title" value={ objImg.title } onChange={ onChengeInputObjImg } required/>
                        </div>
                        {/* <div onClick={()=> handlePhoto() }>
                            отправить только фото 
                        </div> */}
                    </div>
                    <br/>
                    <img style={{ width:'250px', height:'250px' }}  src={objImg.sendimage? URL.createObjectURL(objImg.sendimage) : null} alt={objImg.sendimage ? objImg.sendimage.name : null} />
                </div>
                <br />
                <div className="form-product__img">
                    <p>Введи сведения о товаре:</p>
                    <br />
                    <div>
                        <label htmlFor="brand" > Бренд товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Brand" name="brand"  type="text"  value={ creatProd.brand } onChange={(e) => onChengeInputCreate(e, "brand")} required/>
                    </div>
                    <div>
                        <label htmlFor="name" > Название товара: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Name" name="name" id="name"  value={ creatProd.name } onChange={(e) => onChengeInputCreate(e, "name")} required/>
                    </div>   
                    <div>
                        <label htmlFor="price" > Цена: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Price" name="price" id="price"  value={ creatProd.price } onChange={(e) => onChengeInputCreate(e, "price")} required/>
                    </div>   
                    <div>
                        <label htmlFor="description" > Описание: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Description" name="description" id="description"  value={ creatProd.description } onChange={(e) => onChengeInputCreate(e, "description")} required/>
                    </div>   
                    <br/>

                    <div>
                        Характеристики :
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="proisvod" > Производитель: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Производитель" name="proizvod" id="proizvod"  value={ creatProd.characteristics.Производитель } onChange={(e) => onChengeInputCreate(e, "Производитель")} required/>
                    </div>   
                    <div>
                        <label htmlFor="dvigatel" > Двигатель: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Двигатель" name="dvigatel" id="dvigatel"  value={ creatProd.characteristics.Двигатель } onChange={(e) => onChengeInputCreate(e, "Двигатель")} required/>
                    </div>    
                    <div>
                        <label htmlFor="sila_dvigatel" > Мощность двигателя: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Мощность двигателя" name="sila_dvigatel" id="sila_dvigatel"  value={ creatProd.characteristics['Мощность двигателя'] } onChange={(e) => onChengeInputCreate(e, 'Мощность двигателя')} required/>
                    </div>   
                    <div>
                        <label htmlFor="Объём двигателя" > Объём двигателя: </label> 
                        <br/>
                        <input className="custom_input" placeholder="Объём двигателя" name="v_dvigatel" id="v_dvigatel"  value={ creatProd.characteristics['Объём двигателя']  } onChange={(e) => onChengeInputCreate(e, 'Объём двигателя' )} required/>
                    </div>   
                    <div>
                        <label htmlFor="КПП" > КПП: </label> 
                        <br/>
                        <input className="custom_input" placeholder="КПП" name="" id=""  value={ creatProd.characteristics.КПП  } onChange={(e) => onChengeInputCreate(e, 'КПП' )} />
                    </div>    
                    <div>
                        <label htmlFor="Категория товара" > Категория товара: </label> 
                        <br/>
                        {
                           categoryArr && categoryArr!== undefined ?  <select value={ creatProd.category_id } style={{ width:'310px', height:'40px', fontSize:'20px' }} onChange={(e) => onChengeInputCreate(e, 'category_id' )} name="select_sort_product" id="select_sort_product" required>
                            <option value="" ></option>
                            {
                                 categoryArr.map((item)=><option value={ item.id } key={item.id}>
                                {item.name}
                                </option>)
                                
                            }
                            
                            </select>
                            : <div> Loading... </div>

                        }
                    </div>  
                </div>
                <br />
                <div>
                    <button style={ { width:'200px', height:'50px' } } type="submit">Загрузить товар</button>
                </div>
                <br />
            </form>
        </div>
    )
}

export default CreateProduct
