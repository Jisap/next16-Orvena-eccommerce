import DecoratedTitle from '@/app/Components/DecoratedTitle'
import React from 'react'

const ProductDetails = () => {
  return (
    <>
      <div className='Page-section relative overflow-hidden'>
        <div className='px-[5%] lg:px-[10%] py-40 pb-10'>
          <DecoratedTitle>
            Product <br /> Details
          </DecoratedTitle>
        </div>
      </div>
    </>
  )
}

export default ProductDetails