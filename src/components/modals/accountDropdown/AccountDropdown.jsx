import React, { useEffect, useRef } from 'react'
import './AccountDropdown.scss'

const AccountDropdown = ({ setOpen, setDropdown }) => {
  const handleRegisterClick = () => {
    setOpen((prevState) => ({
      ...prevState,
      registerAccount: !prevState.registerAccount,
    }))
    setDropdown((prevState) => ({
      ...prevState,
      account: !prevState.account,
    }))
  }
  const handleLoginClick = () => {
    setOpen((prevState) => ({
      ...prevState,
      signIn: !prevState.signIn,
    }))
    setDropdown((prevState) => ({
      ...prevState,
      account: !prevState.account,
    }))
  }
  return (
    <div className='account-dropdown dropdown df fdc gap-10'>
      <button className='btn btn-mv btn-pad'>Make Payment</button>
      <button className='btn btn-bg btn-pad' onClick={handleLoginClick}>
        Login
      </button>
      <button className='btn btn-bg btn-pad' onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  )
}

export default AccountDropdown
