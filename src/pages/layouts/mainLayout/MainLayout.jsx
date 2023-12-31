import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.scss'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { useState } from 'react'
import RegisterAccount from '../../../components/accountForm/RegisterAccount'
import CreateAccount from '../../../components/accountForm/CreateAccount'
import SignIn from '../../../components/accountForm/SignIn'
import ForgetPassword from '../../../components/accountForm/ForgetPassword'
import ForgetPasswordEmailConfirm from '../../../components/accountForm/ForgetPasswordEmailConfirm'
import JoinAs from '../../../components/accountForm/JoinAs'
import PrivateSellerForm from '../../../components/accountForm/PrivateSellerForm'
import MakePaymentForm from '../../../components/accountForm/MakePaymentForm'
import SpinnerLoader from '../../../components/loader/SpinnerLoader'
import Newsletter from '../../../components/newsletter/Newsletter'

const MainLayout = () => {
  const [online, setOnline] = useState(true)
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [pending, setPending] = useState(false)

  const [open, setOpen] = useState({
    registerAccount: false,
    createAccount: false,
    signIn: false,
    forgotPassword: false,
    confirmForgotPassword: false,
    joinAs: false,
    makePayment: false,
  })

  let backButton = true

  useEffect(() => {
    let timeId

    if (errorMsg) {
      timeId = setTimeout(() => {
        setErrorMsg('')
      }, 3000)
    }

    return () => {
      clearTimeout(timeId)
    }
  }, [errorMsg])

  useEffect(() => {
    const online = navigator.onLine
    if (online) {
      setOnline(true)
    } else {
      setOnline(false)
    }
  }, [navigator.onLine])

  return (
    <>
      {!online && alert('INTERNET DISCONNECTED')}
      {pending && <SpinnerLoader />}

      <div className='hide'>
        <PrivateSellerForm
          setPending={setPending}
          setErrorMsg={setErrorMsg}
          errorMsg={errorMsg}
        />
      </div>
      <MakePaymentForm
        open={open.makePayment}
        onClose={() => setOpen(false)}
        back={backButton}
        setOpen={setOpen}
        email={email}
        setPending={setPending}
        setErrorMsg={setErrorMsg}
        errorMsg={errorMsg}
      />
      <JoinAs
        open={open.joinAs}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
      />
      <ForgetPasswordEmailConfirm
        open={open.confirmForgotPassword}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
      />
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
        setPending={setPending}
        setErrorMsg={setErrorMsg}
        errorMsg={errorMsg}
      />
      <RegisterAccount
        open={open.registerAccount}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
        email={email}
        setEmail={setEmail}
        setPending={setPending}
        setErrorMsg={setErrorMsg}
        errorMsg={errorMsg}
      />
      <CreateAccount
        open={open.createAccount}
        onClose={() => setOpen(false)}
        back={backButton}
        setOpen={setOpen}
        email={email}
        setPending={setPending}
        setErrorMsg={setErrorMsg}
        errorMsg={errorMsg}
      />
      <Navbar
        setOpen={setOpen}
        setPending={setPending}
        setErrorMsg={setErrorMsg}
        errorMsg={errorMsg}
      />
      <div className='outlet'>
        <Outlet />
      </div>
      <div>
        <Newsletter />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
