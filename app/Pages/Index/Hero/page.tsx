"use client"

import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Icon } from "@iconify/react"




const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="ps-[5%] lg:ps-[10%] px-5 lg:px-0 w-full flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/2 hero-content pt-20">
            <div className="hero-content-wrap">
              <h1 className="Luxur text-7xl font-bold text-gray-700">30% Off</h1>

              <h3 className="Exo text-7xl font-light my-3 text-gray-700">Selected Styles</h3>

              <div className="my-8">
                <p className="text-gray-500 text-md">An Exclusive selection of this season's trends</p>
                <p className="text-gray-8 font-semibold text-md">Exclusively online!</p>
              </div>

              <div className="hero-btns flex gap-4">
                <button className="btn border btn-left">
                  <span>Shop For Men</span>
                </button>

                <button className="btn border btn-right">
                  <span>Shop For Women</span>
                </button>
              </div>
            </div>

            <div className="mt-15">
              <h2 className="text-gray-700 font-semibold text-3xl Exo">GET 10% OFF</h2>
              <h2 className="text-gray-700 text-2xl Exo">YOUR FIRST PURCHASE</h2>

              <form className="border-b-2 border-gray-700 my-5 flex justify-between items-center gap-3 w-full lg:w-[80%] px-5 py-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[80%] outline-none"
                  required
                />

                <button
                  type="submit"
                  className="text-[14px] text-gray-700 hover:text-black cursor-pointer font-semibold"
                >
                  SIGN UP
                </button>
              </form>
            </div>

            <div className="mt-10">
              <h2 className="text-gray-500 font-semibold text-xl Exo">FOLLOW US</h2>

              <div className="flex items-center gap-3 mt-4">
                <span className="w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Icon icon="mdi:facebook" width={20} />
                </span>

                <span className="w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Icon icon="mdi:twitter" width={20} />
                </span>

                <span className="w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Icon icon="mdi:youtube" width={20} />
                </span>

                <span className="w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Icon icon="mdi:instagram" width={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero