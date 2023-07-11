import React from 'react'
import './ShopDropdown.scss'

const ShopDropdown = () => {
  return (
    <div className='shopdropdown dropdown'>
      <div className='shopdropdown__car-condition'>
        <h6 className='ptb-10'>Cars</h6>
        <div className='options jsb'>
          <span>Brand New Cars</span>
          <span>Foreign Cars</span>
          <span>Ghanaian Used Cars</span>
        </div>
      </div>
      <div className='df jsb mt20 '>
        <div>
          <h6 className='ptb-10'>Car Types</h6>
          <div className='options types'>
            <div className='df fdc'>
              <span>SUV</span>
              <span>Coupe</span>
              <span>Sedan</span>
              <span>Sports Car</span>
              <span>Convertible</span>
            </div>
            <div className='df fdc'>
              <span>Crossover</span>
              <span>Van</span>
              <span>Pickup</span>
              <span>Trucks</span>
              <span>Taxi</span>
            </div>
          </div>
        </div>
        <div>
          <h6 className='ptb-10'>Top Brands</h6>
          <div className='df fdc gap-20'>
            <div className='dfac gap-10'>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041447/autoXpert/brands/fyy1i7ecezagldio65ji.png'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041447/autoXpert/brands/bnyzbtzb50p3mb2ojw50.svg'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041451/autoXpert/brands/m7ktiayrdof0kmezxasa.png'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041450/autoXpert/brands/h9isgf9tmspue7yibcex.svg'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041450/autoXpert/brands/xoxetkq5c7efe9hfliop.png'
                  alt=''
                  className='brand-logo'
                />
              </div>
            </div>
            <div className='dfac gap-10'>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041449/autoXpert/brands/wp7sowze7vasnunketvo.svg'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041449/autoXpert/brands/c6ns8f4ml20ivgkrzo8d.png'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041448/autoXpert/brands/utwenssrmwgvnyjvteop.png'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041448/autoXpert/brands/zkfogbandbyla3ehuslp.png'
                  alt=''
                  className='brand-logo'
                />
              </div>
              <div className='brand-logo-container dfacjc'>
                <img
                  src='https://res.cloudinary.com/dky6qdzt0/image/upload/v1689041447/autoXpert/brands/jvie01f6fhtuhm5dwbex.svg'
                  alt=''
                  className='brand-logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown
