import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'

const SignIn = ({ open, onClose, setOpen }) => {
  const handleForgotPassword = () => {
    setOpen((prevState) => ({
      ...prevState,
      signIn: !prevState.signIn,
      forgotPassword: !prevState.forgotPassword,
    }))
  }

  const handleRegisterAccount = () => {
    setOpen((prevState) => ({
      ...prevState,
      signIn: !prevState.signIn,
      registerAccount: !prevState.registerAccount,
    }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className='reg-user df fdc'>
          <h3>Sign In</h3>
          <button className='btn btn-tr dfacjc field-pad'>
            <FcGoogle className='icon' />
            <span>Sign in with Google</span>
          </button>
          <button className='btn btn-tr dfacjc field-pad'>
            <FaApple className='icon' />
            <span>Sign in with Apple</span>
          </button>
          <div className='dfac jsb line-container'>
            <hr className='line' />
            <span className='or'>Or</span>
            <hr className='line' />
          </div>
          <input type='email' placeholder='Email' className='input' />
          <input type='password' placeholder='Password' className='input' />
          <button className='btn btn-mv dfacjc field-pad'>
            <span className='btn-text'>Sign In</span>
          </button>
          <div className='form-text df fdc'>
            <p>
              By Signing up, you agree to our{' '}
              <Link className='form-link'>Privacy Statement</Link> &{' '}
              <Link className='form-link'>Terms of Service</Link>
            </p>
            <h6 onClick={handleForgotPassword}>
              <Link className='form-link'>Forgot Passwrd?</Link>
            </h6>
            <h6 onClick={handleRegisterAccount}>
              Don't have an account?{' '}
              <Link className='form-link'>Create an account.</Link>
            </h6>
            <h6>
              Are you a dealer? <Link className='form-link'>Sell a car.</Link>
            </h6>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SignIn
