import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdLocalPhone } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import './NavberTopLift.css'
function NavberTopLift() {
  return (
    <div className="liftbox">
        <div className="Navber_Lift_box">
        <CiSearch className="icon"/> <p className='text-search' >Search Jewellery</p>
        </div>
        <div className="Navber_Lift_box">
        <MdLocalPhone /> <p className='text-search' >(925)-142536</p>
        </div>
        <div className="Navber_Lift_box">
        <CiLocationOn /> <p className='text-search' >Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
  )
}

export default NavberTopLift
