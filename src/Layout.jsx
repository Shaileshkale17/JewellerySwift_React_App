import React from 'react'
import Header from './containers/Navber/Header'
import Footer from './containers/footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
