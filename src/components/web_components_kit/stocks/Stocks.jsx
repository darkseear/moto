import React, { useEffect } from 'react'
import Part from '../part/Part'
import img from '../../../images/moto_test.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getSales } from '../../../redux/reducers/product_reducer'

function Stocks() {

    const dispatch = useDispatch()
    const { sales } = useSelector( state => state.products)

    useEffect(()=>{
        dispatch(getSales())
    }, [])

    return (
    <div className="recentArrivals_container" style={{ marginBottom: '20px'}}>
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