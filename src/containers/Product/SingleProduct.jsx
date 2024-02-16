import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

function SingleProduct() {
const {pathname} = useLocation()


  return (
    <div>
      SingleProduct {pathname}
    </div>
  )
}

export default SingleProduct
