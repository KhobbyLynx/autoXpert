import React from 'react'
import { SiFacebook, SiTwitter, SiInstagram, SiTiktok } from 'react-icons/si'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import CopyRight from '../copyRight/CopyRight'

const Footer = () => {
  const linkToRouteMap = {
    'About Us': '/about',
    FAQ: '',
    'Privacy Policy': '',
    'Terms & Conditions': '',
    'Contact Us': '/contact',
    'Sign In': '/account',
    'Sell a Car': '/cart',
    'Safety Tips': '',
    'Invest in autoXpert': '',
    'New Automobiles': '',
    'Ghanaian Used': '',
    'Foreign Used': '',
  }

  return (
    <div className='footer'>
      <div className='footer__logo'>
        <Link
          to='/'
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        >
          <img src={images.logo} alt='lynx logo' />
        </Link>
      </div>
      <div className='footer__content'>
        <div className='footer__contact'>
          <div className='contact__section'>
            <h2>Contact</h2>
            <div className='contact__info'>
              <span className='span'>
                <h5>Address:</h5>562 Oxford Street, Osu
              </span>
              <span className='span'>
                <h5>Phone: </h5>+01 2222 365
              </span>
              <span className='span'>
                <h5>Hours:</h5> 10:00 - 18:00, Mon - Sat
              </span>
            </div>
          </div>
          <div className='socials__section'>
            <h2>Follow Us</h2>
            <div className='social__icons'>
              <SiFacebook className='icon' />
              <SiTwitter className='icon' />
              <SiInstagram className='icon' />
              <SiTiktok className='icon' />
            </div>
          </div>
        </div>
        <div className='footer__links'>
          <div className='footer__about'>
            <h2>Company</h2>
            {[
              'About Us',
              'FAQ',
              'Privacy Policy',
              'Terms & Conditions',
              'Contact Us',
            ].map((link) => (
              <Link
                className='link span'
                key={link}
                to={linkToRouteMap[link]}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              >
                {link}
              </Link>
            ))}
          </div>
          <div className='footer__account'>
            <h2>Quick Links</h2>
            {[
              'Sign In',
              'Sell a Car',
              'Saved',
              'Safety Tips',
              'Invest in autoXpert',
            ].map((link) => (
              <Link
                className='link span'
                key={link}
                to={linkToRouteMap[link]}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className='footer__others'>
          <h2>Vehicles</h2>
          {['New Automobiles', 'Ghanaian Used', 'Foreign Used'].map((link) => (
            <Link
              className='link span '
              key={link}
              to={linkToRouteMap[link]}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
            >
              {link}
            </Link>
          ))}
          <div className='df fdc gap-5'>
            <p className='p-footer'>Secure Payment Gateways</p>
            <div className='payment-gateways dfac gap-5'>
              <img src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689796701/autoXpert/pay/Mastercard_gudv3a.png' />
              <img src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689796699/autoXpert/pay/Visa_oc7tsg.png' />
              <img src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689796701/autoXpert/pay/Vodafone-Cash-Logo_lgeocf.jpg' />
              <img src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689796700/autoXpert/pay/momo-logo_ehkxvu.png' />
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  )
}

export default Footer
