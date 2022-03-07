import React, { useState } from 'react'
import ImageModal from './ImageModal'

import data from '../../data';
import ImageContainer from './ImageContainer';

function ImageGalery({arrImage}) {
    
    const [indexImage, setIndexImage] = useState([0,1])
    const [modalHidden, setModalHidden] = useState(false)

    const URL = "http://xn--k1acecair0j.xn--p1ai/"

    return (
        <> 
            <ImageModal 
                setModalHidden={setModalHidden}
                setIndexImage={setIndexImage}
                indexImage={indexImage}
                modalHidden={modalHidden}
                arrImage={arrImage}
                URL={URL}
            />
            <ImageContainer  
                setModalHidden={setModalHidden}
                setIndexImage={setIndexImage}
                indexImage={indexImage}
                arrImage={arrImage}
                URL={URL}
            />
        </>
    )
}

export default ImageGalery