import React from 'react'
import '../Trending/Product_Card.css'
import ProductCard from '../Trending/product/ProductCard'
import SiderFuncgtions from '../Trending/Functions/siderFuncgtions'
function Bridal() {
  return (
    <div>
     <div className='Product_CSS'>
      <SiderFuncgtions/>
      <ProductCard Title={"Bridal Product Card"}/>
    </div>
    </div>
  )
}

export default Bridal
