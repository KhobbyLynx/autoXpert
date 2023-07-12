import React from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { MdKeyboardBackspace } from 'react-icons/md'
import './Modal.scss'

const Modal = ({ children, open, onClose, back, goBack }) => {
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div className='overlay' />
      <div className='modal'>
        <div className='icon-container dfac jsb'>
          {back && (
            <div className='back-icon-container dfac gap-5' onClick={goBack}>
              <MdKeyboardBackspace className='nav-link-icon back-icon' />
              <span>Back</span>
            </div>
          )}
          <div className='close-icon-container'>
            <AiOutlineClose
              onClick={onClose}
              className='nav-link-icon close-icon'
            />
          </div>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
