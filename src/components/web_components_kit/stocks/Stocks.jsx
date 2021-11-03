import React, { useEffect } from 'react'
import Part from '../part/Part'
import img from '../../../images/moto_test.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getSales } from '../../../redux/reducers/product_reducer'

function Stocks() {
    let arrPart_test = [{id:1, title_part: 'name moto', price: '1000', url: img}, 
    {id:2, title_part: 'name moto2', price: '2000' ,url: img} ]

    const dispatch = useDispatch()
    const { sales } = useSelector( state => state.products)

    useEffect(()=>{
        dispatch(getSales())
    }, [])

    return (
    <div className="recentArrivals_container">
        <div className="recentArrivals_title">
            <p>
                Акции
            </p>
        </div>
        <div className="recentArrivals_parth">
            <Part arrPart={sales}/>
        </div>
    </div>
    )
}

export default Stocks