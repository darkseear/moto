import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getReadOne } from '../../../redux/reducers/product_reducer'
import Categories from '../../web_components_kit/categories/Categories'
import GoBackNext from '../../web_components_kit/goBack/GoBackNext'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function ReadOne() {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getReadOne(id))
    }, [id])

    const { read_one } = useSelector( state => state.products )

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
                            <div style={{ display:'flex' }}>
                                <div style={{ marginRight:'20px' }}>
                                    <div style={{ fontSize:'34px', fontWeight:'bold', marginBottom:'20px' }}>
                                        {
                                            read_one.name
                                        } 
                                    </div>
                                    <div style={{ fontSize:'34px', fontWeight:'bold', marginBottom:'20px' }}>
                                        {
                                            read_one.price
                                        } 
                                    </div>

                                    { 
                                        read_one.imgsArr && read_one.imgsArr[stateImg[0]] && read_one.imgsArr[stateImg[0]] !== undefined && read_one.imgsArr !== null?
                                        <div className="photo_block-read_one"  style={{ display:'flex', flexDirection:'column' }}>
                                            <div style={{ background:`url('${URL}/${read_one.imgsArr[stateImg[0]].url}')`, width:'250px', height:'250px', backgroundSize:'contain' }}>
                                            {
                                                read_one.imgsArr[stateImg[0]].id
                                            }
                                            </div>
                                            
                                            <div style={{ display:'flex', minWidth:'50px', maxWidth:'250px', justifyContent:'space-between' }}>
                                                {
                                                    read_one.imgsArr.map((item, index)=> <div key={item.id}>
                                                        {item.id}
                                                        <div onClick={ () => setImgState([index, item.id]) } style={{ background:`url('${URL}/${item.url}')`, backgroundSize:'contain', width:'50px', height:'50px', marginRight:'15px', cursor:'pointer' }}></div>
                                                    </div> )
                                                }
                                            </div>
                                            
                                        </div>
                                        :
                                        <></>
                                    }
                                </div>

                                <div >
                                    {/* brand */}
                                    <div>
                                        {
                                            read_one.brand && read_one.brand !== undefined && <div>
                                                {read_one.brand}
                                            </div>
                                        }
                                    </div>
                                    {/* characteristics */}
                                    <div>
                                    {
                                            read_one.characteristics && read_one.characteristics !== undefined && <div>
                                                {JSON.parse(read_one.characteristics).map((item, index)=><div key={index}>
                                                    { 
                                                        JSON.stringify(item)
                                                    }
                                                </div>)}
                                            </div>
                                        }
                                    </div>
                                    {/* description */}
                                    <div></div>
                                    {/* price */}
                                    <div></div>
                                    {/* last_receipts */}
                                    <div></div>
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
