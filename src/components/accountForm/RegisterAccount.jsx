import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'
import { Link } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const RegisterAccount = ({
  open,
  onClose,
  setOpen,
  email,
  setEmail,
  pending,
  setPending,
  errorMsg,
  setErrorMsg,
}) => {
  const handleCreateAccount = (e) => {
    e.preventDefault()

    const checkUserExists = async (email) => {
      setPending(true)
      try {
        // Check if the user exists
        const response = await newRequest.get(`/users/checkUser?email=${email}`)
        const data = await response.data

        if (data) setPending(false)

        if (data.invalidEmail) return setErrorMsg('Invalid Email')
        if (data.userExists) {
          setErrorMsg('User already exists, Login')

          setTimeout(() => {
            setOpen((prevState) => ({
              ...prevState,
              registerAccount: !prevState.registerAccount,
              signIn: !prevState.signIn,
            }))
          }, 3000)
        } else {
          // Proceed with the next steps of registration
          setOpen((prevState) => ({
            ...prevState,
            registerAccount: !prevState.registerAccount,
            createAccount: !prevState.createAccount,
          }))
        }
      } catch (error) {
        setPending(false)
        setErrorMsg('Error checking user existence')
        console.error('Error checking user existence:', error)
        return
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
      <Modal open={open} onClose={onClose} pending={pending}>
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
          <form onSubmit={handleCreateAccount} className='df fdc gap-20'>
            <input
              type='email'
              placeholder='Email'
              className='input'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onKeyPress={handleKeyPress}
              required
            />
            <div className='gap-10 dfac fdc'>
              {errorMsg && <h4 className='error-msg'>{errorMsg}</h4>}
              <button className='btn btn-mv dfacjc field-pad'>
                <span className='btn-text'>Continue with Email</span>
              </button>
            </div>
          </form>
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
