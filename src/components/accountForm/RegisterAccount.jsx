import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'
import { Link } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const RegisterAccount = ({ open, onClose, setOpen, email, setEmail }) => {
  const handleCreateAccount = (e) => {
    e.preventDefault()

    const checkUserExists = async (email) => {
      try {
        // Make an API call to check if the user exists
        const response = await newRequest.get(`/users/checkUser?email=${email}`)
        const data = await response.data

        if (data.invalidEmail) return alert('Invalid Email')
        if (data.userExists) {
          alert('User already exists')

          setOpen((prevState) => ({
            ...prevState,
            registerAccount: !prevState.registerAccount,
            signIn: !prevState.signIn,
          }))
        } else {
          // Proceed with the next steps of registration
          setOpen((prevState) => ({
            ...prevState,
            registerAccount: !prevState.registerAccount,
            createAccount: !prevState.createAccount,
          }))
        }
      } catch (error) {
        console.error('Error checking user existence:', error)
      }
    }

    checkUserExists(email)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateAccount(e)
    }
  }

  const handleSignIn = () => {
    setOpen((prevState) => ({
      ...prevState,
      registerAccount: !prevState.registerAccount,
      signIn: !prevState.signIn,
    }))
  }

  const handleSeller = () => {
    setOpen((prevState) => ({
      ...prevState,
      registerAccount: !prevState.registerAccount,
      joinAs: !prevState.joinAs,
    }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className='reg-user df fdc'>
          <h3>Create an account</h3>
          <button className='btn btn-tr dfacjc field-pad'>
            <FcGoogle className='icon' />
            <span>Sign up with Google</span>
          </button>
          <button className='btn btn-tr dfacjc field-pad'>
            <FaApple className='icon' />
            <span>Sign up with Apple</span>
          </button>
          <div className='dfac jsb line-container'>
            <hr className='line' />
            <span className='or'>Or</span>
            <hr className='line' />
          </div>
          <input
            type='email'
            placeholder='Email'
            className='input'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onKeyPress={handleKeyPress}
          />

          <button
            className='btn btn-mv dfacjc field-pad'
            onClick={handleCreateAccount}
          >
            <span className='btn-text'>Continue with Email</span>
          </button>
          <div className='form-text df fdc'>
            <p>
              By Signing up, you agree to our{' '}
              <Link className='form-link'>Privacy Statement</Link> &{' '}
              <Link className='form-link'>Terms of Service</Link>
            </p>
            <h6 onClick={handleSignIn}>
              Already have an account?{' '}
              <Link className='form-link'>Sign in.</Link>
            </h6>
            <h6 onClick={handleSeller}>
              Are you a dealer? <Link className='form-link'>Sell a car.</Link>
            </h6>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default RegisterAccount
