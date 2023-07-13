import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'

const ForgetPasswordEmailConfirm = ({ open, onClose, back, setOpen }) => {
  const handleGoBack = () => {
    setOpen((prevState) => ({
      ...prevState,
      forgotPassword: !prevState.forgotPassword,
      signIn: !prevState.signIn,
    }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose} back={back} goBack={handleGoBack}>
        <div className='reg-user df fdc'>
          <h3>Forgot Password</h3>

          <div className='forgot-password__email'>
            <div>
              <FiCheckCircle className='icon' />
            </div>
            <div>
              <h6>We sent you an email</h6>
              <p>
                Enter the email associated with your autoXpert profile to
                receive Email to reset your Password.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ForgetPasswordEmailConfirm
