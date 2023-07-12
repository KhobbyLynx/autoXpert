import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.scss'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { useState } from 'react'
import RegisterAccount from '../../../components/accountForm/RegisterAccount'
import CreateAccount from '../../../components/accountForm/CreateAccount'
import SignIn from '../../../components/accountForm/SignIn'
import ForgetPassword from '../../../components/accountForm/ForgetPassword'

const MainLayout = () => {
  const [open, setOpen] = useState({
    registerAccount: false,
    createAccount: false,
    signIn: false,
    forgotPassword: false,
  })

  const [backButton, setBackButton] = useState(true)

  return (
    <>
      <ForgetPassword
        open={open.forgotPassword}
        onClose={() => setOpen(false)}
        back={backButton}
        setOpen={setOpen}
      />
      <SignIn
        open={open.signIn}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
      />
      <RegisterAccount
        open={open.registerAccount}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
      />
      <CreateAccount
        open={open.createAccount}
        onClose={() => setOpen(false)}
        back={backButton}
        setOpen={setOpen}
      />
      <Navbar open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
