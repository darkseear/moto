import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { category } from '../../../redux/reducers/category_reducer'


function CategoriesTop() {

    const dispatch = useDispatch()
    const { categoryArr } = useSelector(state => state.categorys)

    useEffect(() => {
        dispatch(category())
    }, [])

    return (
        <div className="categoryTop_container">
            {
                categoryArr !== null && categoryArr !== undefined  && typeof categoryArr !== 'string' && !(categoryArr instanceof String)? categoryArr.map((item) => <NavLink className="categoryTop_element" style={{ color: 'black' }} activeClassName="category_navigation_active" to={`/catalog/${item.id}`} key={item.id}>
                   
                        {item.name}
                    
                </NavLink>)
                    :
                    <div>Loading ... </div>

            }
        </div>
    )
}

export default CategoriesTop
