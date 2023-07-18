import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaImage, FaAddressCard } from 'react-icons/fa'
import { BiImageAdd } from 'react-icons/bi'
import './GeneralFormStyle.scss'
import newRequest from '../../utils/newRequest'

const CompanyInfoForm = ({
  setOpen,
  pending,
  setPending,
  errorMsg,
  setErrorMsg,
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    company: '',
    employees: '',
    logo: '',
    email: '',
    phone: '',
    address: '',
    traffic: '',
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
        const { company, employees, password } = formData
        try {
          const res = await newRequest.post('/users', {
            name: `${company} ${employees}`,
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
          <h6 className='pb-5'>STEP 2 of 2</h6>
          <p>This is information Pertaining to your Company</p>
        </div>

        <div className='profile dfac fdc gap-10'>
          <div className='imagePreview dfacjc'>
            <BiImageAdd className='company-icon' />
          </div>
          <h6 className='underline'>Upload Company Logo</h6>
        </div>

        <form onSubmit={handleSubmit} className='df fdc gap-20'>
          <div className='df gap-20'>
            <input
              type='text'
              placeholder='Company Name'
              className='input'
              name='company'
              onChange={handleChange}
              value={formData.company}
              required
            />
            <input
              type='Number'
              placeholder='Number of Employees'
              className='input'
              name='employees'
              value={formData.employees}
              onChange={handleChange}
              required
            />
          </div>

          <div className='df gap-20'>
            <input
              type='email'
              value={formData.email}
              className='input'
              onChange={handleChange}
              name='email'
              placeholder='Company Email'
              required
            />
            <input
              type='tel'
              name='tel'
              value={formData.tel}
              onChange={handleChange}
              placeholder='Phone Number'
              className='input'
              required
            />
          </div>
          <div className='df gap-20'>
            <input
              type='text'
              placeholder='Address'
              className='input'
              name='address'
              onChange={handleChange}
              value={formData.address}
              required
            />
            <input
              type='text'
              placeholder='Where did you hear of us from?'
              className='input'
              name='traffic'
              onChange={handleChange}
              value={formData.traffic}
              required
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className='gap-10 dfac fdc'>
            {errorMsg && <h4 className='error-msg'>{errorMsg}</h4>}
            <button className='btn btn-mv dfacjc field-pad'>
              <span className='btn-text'>Create account</span>
            </button>
          </div>
        </form>
        <div className='form-text df fdc'>
          <p>
            By Signing up, you agree to our{' '}
            <Link className='form-link'>Privacy Statement</Link> &{' '}
            <Link className='form-link'>Terms of Service</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default CompanyInfoForm
