import React from 'react'
import "./LeftImage.css"
function LeftImage({Image, description ,title, Id}) {
  return (
    <>
     <div className="main_Box_Left" key={Id}>
        <img src={Image} alt="not found..." />
        <div className="desc">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        </div> 
    </>
  )
}

export default LeftImage

