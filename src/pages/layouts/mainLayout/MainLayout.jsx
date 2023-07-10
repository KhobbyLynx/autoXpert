import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.scss'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
