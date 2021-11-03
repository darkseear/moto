import React from 'react'
import plaseholder_image from '../../../images/plaseholder_image.png'

function Part({ arrPart }) {
    return (
        <>
          {
            arrPart && arrPart !== undefined ?
           arrPart.map((item, index)=><div className="part_block" key={item.id}>
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
           )
           : <div> Loading... </div>
          }  
        </>
    )
}

export default Part
