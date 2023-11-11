import React from 'react'
import "./Youtube.css"

function Youtube() {
  return (
    <div className='youtube'>
        <h2>Bizning videolar</h2>
        <div className="youtube__wrapper">
          <div className="youtube__item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dwobrC_YXIA?si=DZ117qwyVzLkmfWR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="youtube__item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sgiKqAqDKEs?si=FDyOG8125rPVBm3U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="youtube__item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/f6qzyTxPVNE?si=QQ2xWe7es5aOt9Ze" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="youtube__item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dIgtPyg65Ms?si=A8RQzBr_1UhD3lhD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
    </div>
  )
}

export default Youtube