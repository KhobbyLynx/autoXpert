import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'

const CreateAccount = ({ open, onClose, back, setOpen, email }) => {
  const handleGoBack = () => {
    setOpen((prevState) => ({
      ...prevState,
      registerAccount: !prevState.registerAccount,
      createAccount: !prevState.createAccount,
    }))
  }

  const handleSeller = () => {
    setOpen((prevState) => ({
      ...prevState,
      createAccount: !prevState.createAccount,
      joinAs: !prevState.joinAs,
    }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose} back={back} goBack={handleGoBack}>
        <div className='reg-user df fdc'>
          <h3>Create an account</h3>

          <input type='text' placeholder='First name' className='input' />
          <input type='text' placeholder='Last name' className='input' />
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              className='input'
              disabled
            />
          </div>
          <div>
            <input type='password' placeholder='Password' className='input' />
            <p>Enter a mininum of 8 characters</p>
          </div>
          <input
            type='password'
            placeholder='Confirm Password'
            className='input'
          />
          <button className='btn btn-mv dfacjc field-pad'>
            <span className='btn-text'>Create account</span>
          </button>
          <div className='form-text df fdc'>
            <p>
              By Signing up, you agree to our{' '}
              <Link className='form-link'>Privacy Statement</Link> &{' '}
              <Link className='form-link'>Terms of Service</Link>
            </p>
            <h6 onClick={handleSeller}>
              Are you a dealer? <Link className='form-link'>Sell a car.</Link>
            </h6>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CreateAccount
