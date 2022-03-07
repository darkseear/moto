import React from 'react'
import ImageSelectedBlock from './ImageSelectedBlock'
import ImageSwipeBlock from './ImageSwipeBlock'

function ImageModal({
    setModalHidden,
    setIndexImage,
    indexImage,
    modalHidden,
    arrImage ,
    URL
}) {
  return (
    <div className={`modal_galery-container ${ !modalHidden ? "active_modal-image" : ""}`}>
        <div className='modal_galery-close'>
                <div onClick={() => { setModalHidden(false) }} className='modal_container-close_modal_container'>
                    x
                </div>
        </div>
        <div className='modal_galery-selected_image' >  
          <ImageSelectedBlock  width="100%" height="100%"  arrImage={arrImage} URL={URL} indexImage={indexImage}/>
        </div>
        <div className='modal_galery-swipe' >
          <ImageSwipeBlock arrImage={arrImage} URL={URL} setIndexImage={setIndexImage}/>
        </div>
    </div>
  )
}

export default ImageModal