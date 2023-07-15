import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const SpinnerLoader = () => {
  return (
    <>
      <div className='overlay z-index-overall' />
      <div className='request-loader dfac'>
        <HashLoader color='#5aae32' loading size={60} />
      </div>
    </>
  )
}

export default SpinnerLoader
