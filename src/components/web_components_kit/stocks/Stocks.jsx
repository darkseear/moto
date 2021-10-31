import React from 'react'
import Part from '../part/Part'
import img from '../../../images/moto_test.png'

function Stocks() {
    let arrPart_test = [{id:1, title_part: 'name moto', price: '1000', url: img}, 
    {id:2, title_part: 'name moto2', price: '2000' ,url: img} ]

    return (
    <div className="recentArrivals_container">
        <div className="recentArrivals_title">
            <p>
                Акции
            </p>
        </div>
        <div className="recentArrivals_parth">
            <Part arrPart={arrPart_test}/>
        </div>
    </div>
    )
}

export default Stocks
