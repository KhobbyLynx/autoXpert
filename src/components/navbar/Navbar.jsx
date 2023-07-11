import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { images } from '../../constants'
import './Navbar.scss'
import ShopDropdown from '../modals/shopDropdown/ShopDropdown'
import MoreDropdown from '../modals/moreDropdown/MoreDropdown'
import AccountDropdown from '../modals/accountDropdown/AccountDropdown'
import UserMenuDropdown from '../modals/userMenuDropdown/UserMenuDropdown'

const Navbar = () => {
  return (
    <div className='pr'>
      <>
        <ShopDropdown />
        <MoreDropdown />
        <AccountDropdown />
        {/* <UserMenuDropdown /> */}
      </>
      <nav className='navbar dfac'>
        <img src={images.logo} alt='' className='navbar__logo logo' />
        <ul className='navbar__ul dfac'>
          <li className='nav-link dfac gap-5'>
            <p className='link-text'>Shop</p>
            <MdOutlineKeyboardArrowDown className='nav-link-icon' />{' '}
          </li>
          <li className='nav-link dfac gap-5'>
            <p className='link-text'>Sell a Car</p>
          </li>
          <li className='nav-link dfac gap-5'>
            <p className='link-text'>More</p>
            <MdOutlineKeyboardArrowDown className='nav-link-icon' />{' '}
          </li>
        </ul>
        <div className='navbar__icon-link dfac'>
          <BsBookmark className='nav-link-icon' />
          <FaRegUser className='nav-link-icon' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
