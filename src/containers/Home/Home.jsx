import React from 'react'
import Slider from './Image_Slider/Slider'
import Offer from './Offer/Offer'
import Heading_text from './Heading/Heading_text'
import NewTypeJewellery from './NewTypeJewellery/NewTypeJewellery'

function Home() {
  return (
    <div>
      <Slider/>
      <Heading_text/>
      <Offer Title ="Top Offers"/>
      <NewTypeJewellery Title="Upcoming Jewellery"/>
      <Offer Title ="Women collections"/>
      <Offer Title ="Wedding Collection"/>
    </div>
  )
}

export default Home
