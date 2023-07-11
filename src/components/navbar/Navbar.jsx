import React, { useState, useRef, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { images } from '../../constants'
import './Navbar.scss'
import ShopDropdown from '../modals/shopDropdown/ShopDropdown'
import MoreDropdown from '../modals/moreDropdown/MoreDropdown'
import AccountDropdown from '../modals/accountDropdown/AccountDropdown'
import UserMenuDropdown from '../modals/userMenuDropdown/UserMenuDropdown'
import HamburgerMenu from '../modals/hamburgerMenu/HamburgerMenu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const shopDropdownRef = useRef(null)
  const moreDropdownRef = useRef(null)
  const accountDropdownRef = useRef(null)
  const usermenuDropdownRef = useRef(null)
  const hamburgerMenuRef = useRef(null)

  const [dropdown, setDropdown] = useState({
    shop: false,
    more: false,
    account: false,
    usermenu: false,
    hamburgerMenu: false,
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!shopDropdownRef.current?.contains(event.target) && dropdown.shop) {
        setDropdown((prevState) => ({ ...prevState, shop: false }))
      }
      if (!moreDropdownRef.current?.contains(event.target) && dropdown.more) {
        setDropdown((prevState) => ({ ...prevState, more: false }))
      }
      if (
        !accountDropdownRef.current?.contains(event.target) &&
        dropdown.account
      ) {
        setDropdown((prevState) => ({ ...prevState, account: false }))
      }
      if (
        !usermenuDropdownRef.current?.contains(event.target) &&
        dropdown.usermenu
      ) {
        setDropdown((prevState) => ({ ...prevState, usermenu: false }))
      }
      if (
        !hamburgerMenuRef.current?.contains(event.target) &&
        dropdown.hamburgerMenu
      ) {
        setDropdown((prevState) => ({ ...prevState, hamburgerMenu: false }))
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdown])

  let currentUser

  return (
    <div>
      <nav className='navbar dfac'>
        <Link to='/'>
          <img
            src={images.logo}
            alt='autoXpert'
            className='navbar__logo logo'
          />
        </Link>
        <ul className='navbar__ul'>
          <div ref={shopDropdownRef} className='pr'>
            <li
              className='nav-link dfac gap-5'
              onClick={() =>
                setDropdown((prevState) => ({
                  ...prevState,
                  shop: !prevState.shop,
                }))
              }
            >
              <p className='link-text'>Shop</p>
              <MdOutlineKeyboardArrowDown className='nav-link-icon' />{' '}
            </li>
            <div className={`inactive ${dropdown.shop && 'active'}`}>
              <ShopDropdown />
            </div>
          </div>
          <li className='nav-link dfac gap-5'>
            <p className='link-text'>Sell a Car</p>
          </li>
          <div ref={moreDropdownRef} className='pr'>
            <li
              className='nav-link dfac gap-5'
              onClick={() =>
                setDropdown((prevState) => ({
                  ...prevState,
                  more: !prevState.more,
                }))
              }
            >
              <p className='link-text'>More</p>
              <MdOutlineKeyboardArrowDown className='nav-link-icon' />{' '}
            </li>
            <div className={`inactive ${dropdown.more && 'active'}`}>
              <MoreDropdown />
            </div>
          </div>
        </ul>
        <div className='navbar__icon-link dfac'>
          <BsBookmark className='nav-link-icon bookmark' />
          {!currentUser ? (
            <div ref={accountDropdownRef} className='pr'>
              <FaRegUser
                className='nav-link-icon'
                onClick={() =>
                  setDropdown((prevState) => ({
                    ...prevState,
                    account: !prevState.account,
                  }))
                }
              />
              <div className={` ${dropdown.account ? 'active' : 'inactive'}`}>
                <AccountDropdown />
              </div>
            </div>
          ) : (
            <div className='user-menu' ref={usermenuDropdownRef}>
              <button
                className='user-acc menu__trigger dfac'
                onClick={() =>
                  setDropdown((prevState) => ({
                    ...prevState,
                    usermenu: !prevState.usermenu,
                  }))
                }
              >
                <div className='profile-img dfac'>
                  <FaRegUser className='profile-icon' />
                </div>
                <span>John Stones</span>
              </button>
              <div className={` ${dropdown.usermenu ? 'active' : 'inactive'}`}>
                <UserMenuDropdown />
              </div>
            </div>
          )}
          <div className='pr' ref={hamburgerMenuRef}>
            <FiMenu
              className='nav-link-icon mobile-menu'
              onClick={() =>
                setDropdown((prevState) => ({
                  ...prevState,
                  hamburgerMenu: !prevState.hamburgerMenu,
                }))
              }
            />
            <HamburgerMenu
              className={` ${dropdown.hamburgerMenu ? 'active' : 'inactive'}`}
              hamburgerMenu={dropdown.hamburgerMenu}
              setHamburgerMenu={setDropdown}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
