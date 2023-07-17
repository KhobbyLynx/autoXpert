import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
import { carTypes, mobileMenu, topBrands } from '../../../data'
import './HamburgerMenu.scss'

const HamburgerMenu = ({ setHamburgerMenu, hamburgerMenu }) => {
  const linkToRouteMap = {
    home: '/',
    about: '/about',
    contact: '/contact',
    shop: '/shop',
    blog: '/blog',
  }

  return (
    <div
      className={`hamburger-menu df fdc ${
        hamburgerMenu ? 'animate-menu-in' : 'animate-menu-out'
      }`}
    >
      <div className='hamburger-menu__head dfac jfs jsb mb50'>
        <div className='hamburger-menu__logo-container dfac'>
          <img src={images.logoDark} className='logo' alt='' />
        </div>
        <div className='df jsb'>
          <RiCloseFill
            className='menu-close-icon'
            onClick={() =>
              setHamburgerMenu((prevState) => ({
                ...prevState,
                hamburgerMenu: false,
              }))
            }
          />
        </div>
      </div>
      <a href='https://wa.me/233508783805?text=I%20need%20a%20website%20for%20my%20business'>
        <div
          className='hamburger-menu__tab bb dfac'
          onClick={() =>
            setHamburgerMenu((prevState) => ({
              ...prevState,
              hamburgerMenu: !prevState.hamburgerMenu,
            }))
          }
        >
          <img
            className='menu-icon'
            src='https://res.cloudinary.com/khobbylynx/image/upload/v1688345492/lynxmart/img/icons/online-support_nse2gy.png'
            alt=''
          />
          <span>Live Help</span>
        </div>
      </a>
      <div
        className='hamburger-menu__head-tab df jsb'
        onClick={() =>
          setHamburgerMenu((prevState) => ({
            ...prevState,
            hamburgerMenu: !prevState.hamburgerMenu,
          }))
        }
      >
        <h3>My autoXpert Account</h3>
        <AiOutlineRight className='arrow-right' />
      </div>
      {mobileMenu.map((item) => (
        <Link
          to={linkToRouteMap[item.text]}
          className='hamburger-menu__tab navlist dfac link'
          key={item.id}
          onClick={() =>
            setHamburgerMenu((prevState) => ({
              ...prevState,
              hamburgerMenu: !prevState.hamburgerMenu,
            }))
          }
        >
          <img className='menu-icon' src={item.icon} alt='' />
          <span>{item.text}</span>
        </Link>
      ))}
      <div
        className='hamburger-menu__head-tab df jsb'
        onClick={() =>
          setHamburgerMenu((prevState) => ({
            ...prevState,
            hamburgerMenu: !prevState.hamburgerMenu,
          }))
        }
      >
        <h3>Car Condition</h3>
        <AiOutlineRight className='arrow-right' />
      </div>
      {carTypes.map((item) => (
        <div className='hamburger-menu__tab navlist dfac' key={item.id}>
          <img className='menu-icon' src={item.icon} alt='' />
          <span>{item.text}</span>
        </div>
      ))}
      <div
        className='hamburger-menu__head-tab df jsb'
        onClick={() =>
          setHamburgerMenu((prevState) => ({
            ...prevState,
            hamburgerMenu: !prevState.hamburgerMenu,
          }))
        }
      >
        <h3>Top Brands</h3>
        <AiOutlineRight className='arrow-right' />
      </div>
      {topBrands.map((item) => (
        <div className='hamburger-menu__tab navlist dfac' key={item.id}>
          <img className='menu-icon' src={item.icon} alt='' />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  )
}

export default HamburgerMenu
