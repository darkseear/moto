import React from 'react'
import { NavLink } from 'react-router-dom'
import plaseholder_image from '../../../images/plaseholder_image.png'

function Part({ arrPart }) {
    return (
        <>
          {
            arrPart && arrPart !== undefined ?
           arrPart.map((item, index)=><NavLink style={{ cursor:'pointer', color:'black' }} to={`/read_one/${item.id}`} key={item.id}><div className="part_block" >
                <div className="block-part_photo" style={ item.url ? { background:`url('${item.url}')`}:{ background:`url('${plaseholder_image}')` }}></div>
                <div className="block-part_info">
                  <p>
                    {item.name}
                  </p>
                </div>
                <div className="block_part_price">
                  <p>
                    {item.price}Р
                  </p>
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