import React, { useEffect, useRef } from 'react'
import './AccountDropdown.scss'

const AccountDropdown = ({ setDropdown, dropdown }) => {
  return (
    <div className='account-dropdown dropdown df fdc gap-10'>
      <button className='btn btn-mv'>Make Payment</button>
      <button className='btn btn-bg'>Login</button>
      <button className='btn btn-bg'>Register</button>
    </div>
  )
}

export default AccountDropdown
