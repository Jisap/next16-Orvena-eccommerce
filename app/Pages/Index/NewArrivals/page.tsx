import DiscoverButton from '@/app/Components/Button'
import React from 'react'

const NewArrivals = () => {
  return (
    <>
      <div className='px-[5%] lg:px-[10%] py-10 lg:py-20'>
        <div className='flex flex-wrap justify-between items-center gap-5 mb-20'>
          <h2 className='Exo text-4xl uppercase font-semibold text-gray-800'>
            New Arrivals
          </h2>

          <DiscoverButton>
            SHOP NOW
          </DiscoverButton>
        </div>
      </div>
    </>
  )
}

export default NewArrivals