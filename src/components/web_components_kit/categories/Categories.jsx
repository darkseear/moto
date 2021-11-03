import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { category } from '../../../redux/reducers/category_reducer'

function Categories() {

    const dispatch = useDispatch()
    const { categoryArr } = useSelector(state => state.categorys)

    useEffect(()=>{
        dispatch(category())
    }, [])
    
    return (
        <div className="categories_container" >
            {
                categoryArr && categoryArr!== undefined ?  categoryArr.map((item)=> <a key={item.id}>
                   <div className="container-categories_category" >
                    {item.name}
                </div> </a>) : <div> Loading... </div> 
            }
        </div>
    )
}

export default Categories
