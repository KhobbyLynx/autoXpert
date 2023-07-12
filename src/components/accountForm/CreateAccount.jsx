import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'

const CreateAccount = ({ open, onClose, back, setOpen }) => {
  const handleGoBack = () => {
    setOpen((prevState) => ({
      ...prevState,
      registerAccount: !prevState.registerAccount,
      createAccount: !prevState.createAccount,
    }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose} back={back} goBack={handleGoBack}>
        <div className='reg-user df fdc'>
          <h3>Create an account</h3>

          <input type='email' placeholder='First name' className='input' />
          <input type='email' placeholder='Last name' className='input' />
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='xyz@gmail.com'
              className='input'
              disabled
            />
          </div>
          <div>
            <input type='email' placeholder='Password' className='input' />
            <p>Enter a mininum of 8 characters</p>
          </div>
          <input
            type='email'
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
            <h6>
              Are you a dealer? <Link className='form-link'>Sell a car.</Link>
            </h6>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CreateAccount
