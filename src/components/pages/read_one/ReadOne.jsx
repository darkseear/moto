import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getReadOne } from '../../../redux/reducers/product_reducer'
import Categories from '../../web_components_kit/categories/Categories'

function ReadOne() {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getReadOne(id))
    }, [id])

    const { read_one } = useSelector( state => state.products )

    return (
        <div>
             <div style={{ float:'left', marginRight:'25px'}}>
                    <Categories />
            </div>
            <div>
                {
                    read_one && read_one !== undefined  && "id:" + read_one.id + "____" + read_one.name
                }  
            </div>
          
        </div>
    )
}

export default ReadOne
