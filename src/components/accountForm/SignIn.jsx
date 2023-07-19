import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const SignIn = ({
  open,
  onClose,
  setOpen,
  setPending,
  errorMsg,
  setErrorMsg,
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    if (formData.password.length < 8) {
      setErrorMsg('Incorrect password')
      return
    }

    setPending(true)

    setTimeout(() => {
      let loginSuccessful = true
      const userFromCart = JSON.parse(localStorage.getItem('fromCart'))

      const request = async () => {
        try {
          const res = await newRequest.post('/users/login', {
            email: formData.email,
            password: formData.password,
          })
          localStorage.setItem('currentUser', JSON.stringify(res.data))
        } catch (error) {
          setPending(false)
          loginSuccessful = false

          const statusCode = error.response.status
          if (statusCode === 400) {
            setErrorMsg(error.response.data.message)
          } else if (statusCode === 5000) {
            setErrorMsg(error.response.statusText)
          } else {
            setErrorMsg('something went wrong')
          }

          return
        } finally {
          if (loginSuccessful) {
            if (userFromCart) {
              setOpen(false)
              navigate('/cart/checkout')
              localStorage.removeItem('fromCart')
            } else {
              setOpen(false)
              navigate('/')
            }
            setTimeout(() => {
              setPending(false)
            }, 3000)
          }
        }
      }
      return request()
    }, 2000)
  }

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
  const handleSeller = () => {
    setOpen((prevState) => ({
      ...prevState,
      signIn: !prevState.signIn,
      joinAs: !prevState.joinAs,
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
          <form onSubmit={handleSignUp} className='df fdc gap-20'>
            <input
              type='email'
              placeholder='Email'
              className='input'
              value={formData.email}
              onChange={handleChange}
              name='email'
              required
            />
            <input
              type='password'
              placeholder='Password'
              className='input'
              onChange={handleChange}
              value={formData.password}
              name='password'
              required
            />
            <div>
              {errorMsg && <span className='error-msg'>{errorMsg}</span>}
              <button className='btn btn-mv dfacjc field-pad'>
                <span className='btn-text'>Sign In</span>
              </button>
            </div>
          </form>
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
            <h6 onClick={handleSeller}>
              Are you a dealer? <Link className='form-link'>Sell a car.</Link>
            </h6>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SignIn
