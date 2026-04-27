"use client"

import { Icon } from "@iconify/react"


const FollowUs = () => {
  return (
    <>
      <div className='px-[5%] lg:px-[10%] py-10'>
        <div className='flex flex-col justify-center items-center text-center'>
          <Icon
            icon="akar-icons:instagram-fill"
            width="40"
            height="40"
          />

          <p className="w-full lg:w-[30%] text-lg Exo font-medium text-gray-700 mt-3">
            Remember to show off your new purchase on insta by taggin us and
            <span className="font-bold text-gray-800"> get $30 off</span> your next order.
          </p>

          <h2 className="flex gap-2 Exo font-semibold my-3">
            FOLLOW US ON INSTAGRAM
            <Icon
              icon="guidance:left-arrow"
              width="24"
              height="24"
            />
          </h2>
        </div>


      </div>
    </>
  )
}

export default FollowUs