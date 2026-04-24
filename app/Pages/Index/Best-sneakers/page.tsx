"use client"

import Image from "next/image"
import SneakerData from "@/app/JsonData/SneakerData.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Icon } from "@iconify/react"
import Link from "next/link"



const Sneakers = () => {

  // const { addToCart, cart } = useCart()
  // const { toggleWishlist, wishlist } = useWishlist()

  return (
    <>
      <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
        <div className="flex fill-white justify-between items-center gap-5">
          <h2 className="Exo text-4xl uppercase font-semibold text-gray-800">
            Best Selling Seneakers

            <div className="flex items-center">
              <button className="z-10 sneaker-prev cursor-pointer w-12 h-12 rounded flex items-center justify-center hover:-translate-x-2 transition-all duration-300">
                <Icon icon="guidance:right-arrow" width="30" height="30" />
              </button>

              <div className="w-30 h-0.5 bg-gray-600"></div>

              <button className="z-10 sneaker-next cursor-pointer w-12 h-12 rounded flex items-center justify-center hover:translate-x-2 transition-all duration-300">
                <Icon icon="guidance:left-arrow" width="30" height="30" />
              </button>
            </div>

            <button className="def-btn font-semibold cursor-pointer py-2 border-s-2 border-r-2 border-transparent px-3 hover:border-black transition-all duration-300 rounded">
              SHOP MORE
            </button>
          </h2>

          <Swiper>

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Sneakers