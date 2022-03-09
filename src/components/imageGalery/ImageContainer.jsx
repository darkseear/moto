import React from 'react'
import ImageSelectedBlock from './ImageSelectedBlock'
import ImageSwipeBlock from './ImageSwipeBlock'

function ImageContainer({
    arrImage,
    setModalHidden,
    setIndexImage,
    indexImage,
    URL
}) {

    return (

        <div className="photo_block-read_one">
            <ImageSelectedBlock setModalHidden={setModalHidden} arrImage={arrImage} URL={URL} indexImage={indexImage}/>
            <br />
            <ImageSwipeBlock  indexImage={indexImage} arrImage={arrImage} URL={URL} setIndexImage={setIndexImage}/>
        </div>
    )
}

export default ImageContainer