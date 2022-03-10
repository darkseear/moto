import React from 'react'
import { NavLink } from 'react-router-dom'
import plaseholder_image from '../../../images/plaseholder_image.png'

function Part({ arrPart }) {

    return (
        <>
          {
            arrPart && arrPart !== undefined ?
           arrPart.map((item, index)=><NavLink style={{ cursor:'pointer', color:'black' }} to={`/read_one/${item.id}`} key={item.id}>
             <div className="part_block" >

                <div className="block-part_photo" style={ item.imgsArr && item.imgsArr !== null && item.imgsArr.length !== 0 ? { background:`url('${item.imgsArr[0].url}')`}:{ background:`url('${plaseholder_image}')` }}></div>
               
                <div className="block-part_group-product">
                  <div className="block-part_info">
                    <p>
                      {item.name}
                    </p>
                  </div>

                  <div className="block_part_price">
                    <p>
                      { 
                         item.price && item.price !== "1" ?  item.price + " руб." : "Уточняйте цену"
                      }
                    </p>
                  </div>
                </div>

              </div>
              </NavLink>
           )
           : <div> Loading... </div>
          }  
        </>
    )
}

export default Part