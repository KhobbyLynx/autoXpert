import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle, FaAddressCard } from 'react-icons/fa'
import './GeneralFormStyle.scss'
import newRequest from '../../utils/newRequest'

const DealerForm = ({
  setOpen,
  pending,
  setPending,
  errorMsg,
  setErrorMsg,
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    idCard: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    status: 'dealer',
    verified: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { password, confirmPassword } = formData

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match')
      return
    } else if (password.length < 8) {
      setErrorMsg('Password too short')
      return
    }

    setPending(true)

    setTimeout(() => {
      let signUpSuccessful = true

      const request = async () => {
        const { firstname, lastname, password } = formData
        try {
          const res = await newRequest.post('/users', {
            name: `${firstname} ${lastname}`,
            email,
            password,
          })

          localStorage.setItem('currentUser', JSON.stringify(res.data))
        } catch (error) {
          setPending(false)
          signUpSuccessful(false)

          const statusCode = error.response.status
          if (statusCode === 400) {
            setErrorMsg(error.response.data.message)
          } else if (statusCode === 5000) {
            setErrorMsg(error.response.statusText)
          } else {
            setErrorMsg('something went wrong')
          }
          return
        } finally {
          if (signUpSuccessful) {
            setOpen(false)
            navigate('/')
            setTimeout(() => {
              setTimeout(() => {
                setPending(false)
              }, 2000)
            })
          }
        }
      }
      return request()
    }, 3000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateAccount(e)
    }
  }

  return (
    <>
      <div className='reg-user df fdc seller-form'>
        <div>
          <h3>Join as a Dealer</h3>
          <p>Showcase your fleet to buyers.</p>
        </div>

        <div>
          <h6 className='pb-5'>STEP 1 of 2</h6>
          <p>This is information Pertaining to you as an individual</p>
        </div>

        <div className='profile dfac fdc gap-10'>
          <div className='imagePreview dfacjc'>
            <FaUserCircle className='icon' />
          </div>
          <h6 className='underline'>Upload Your Image</h6>
          <p className='text-align'>
            Please upload a clear and recent picture of yourself. The photo
            should show your face clearly
          </p>
        </div>

        <form onSubmit={handleSubmit} className='df fdc gap-20'>
          <div className='df gap-20'>
            <input
              type='text'
              placeholder='First name'
              className='input'
              name='firstname'
              onChange={handleChange}
              value={formData.firstname}
              required
            />
            <input
              type='text'
              placeholder='Last name'
              className='input'
              name='lastname'
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='profile dfac fdc'>
            <div className='cardPreview dfacjc'>
              <FaAddressCard className='card-icon' />
            </div>
            <h6 className='underline'>Upload National Identification Card</h6>
          </div>
          <div className='df gap-20'>
            <input
              type='tel'
              name='tel'
              value={formData.tel}
              onChange={handleChange}
              placeholder='Phone Number'
              className='input'
              required
            />
            <input
              type='email'
              value={formData.email}
              className='input'
              onChange={handleChange}
              name='email'
              placeholder='Email'
              required
            />
          </div>
          <div>
            <div className='df gap-20'>
              <input
                type='password'
                placeholder='Password'
                className='input'
                name='password'
                onChange={handleChange}
                value={formData.password}
                required
              />
              <input
                type='password'
                placeholder='Confirm Password'
                className='input'
                name='confirmPassword'
                onChange={handleChange}
                value={formData.confirmPassword}
                required
                onKeyPress={handleKeyPress}
              />
            </div>
            <p>Enter a mininum of 8 characters</p>
          </div>
          <div className='gap-10 dfac fdc'>
            {errorMsg && <h4 className='error-msg'>{errorMsg}</h4>}
            <button className='btn btn-mv dfacjc field-pad'>
              <span className='btn-text'>Next</span>
            </button>
          </div>
        </form>
        <div className='form-text df fdc'>
          <p>
            By continuing, you agree to our{' '}
            <Link className='form-link'>Privacy Statement</Link> &{' '}
            <Link className='form-link'>Terms of Service</Link>
          </p>
          <h6>
            Are you a dealer?{' '}
            <Link to='/seller' className='form-link'>
              Join as a Private Seller.
            </Link>
          </h6>
        </div>
      </div>
    </>
  )
}

export default DealerForm
