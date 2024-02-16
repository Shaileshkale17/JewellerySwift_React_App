import React from 'react'
import "./RigthImage.css"
function RigthImage({Image, description ,title, Id}) {
  return (
    <>
     <div className="main_Box_Rigth" key={Id}>
        <img src={Image} alt={title} />
        <div className="desc">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        </div> 
    </>
  )
}

export default RigthImage
