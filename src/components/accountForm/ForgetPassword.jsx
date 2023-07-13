import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'

const ForgetPassword = ({ open, onClose, back, setOpen }) => {
  const handleGoBack = () => {
    setOpen((prevState) => ({
      ...prevState,
      forgotPassword: !prevState.forgotPassword,
      signIn: !prevState.signIn,
    }))
  }

  const handleSubmit = () => {
    setOpen((prevState) => ({
      ...prevState,
      forgotPassword: !prevState.forgotPassword,
      confirmForgotPassword: !prevState.confirmForgotPassword,
    }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose} back={back} goBack={handleGoBack}>
        <div className='reg-user df fdc'>
          <div>
            <h3>Forgot Password</h3>
            <p>
              Enter the email associated with your autoXpert profile to receian
              Email to reset your Password.
            </p>
          </div>

          <input type='email' placeholder='Email' className='input' />
          <button
            className='btn btn-mv dfacjc field-pad'
            onClick={handleSubmit}
          >
            <span className='btn-text'>Submit</span>
          </button>
          <div className='form-text df fdc'>
            <p>
              By resetting your password, you agree to our{' '}
              <Link className='form-link'>Privacy Statement</Link> &{' '}
              <Link className='form-link'>Terms of Service</Link>
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ForgetPassword
