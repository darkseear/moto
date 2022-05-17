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
        "Все",
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

    const arrRama = [
        "Все",
        "алюминий",
        "сталь",
        "карбон",
        "хроммолибден"
    ]

    const arrDisk = [
        "Все",
        "дисковый",
        "дисковый механический",
        "дисковый гидравлический",
        "v-br-ободный",
        "u-brake",
        "ножной"
    ]

    const arrDiametr = [
        "Все",
        "12",
        "14",
        "16",
        "18",
        "20",
        "24",
        "26",
        "27.5",
        "28",
        "29"
    ]

    const [stateFilter, setStateFilter] = useState({filterBrand:"Все", filterRama:"Все", filterDisk:"Все", filterDiametr:"Все"})
    const [stateResultFilter, setStateResultFilter] = useState([])
    
    const { products_category_id } = useSelector(state => state.products)
    const { cart } = useSelector(state => state.carts)

    useEffect(()=>{
        setStateResultFilter(products_category_id)
    }, [products_category_id])

    useEffect(()=>{
        searchFilterCart()
    },[stateFilter])

    function searchFilterCart(){
        // console.log(stateFilter, products_category_id)
        let arrResult = []

        if( stateFilter.filterBrand === "Все" && 
            stateFilter.filterDiametr === "Все" &&
            stateFilter.filterDisk === "Все" && 
            stateFilter.filterRama === "Все" ){
            setStateResultFilter(products_category_id)
        }else{
             products_category_id && products_category_id.forEach((item)=>{

                let charItem={
                    diametr:"",
                    disk:"",
                    rama:""
                }

                item.char.forEach((char)=>{
                    if(char.name === "Диаметр колес") charItem.diametr = char.value
                    if(char.name === "Материал рамы") charItem.rama = char.value.toLocaleLowerCase()
                    if(char.name === "Тип тормозов") charItem.disk = char.value
                })

                // console.log(stateFilter.filterDiametr)
                // console.log(charItem.rama)
                // console.log(String(charItem.rama.indexOf(stateFilter.filterRama))!== "-1" )

                if(
                    (stateFilter.filterBrand === "Все" || item.brand === stateFilter.filterBrand) &&
                    (stateFilter.filterDiametr === "Все" || (String(charItem.diametr.indexOf(stateFilter.filterDiametr))!== "-1") ) &&
                    (stateFilter.filterDisk === "Все" || (stateFilter.filterDisk === "дисковый механический" ? charItem.disk === stateFilter.filterDisk || charItem.disk === "М Disc" :  stateFilter.filterDisk === "дисковый" ? charItem.disk === "Disk" || charItem.disk === stateFilter.filterDisk : charItem.disk === stateFilter.filterDisk)) && 
                    (stateFilter.filterRama === "Все" || (  (String(charItem.rama.indexOf(stateFilter.filterRama))!== "-1") || charItem.rama === stateFilter.filterRama))  
                ){
                    arrResult.push(item)
                }
            })
            // console.log(arrResult)
            setStateResultFilter(arrResult)
        }
    }

    function filter(){

    }

    useMemo(()=>{
        dispatch(products(id))
    }, [id])

    // useEffect(() => {
    //    specFunction()
    // }, [id])

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
                                   <div  className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Бренды
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                           {
                                               arrBrand.map((brandName, index)=> <div 
                                                    onClick={()=>{
                                                        setStateFilter({...stateFilter, filterBrand:brandName});
                                                        // searchFilterCart()
                                                    }}
                                                    key={index} 
                                                    className={brandName === stateFilter.filterBrand ? 'catalog-page_body-filter-item __active' :'catalog-page_body-filter-item'}
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
                                            
                                            {
                                               arrRama.map((ramaName, index)=> <div 
                                                    onClick={()=>{
                                                        setStateFilter({...stateFilter, filterRama:ramaName});
                                                        // searchFilterCart()
                                                    }}
                                                    key={index} 
                                                    className={ramaName === stateFilter.filterRama ? 'catalog-page_body-filter-item __active' :'catalog-page_body-filter-item'}
                                                >
                                                   {ramaName}
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    <div className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Тип тормозов
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                            {
                                               arrDisk.map((diskName, index)=> <div 
                                                    onClick={()=>{
                                                        setStateFilter({...stateFilter, filterDisk:diskName});
                                                        // searchFilterCart();
                                                    }}
                                                    key={index} 
                                                    className={diskName === stateFilter.filterDisk ? 'catalog-page_body-filter-item __active' :'catalog-page_body-filter-item'}
                                                >
                                                   {diskName}
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    <div className='catalog-page_filter-group'>
                                        <div className='catalog-page_name-filter'>
                                            Диаметр колес
                                        </div>
                                        <div className='catalog-page_body-filter'>
                                            {
                                               arrDiametr.map((diametrName, index)=> <div 
                                                    onClick={()=>{
                                                        setStateFilter({...stateFilter, filterDiametr:diametrName});
                                                        // searchFilterCart()
                                                    }}
                                                    key={index} 
                                                    className={diametrName === stateFilter.filterDiametr ? 'catalog-page_body-filter-item __active' :'catalog-page_body-filter-item'}
                                                >
                                                   {diametrName}
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            }

                            <div 
                                className='catalog-page_filter-button-search'
                                onClick={()=>searchFilterCart()}
                            >   
                                Поиск по фильтру
                            </div>

                            <div 
                                className='catalog-page_filter-button' 
                                onClick={()=>setHidden(!hidden)}
                            >
                                {
                                    hidden ? "Показать" : "Скрыть"
                                }
                            </div>


                        </div>
                        {stateResultFilter &&
                         stateResultFilter !== undefined &&
                         stateResultFilter!== null ?
                            <ProductPage products_category_id={stateResultFilter} cart={cart} />
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
