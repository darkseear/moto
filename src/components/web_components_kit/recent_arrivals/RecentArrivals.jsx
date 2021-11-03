import React, { useEffect } from 'react'
import Part from '../part/Part'
import img from '../../../images/moto_test.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getLast_receipts } from '../../../redux/reducers/product_reducer'

function RecentArrivals() {

    let arrPart_test = [{id:1, title_part: 'name moto', price: '1000', url: img}, 
                        {id:2, title_part: 'name moto2', price: '2000' ,url: img} ]

    const dispatch  = useDispatch()
    const { last_receipts } = useSelector( state => state.products )

    useEffect(()=>{
        dispatch(getLast_receipts())
    }, [])

    return (
        <div className="recentArrivals_container">
            <div className="recentArrivals_title">
                <p>
                    Последние поступления 
                </p>
            </div>
            <div className="recentArrivals_parth">
                <Part arrPart={ last_receipts }/>
            </div>
        </div>
    )
}

export default RecentArrivals
