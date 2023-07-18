import React from 'react'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'
import { Link } from 'react-router-dom'

const JoinAs = ({ open, onClose, setOpen }) => {
  const handlePrivateSeller = () => {
    setOpen((prevState) => ({
      ...prevState,
      joinAs: !prevState.joinAs,
      privateSellerForm: !prevState.privateSellerForm,
    }))
  }
  const handleDealer = () => {
    setOpen((prevState) => ({
      ...prevState,
      joinAs: !prevState.joinAs,
    }))
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
          <Link to='dealer'>
            <button
              className='btn btn-mv dfacjc field-pad'
              onClick={handleDealer}
            >
              <span className='btn-text'>Dealer</span>
            </button>
          </Link>
          <Link to='seller'>
            <button
              className='btn btn-mv dfacjc field-pad'
              onClick={handlePrivateSeller}
            >
              <span className='btn-text'>Private Seller</span>
            </button>
          </Link>
        </div>
      </Modal>
    </>
  )
}

export default JoinAs
