import React from 'react'
import { Link } from 'react-router-dom'
import { dropdown } from '../../../data'
import './UserMenuDropdown.scss'

const UserMenuDropdown = () => {
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

  return (
    <div className='menu-container'>
      <div className='menu-drop'>
        <h3 className='dfac fdc'>
          autoXpert
          <br />
          <span>Welcome</span>
        </h3>
        <ul>{dropdownList}</ul>
        <button className='logout-btn btn btn-mv'>Logout</button>
      </div>
    </div>
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
