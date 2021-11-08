import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getReadOne } from '../../../redux/reducers/product_reducer'

function ReadOne() {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getReadOne(id))
    }, [id])

    const { read_one } = useSelector( state => state.products )

    return (
        <div>
            {
                read_one && read_one !== undefined  && "id:" + read_one.id + "____" + read_one.name
            }
        </div>
    )
}

export default ReadOne
