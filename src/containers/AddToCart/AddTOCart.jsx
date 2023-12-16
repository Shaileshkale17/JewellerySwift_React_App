import React, { useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './ShoppingCart.css'
function AddTOcard() {
  const [Cart , setCart] = useState(false);
  return (
    <div>
      {Cart ? <div className='ShoppingCart'>Shopping Cart</div> : <div className='ShoppingCart'> <FiShoppingCart  onClick={()=> setCart(true)}/>Shopping Cart </div>}
    </div>
  )
}

export default AddTOcard
