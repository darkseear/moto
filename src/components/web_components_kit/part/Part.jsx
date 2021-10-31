import React from 'react'

function Part({ arrPart }) {
    return (
        <>
          {
           arrPart.map((item, index)=><div className="part_block" key={item.id}>
                <div className="block-part_photo" style={{ background:`url('${item.url}')`}}></div>
                <div className="block-part_info">
                  <p>
                    {item.title_part}
                  </p>
                </div>
                <div className="block_part_price">
                  <p>
                    {item.price}Р
                  </p>
                </div>
              </div>
           )
          }  
        </>
    )
}

export default Part
