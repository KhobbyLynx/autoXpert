import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { dropdown } from '../../../data'
import './UserMenuDropdown.scss'
import newRequest from '../../../utils/newRequest'
import SpinnerLoader from '../../loader/SpinnerLoader'

const UserMenuDropdown = ({ setErrorMsg, setPending, errorMsg, pending }) => {
  const navigate = useNavigate()
  const linkToRouteMap = {
    'my account': '.',
    orders: '/orders',
    inbox: '/inbox',
    'saved items': '/wishlist',
    'recently viewed': '/history',
  }

  const dropdownList = dropdown.map((item) => (
    <Link
      to={linkToRouteMap[item.name]}
      key={item.id}
      onClick={() => setOpen(false)}
    >
      <DropdownList {...item} />
    </Link>
  ))

  const handleLogout = async () => {
    setPending(true)
    try {
      const response = await newRequest.post('/users/logout')
      const data = await response.data
      console.log(data)
      if (data) {
        setPending(false)
        localStorage.removeItem('currentUser')
        setPending(false)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      setPending(false)
      const statusCode = error.response.status
      if (statusCode === 400) {
        setErrorMsg(error.response.data.message)
      } else if (statusCode === 5000) {
        setErrorMsg(error.response.statusText)
      } else {
        setErrorMsg('something went wrong')
      }
      return
    }
  }

  return (
    <>
      {pending && <SpinnerLoader />}

      <div className='menu-container'>
        <div className='menu-drop'>
          <h3 className='dfac fdc'>
            autoXpert
            <br />
            <span>Welcome</span>
          </h3>
          <ul>{dropdownList}</ul>
          <div>
            {errorMsg && <span className='error-msg'>{errorMsg}</span>}
            <button className='logout-btn btn btn-mv' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function DropdownList({ name, icon }) {
  return (
    <li className='dropdownItem dfac jfs'>
      <img src={icon}></img>
      <span> {name} </span>
    </li>
  )
}

export default UserMenuDropdown
