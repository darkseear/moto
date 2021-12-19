import React, { useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import plaseholder_image from '../../../images/plaseholder_image.png'
import CartButton_product from './CartButton_product'

function ProductPage({products_category_id}) {

    return (
        <>
        {
            products_category_id && products_category_id.map((item, index)=> <div key={item.id} className="product_page-container">
                <NavLink style={{ color:'black' }} to={`/read_one/${item.id}`} > 
                
                <div className="product_page-photo_container">
                    <div className="photo_container-product_page__photo" style={item.imgsArr && item.imgsArr[1] !== undefined ? { background:`url('http://xn--k1acecair0j.xn--p1ai/${item.imgsArr[1].url}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}: { background:`url('${plaseholder_image}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat' } }>

                    </div>
                </div>

                </NavLink>
                <div className="product_page-content_info">
                    <div className="content_info-product_page__container">
                        <div className="content_info-product_page_one">
                            <NavLink style={{ color:'black' }} to={`/read_one/${item.id}`} > 
                            <div>
                                { item.name }
                            </div>
                            </NavLink>
                            <NavLink style={{ color:'black' }} to={`/read_one/${item.id}`} > 
                            <div>
                                { item.price }
                            </div>
                            </NavLink>
                        </div>
                        
                        <CartButton_product/>
                        
                    </div>
                </div>
            </div> 
            ) 
        }
        </>
       
    )
}

export default ProductPage
