"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import instaImg1 from "@/public/Images/Instagram-1.jpg"
import instaImg2 from "@/public/Images/Instagram-2.jpg"
import instaImg3 from "@/public/Images/Instagram-3.jpg"
import instaImg4 from "@/public/Images/Instagram-4.jpg"
import instaImg5 from "@/public/Images/Instagram-5.jpg"
import instaImg6 from "@/public/Images/Instagram-6.jpg"
import instaImg7 from "@/public/Images/Instagram-7.jpg"

const InstagramImages = [
  {
    id: 1,
    img: instaImg1
  },
  {
    id: 2,
    img: instaImg2
  },
  {
    id: 3,
    img: instaImg3
  },
  {
    id: 4,
    img: instaImg4
  },
  {
    id: 5,
    img: instaImg5
  },
  {
    id: 6,
    img: instaImg6
  },
  {
    id: 7,
    img: instaImg7
  },
];


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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-10">
          {InstagramImages.map((img) => (
            <div key={img.id} className={`relative group overflow-hidden rounded ${img.id === 6 ? "hidden lg:block" : ""}`}>
              <Image
                src={img.img}
                alt="instagramImg"
                width={400}
                height={400}
                className="w-full h-full object-cover cursor-pointer"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 flex items-center justify-center">
                <Icon
                  icon="akar-icons:instagram-fill"
                  className="text-white text-4xl scale-75 group-hover:scale-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FollowUs