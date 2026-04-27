import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[10%] py-20 lg:py-20 lg:pb-10 relative'>
        <div className='footer-shape'></div>
        <div className='footer-shape2'></div>
        <footer>
          <div className='flex flex-col lg:flex-row justify-between gap-4'>
            <div className='w-full lg:w-1/2'>
              <div className='inline-block mb-5'>
                <Link href="/">
                  <div className='bg-black rounded-lg px-2 pe-4 py-1'>
                    <h1 className='Luxur text-4xl font-bold text-white tracking-widest'>
                      Orvena
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer