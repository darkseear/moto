import React from 'react'

function ImageSelectedBlock({ URL, arrImage, indexImage, setModalHidden, width="350px", height='350px' }) {
  return (
    <div className="photo_block-small_image"
        style={{ 
          background: `url('${URL}/${arrImage[indexImage[0]].url}')`,
          width: width,
          height:height  
        }}
        onClick={()=>{
           setModalHidden && setModalHidden(true)
        }} >
    </div>
  )
}

export default ImageSelectedBlock