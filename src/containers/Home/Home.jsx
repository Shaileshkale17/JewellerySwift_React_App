import React from 'react'
import Slider from './Image_Slider/Slider'
import Offer from './Offer/Offer'
import Heading_text from './Heading/Heading_text'
import NewTypeJewellery from './NewTypeJewellery/NewTypeJewellery'
import WeddingCollections from './Offer/weddingCollections'
import WomenCollections from './Offer/womenCollections'

function Home() {
  return (
    <div>
      <Slider/>
      <Heading_text/>
      <Offer Title ="Top Offers"/>
      <NewTypeJewellery Title="Upcoming Jewellery"/>
      <WomenCollections Title ="Wedding Collection"/>
      <WeddingCollections Title ="Women collections"/>
    </div>
  )
}

export default Home
