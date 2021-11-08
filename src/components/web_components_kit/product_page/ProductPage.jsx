import React, { useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import plaseholder_image from '../../../images/plaseholder_image.png'

function ProductPage({products_category_id}) {

    return (
        <>
        {
            products_category_id && products_category_id.map((item, index)=> <NavLink style={{ color:'black' }} to={`/read_one/${item.id}`} key={item.id}> <div  className="product_page-container">
                <div className="product_page-photo_container">
                    <div className="photo_container-product_page__photo" style={item.imgsArr && item.imgsArr[1] !== undefined ? { background:`url('http://xn--k1acecair0j.xn--p1ai/${item.imgsArr[1].url}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}: { background:`url('${plaseholder_image}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat' } }>

                    </div>
                </div>
                <div className="product_page-content_info">
                    <div className="content_info-product_page__container">
                        <div>
                            { item.name }
                        </div>

                        <div>
                            { item.price }
                        </div>

                        <div>
                            In cart +
                        </div>
                    </div>
                </div>
            </div> 
            </NavLink>
            ) 
        }
        </>
       
    )
}

export default ProductPage
