import React from 'react'
import {Outlet} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <div>
        <Header/>
        <Footer />
      <Outlet />
    </div>
  )
}

export default Layout
