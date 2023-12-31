import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'
import newRequest from '../../utils/newRequest'

const CreateAccount = ({
  open,
  onClose,
  back,
  setOpen,
  email,
  setPending,
  errorMsg,
  setErrorMsg,
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
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

  const handleCreateAccount = (e) => {
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

          // when error with statusCode 500 occurs, currentUser is set to a messagem hence the need to removeItem if it exist
          localStorage.removeItem('currentUser')
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

  const handleGoBack = () => {
    setOpen((prevState) => ({
      ...prevState,
      registerAccount: !prevState.registerAccount,
      createAccount: !prevState.createAccount,
    }))
  }

  const handleSeller = () => {
    setOpen((prevState) => ({
      ...prevState,
      createAccount: !prevState.createAccount,
      joinAs: !prevState.joinAs,
    }))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateAccount(e)
    }
  }

  return (
    <>
      <Modal open={open} onClose={onClose} back={back} goBack={handleGoBack}>
        <div className='reg-user df fdc'>
          <h3>Create an account</h3>

          <form onSubmit={handleCreateAccount} className='df fdc gap-20'>
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
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                className='input'
                disabled
              />
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                className='input'
                name='password'
                onChange={handleChange}
                value={formData.password}
                required
              />
              <p>Enter a mininum of 8 characters</p>
            </div>
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
            <h6 onClick={handleSeller}>
              Are you a dealer? <Link className='form-link'>Sell a car.</Link>
            </h6>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CreateAccount
