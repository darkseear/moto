import React, { useEffect, useState } from 'react'
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

    const [hidden, setHidden] = useState(false)

    const arrBrand = [
        "MAKS",
        "Altair",
        "Forward",
        "Stinger",
        "RACER",
        "Crossbike",
        "Stailer",
        "Stels",
        "Stark",
        "SAFEWEY",
        "PULSE",
        "Foxx",
        "NOVATRACK",
        "MAVERICK",
        "Tech Team",
        "ZIGZAG",
        "NAMELESS",
        "KROSTEK"
    ]

    const [stateFilter, setStateFilter] = useState({filterBrand:"", filterRama:"", filterDisk:"", filterDiametr:""})
    
    function filter(){

    }

    useMemo(()=>{
        dispatch(products(id))
    }, [id])

    // useEffect(() => {
    //    specFunction()
    // }, [id])

    const { products_category_id } = useSelector(state => state.products)
    const { cart } = useSelector(state => state.carts)

    return (
        <>
            <div className="catalog_container" >
                <PageTitle title={"Каталог"} />
                <div className="catalog_container-content __container">
                    <div style={{ float: 'left', marginRight: '25px' }}>
                        <Categories />
                    </div>
                    <div className="catalog-page_container">
                        <div className='catalog-page_filter'>

                            <div className='catalog-page_filter-title'>
                                Фильтер
                            </div>

                            {
                               !hidden && 
                               <div className='catalog-page_filter-content'>
                                   <div style={{width:'50%'}} className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Бренды
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                           {
                                               arrBrand.map((brandName, index)=> <div 
                                                    onClick={()=>setStateFilter({...stateFilter, filterBrand:brandName})}
                                                    key={index} 
                                                    style={{background:brandName === stateFilter.filterBrand && 'grey'}}
                                                    className='catalog-page_body-filter-item'
                                                >
                                                   {brandName}
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    <div className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Материал рамы
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                            <div className='catalog-page_body-filter-item'>
                                                #1
                                            </div>
                                            <div className='catalog-page_body-filter-item'>
                                                #2
                                            </div>
                                            <div className='catalog-page_body-filter-item'>
                                                #3
                                            </div>
                                        </div>
                                    </div>
                                    <div className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Тип тормозов
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                            <div className='catalog-page_body-filter-item'>
                                                #1
                                            </div>
                                            <div className='catalog-page_body-filter-item'>
                                                #2
                                            </div>
                                            <div className='catalog-page_body-filter-item'>
                                                #3
                                            </div>
                                        </div>
                                    </div>
                                    <div className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Диаметр колес
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                            <div className='catalog-page_body-filter-item'>
                                                #1
                                            </div>
                                            <div className='catalog-page_body-filter-item'>
                                                #2
                                            </div>
                                            <div className='catalog-page_body-filter-item'>
                                                #3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className='catalog-page_filter-button' onClick={()=>setHidden(!hidden)}>
                                {
                                    hidden ? "Показать" : "Скрыть"
                                }
                            </div>

                        </div>
                        {products_category_id &&
                         products_category_id !== undefined &&
                         products_category_id !== null ?
                            <ProductPage products_category_id={products_category_id} cart={cart} />
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
