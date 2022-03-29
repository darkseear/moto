import React, { useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import plaseholder_image from '../../../images/plaseholder_image.png'
import { setCart } from '../../../redux/reducers/cart_reducer'
import CartButton_product from './CartButton_product'

function ProductPage({products_category_id, cart}) {

    return (
        <>
        {
            products_category_id && products_category_id.map((item, index)=> <div key={item.id} className="product_page-container">
                <NavLink style={{ color:'black' }} to={`/read_one/${item.id}`} > 
                
                <div className="product_page-photo_container">
                    <div className="photo_container-product_page__photo" style={item.imgsArr && item.imgsArr[0] !== undefined ? { background:`url('http://xn--k1acecair0j.xn--p1ai/${item.imgsArr[0].url}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}: { background:`url('${plaseholder_image}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat' } }>

                    </div>
                </div>
                </NavLink>
                <div className="product_page-content_info">
                    <div className="content_info-product_page__container">
                        <div className="content_info-product_page_one">
                            <NavLink style={{ color:'black', height: '65%', display: 'block' }} to={`/read_one/${item.id}`} > 
                            <div className='block_info-obrez'>
                                { item.name }
                            </div>
                            </NavLink>
                            <NavLink style={{ color:'black', height: '35%', display: 'block' }} to={`/read_one/${item.id}`} > 
                            <div className='color_price-container'>
                                { 
                                   item.price && item.price !== "1" ?  item.price + " руб." : "Уточняйте цену"
                                }
                            </div>
                            </NavLink>
                        </div>
                        
                        <CartButton_product read_one={item}
                                            cart={cart}
                                            setCart={setCart}/>
                        
                    </div>
                </div>
            </div> 
            ) 
        }
        </>
       
    )
}

export default ProductPage
