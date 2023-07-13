import React from 'react'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'

const JoinAs = ({ open, onClose, setOpen }) => {
  const handleSubmit = () => {
    // setOpen((prevState) => ({
    //   ...prevState,
    //   forgotPassword: !prevState.forgotPassword,
    //   confirmForgotPassword: !prevState.confirmForgotPassword,
    // }))
  }
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className='reg-user df fdc'>
          <div className='df fdc gap-5'>
            <h3>Join the autoXpert Community</h3>
            <p>For Individuals, Sell your car hussle-free.</p>
            <p>For Companies, Showcase your fleet to buyers.</p>
          </div>
          <button
            className='btn btn-mv dfacjc field-pad'
            onClick={handleSubmit}
          >
            <span className='btn-text'>Dealer</span>
          </button>
          <button
            className='btn btn-mv dfacjc field-pad'
            onClick={handleSubmit}
          >
            <span className='btn-text'>Private Seller</span>
          </button>
        </div>
      </Modal>
    </>
  )
}

export default JoinAs
