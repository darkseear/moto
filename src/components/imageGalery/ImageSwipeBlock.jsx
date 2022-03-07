import React, { useRef } from 'react'


function ImageSwipeBlock({ setIndexImage, arrImage, URL, maxWidth = "325px", minWidth = "325px" }) {

  const refScroll = useRef(null)


  let widthSdvig = 65;

  let lengthArrImage = arrImage.length

  function onLeftScroll() {
    // console.log(refScroll)
    let scrollWidth = refScroll.current.scrollWidth
    let scrollLeft = refScroll.current.scrollLeft
    refScroll.current.scrollLeft = scrollLeft - widthSdvig;
  }

  function onRightScroll() {
    // console.log(refScroll)
    let scrollWidth = refScroll.current.scrollWidth
    let scrollLeft = refScroll.current.scrollLeft
    refScroll.current.scrollLeft = scrollLeft + widthSdvig;
  }

  return (
    <div style={{ display: 'flex' }}>
      {lengthArrImage > 5 && <div onClick={onLeftScroll} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#B3B3B7" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5303 5.96967C11.2374 5.67678 10.7626 5.67678 10.4697 5.96967L6.43934 10L10.4697 14.0303C10.7626 14.3232 11.2374 14.3232 11.5303 14.0303C11.8232 13.7374 11.8232 13.2626 11.5303 12.9697L8.56066 10L11.5303 7.03033C11.8232 6.73744 11.8232 6.26256 11.5303 5.96967Z"></path>
        </svg>
      </div>}
      <div ref={refScroll} style={{ display: 'flex', minWidth: minWidth, maxWidth: maxWidth, justifyContent: 'start', overflow: 'hidden' }}>
        {
          arrImage.map((item, index) => <div className='photo_block-thumb_image' key={item.id}>
            <div onClick={() => setIndexImage([index, item.id])}
              style={{ background: `url('${URL}/${item.url}')`, backgroundSize: 'cover', backgroundPosition: "center", backgroundRepeat: 'no-repeat', width: '50px', height: '50px', cursor: 'pointer' }}>
            </div>
          </div>)
        }
      </div>
      {lengthArrImage > 5 && <div onClick={onRightScroll} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#B3B3B7" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 5.96967C8.76256 5.67678 9.23744 5.67678 9.53033 5.96967L13.5607 10L9.53033 14.0303C9.23744 14.3232 8.76256 14.3232 8.46967 14.0303C8.17678 13.7374 8.17678 13.2626 8.46967 12.9697L11.4393 10L8.46967 7.03033C8.17678 6.73744 8.17678 6.26256 8.46967 5.96967Z"></path>
        </svg>
      </div>}
    </div>
  )
}

export default ImageSwipeBlock