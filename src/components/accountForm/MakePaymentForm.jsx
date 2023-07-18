import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../portal/Modal'
import './GeneralFormStyle.scss'
import newRequest from '../../utils/newRequest'

const MakePaymentForm = ({
  open,
  onClose,
  setOpen,
  pending,
  setPending,
  errorMsg,
  setErrorMsg,
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    reference: '',
    amount: '',
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateAccount(e)
    }
  }

  return (
    <>
      <Modal open={open} onClose={onClose} pending={pending}>
        <div className='reg-user df fdc'>
          <div>
            <h3>Make Payment</h3>
            <h6>
              Secure Payment <span>powered by PayStack</span>
            </h6>
          </div>

          <form onSubmit={handleSubmit} className='df fdc gap-20'>
            <textarea
              placeholder='Enter Reference'
              rows='4'
              className='input'
              name='reference'
              onChange={handleChange}
              value={formData.reference}
              required
            />
            <input
              type='number'
              placeholder='Amount'
              className='input'
              name='amount'
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <div className='gap-10 dfac fdc'>
              {errorMsg && <h4 className='error-msg'>{errorMsg}</h4>}
              <button className='btn btn-mv dfacjc field-pad'>
                <span className='btn-text'>PROCEED TO PAY</span>
              </button>
            </div>
          </form>
          <div className='form-text df fdc'>
            <p>Secure Payment Gateways</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default MakePaymentForm
