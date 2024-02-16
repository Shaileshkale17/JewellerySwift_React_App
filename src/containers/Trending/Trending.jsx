import React, { useState } from 'react'
import ProductCard from './product/ProductCard'
import SiderFuncgtions from './Functions/siderFuncgtions'
import './Product_Card.css'
function Trending() {
  return (
    <div className='Product_CSS'>
      <SiderFuncgtions />
      <ProductCard Title={"Trending Product Card"}/>
    </div>
  )
}

export default Trending
