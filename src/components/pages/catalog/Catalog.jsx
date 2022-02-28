import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { products } from '../../../redux/reducers/product_reducer'
import Categories from '../../web_components_kit/categories/Categories'
import GoBackNext from '../../web_components_kit/goBack/GoBackNext'
import PageTitle from '../../web_components_kit/page_title/PageTitle'
import ProductPage from '../../web_components_kit/product_page/ProductPage'

function Catalog() {

    const dispatch = useDispatch()
    const { id } = useParams()

    useMemo(()=>{
        dispatch(products(id))
    }, [id])

    // useEffect(() => {
    //    specFunction()
    // }, [id])

    const { products_category_id } = useSelector(state => state.products)

    return (
        <>
            <div className="catalog_container" >
                <PageTitle title={"Каталог"} />
                <div className="catalog_container-content __container">
                    <div style={{ float: 'left', marginRight: '25px' }}>
                        <Categories />
                    </div>
                    <div className="catalog-page_container">
                        {products_category_id &&
                         products_category_id !== undefined &&
                         products_category_id !== null ?
                            <ProductPage products_category_id={products_category_id} />
                            :
                            <div>Loading...</div>
                        }
                    </div>
                </div>
            </div>
            <GoBackNext />
        </>
    )
}

export default Catalog
