import React, { useState } from 'react'
import { FaUser  } from 'react-icons/fa';
import './UserLogin.css'


function UserLogin( userStyle) {
  const [Cart , setCart] = useState(false);

  return (
    <div>
     <div>
      {Cart ? <div className='user'>User Page to working now </div> : <div className='user'> <FaUser  onClick={()=> setCart(true)}/> User Login</div>}
    </div>
    </div>
  )
}

export default UserLogin
