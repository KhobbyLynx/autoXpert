import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.scss'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { useState } from 'react'
import RegisterAccount from '../../../components/accountForm/RegisterAccount'

const MainLayout = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <RegisterAccount open={open} onClose={() => setOpen(false)} />
      <Navbar open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
