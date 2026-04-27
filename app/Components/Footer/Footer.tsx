import { Icon } from '@iconify/react'
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

              <div className='flex'>
                <Icon
                  icon="tabler:map-pin"
                  width="24"
                  height="24"
                />

                <h3 className='Exo font-semibold ps-2 text-gray-700'>
                  7860 W 79th Terr, Overland Park, KS 66204
                </h3>
              </div>

              <div className='flex mt-2'>
                <Icon
                  icon="heroicons-outline:mail"
                  width="24"
                  height="24"
                />

                <h3 className='Exo font-semibold ps-2 text-gray-700'>
                  Orvena@Email.Com
                </h3>
              </div>

              <div className='flex mt-2'>
                <Icon
                  icon="solar:phone-calling-bold"
                  width="24"
                  height="24"
                />

                <h3 className='Exo font-semibold ps-2 text-gray-700'>
                  +123 456 789 1234
                </h3>
              </div>

              <p className='mt-5 text-gray-700 text-md w-full lg:w-[85%]'>
                Orvena is the best fashion e-commerce platform for buying the latest trends in clothing and accessories. Shop now and discover the best deals on your favorite brands.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer