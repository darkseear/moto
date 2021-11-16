import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getReadOne } from '../../../redux/reducers/product_reducer'
import Categories from '../../web_components_kit/categories/Categories'
import GoBackNext from '../../web_components_kit/goBack/GoBackNext'
import PageTitle from '../../web_components_kit/page_title/PageTitle'
import Placeholder from '../../../images/plaseholder_image.png'
import { setCart } from '../../../redux/reducers/cart_reducer'

function ReadOne() {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getReadOne(id))
    }, [id])

    const { read_one } = useSelector( state => state.products )
    const { cart } = useSelector( state => state.carts )

    const onClickCart = () => {
        dispatch( setCart([...cart, { id: read_one.id, name: read_one.name, category_id: read_one.category_id , category_name: read_one.category_name}]) )

    }

    const URL = "http://xn--k1acecair0j.xn--p1ai/"

    const [stateImg, setImgState] = useState([0, 1])

    return (
        <>
            <div>
                <PageTitle  title={"Каталог"} />
                <div className="__container">
                    <div style={{ float:'left', marginRight:'25px'}}>
                            <Categories />
                    </div>
                    <div style={{ width:'calc(100% - 305px)', display:'flex' }}>
                        {
                            read_one && read_one !== undefined ? 
                            <div style={{ width:'100%' }}>
                                <div style={{ display:'flex', marginBottom:'30px' }}>
                                    <div style={{ marginRight:'20px', marginRight:'150px' }}>
                                        <div style={{ fontSize:'34px', fontWeight:'bold', marginBottom:'40px' }}>
                                            {
                                                read_one.name
                                            } 
                                        </div>

                                        { 
                                            read_one.imgsArr && read_one.imgsArr[stateImg[0]] && read_one.imgsArr[stateImg[0]] !== undefined && read_one.imgsArr !== null?
                                            <div className="photo_block-read_one"  style={{ display:'flex', flexDirection:'column', marginBottom:'30px'}}>
                                                <div style={{ background:`url('${URL}/${read_one.imgsArr[stateImg[0]].url}')`, width:'350px', height:'350px', backgroundSize:'contain' }}>
                                                {
                                                    read_one.imgsArr[stateImg[0]].id
                                                }
                                                </div>
                                                
                                                <div style={{ display:'flex', minWidth:'50px', maxWidth:'350px', justifyContent:'space-between' }}>
                                                    {
                                                        read_one.imgsArr.map((item, index)=> <div key={item.id}>
                                                            {item.id}
                                                            <div onClick={ () => setImgState([index, item.id]) } style={{ background:`url('${URL}/${item.url}')`, backgroundSize:'contain', width:'50px', height:'50px', marginRight:'15px', cursor:'pointer' }}></div>
                                                        </div> )
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <>
                                            <div style={{ width:'350px', height:'350px', background:`url('${Placeholder}')`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}} >

                                            </div>
                                            </>
                                        }
                                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <div className={"title_p__all"}> { read_one.price && <div> <p > Цена: </p> <div> {read_one.price} Р</div> </div>} </div>
                                            <div onClick={ onClickCart } style={{ width:'200px', height:'50px', lineHeight:'50px', fontSize:'26px', textTransform:'uppercase', cursor:'pointer', boxShadow:'#952714 3px 3px 10px', borderRadius:'25px', display:'flex', alignContent:'center', justifyContent:'center' }} > 
                                                В корзину 
                                            </div>
                                        </div>

                                    </div>

                                    <div >
                                        {/* characteristics */}
                                        <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
                                            <p style={{ fontWeight:'bold', fontSize:'34px', marginBottom:'20px' }}>Характеристики</p>

                                             {/* brand */}
                                            <div>
                                                {
                                                    read_one.brand && read_one.brand !== undefined && <div>
                                                        {read_one.brand}
                                                    </div>
                                                }
                                            </div>
                                            {
                                                Array.isArray(JSON.parse(read_one.characteristics)) && JSON.parse(read_one.characteristics).length > 0? <>
                                                    {JSON.parse(read_one.characteristics).map((item, index)=><div key={index}>
                
                                                        <div className={"title_p__all"}> { item.Производитель && <div> <p style={{ marginBottom:'10px' }}> Производитель: </p> <div> {item.Производитель} </div> </div>} </div>
                                                        <div className={"title_p__all"}> { item["Мощность двигателя"] && <div> <p style={{ marginBottom:'10px' }}> Мощность двигателя: </p> <div> {item["Мощность двигателя"] } </div> </div>} </div>
                                                        <div className={"title_p__all"}> { item["Объём двигателя"] && <div> <p style={{ marginBottom:'10px' }}> Объём двигателя: </p> <div> {item["Объём двигателя"] } </div> </div>} </div>
                                                        <div className={"title_p__all"}> { item.КПП && <div> <p style={{ marginBottom:'10px' }}>  КПП:   </p> <div> {item.КПП } </div> </div>} </div>

                                                    </div>)}
                                                </>
                                                : <>
                                                    <div className={"title_p__all"}> 
                                                        Нет информации
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        {/* last_receipts */}
                                        <div></div>
                                    </div> 
                                </div>
                                 {/* description */}
                                <div className="shadow_box-block">
                                    <div className={"title_p__all"}> { read_one.characteristics &&  <div> <p style={{ marginBottom:'10px' }}>  Описание   </p> <div> {read_one.description } </div> </div> } </div>
                                </div> 
                            </div>
                            : 
                            <div>
                                Loading...
                            </div>
                        }
                    </div>  
                </div>
                <GoBackNext/>
            </div>
        </>
    )
}

export default ReadOne
