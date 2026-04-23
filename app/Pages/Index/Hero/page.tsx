"use client"

import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Icon } from "@iconify/react"

const SOCIAL_ICONS = [
  { icon: "mdi:facebook" },
  { icon: "mdi:twitter" },
  { icon: "mdi:youtube" },
  { icon: "mdi:instagram" },
]

const HERO_SLIDES = [
  { title: "JOGGIN & RUNNING", className: "hero-slide" },
  { title: "FITNESS & YOGA", className: "hero-slide2" },
  { title: "HIKING GEAR", className: "hero-slide3" },
]

const PROMO_MESSAGES = [
  "Free and Easy Returns. Every Day.",
  "Hassle-Free Returns. Anytime.",
  "Secure Checkout With Full Protection.",
  "Satisfaction Guaranteed On Every Purchase.",
  "Trusted Products. Reliable Service Always.",
]

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="ps-[5%] lg:ps-[10%] px-5 lg:px-0 w-full flex flex-col lg:flex-row justify-between items-center gap-5">
          {/* Left Side */}
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
                {SOCIAL_ICONS.map((item, index) => (
                  <span
                    key={index}
                    className="w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Icon icon={item.icon} width={20} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          {/* shrink-0 evitar que el contenedor de la imagen se encoja */}
          <div className="w-full lg:w-[65%] hero-right lg:translate-x-20 shrink-0">
            <div className="hero-slide-wrapper">

              <div className="hero-slide-content">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  loop={true}
                  autoplay={{ delay: 2000 }}
                  navigation={{
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                  }}
                  modules={[Autoplay, Navigation]}
                  className="hero-swiper"
                >
                  {HERO_SLIDES.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className={slide.className}>
                        <div className="hero-slide-info absolute bottom-23 md:bottom-50 left-16 lg:left-24">

                          <h2 className="bg-prim px-4 py-3 pb-4 text-3xl font-semibold rounded-md">
                            {slide.title}
                          </h2>
                          <button className="px-4 py-3 bg-gray-700 my-2 ms-5 cursor-pointer hover:bg-gray-800 transition-all duration-300 rounded-md text-white text-2xl">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="flex">
                  <button className="hero-prev z-10 absolute bottom-10 left-10 lg:left-14 cursor-pointer w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300 shadow-sm text-gray-400 hover:text-white">
                    <Icon icon="mdi:chevron-left" width="24" />
                  </button>
                  <button className="hero-next z-10 absolute bottom-10 right-10 lg:right-24 cursor-pointer w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300 shadow-sm text-gray-400 hover:text-white">
                    <Icon icon="mdi:chevron-right" width="24" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[10%] py-10">
        <div className="bg-gray-200 flex justify-center items-center text-center py-4 rounded-2xl relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".hero-next2",
              prevEl: ".hero-prev2",
            }}
            modules={[Autoplay, Navigation]}
          >
            {PROMO_MESSAGES.map((message, index) => (
              <SwiperSlide key={index}>
                <p className="text-2xl text-gray-700 Exo">{message}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="md:flex hidden">
            <button className="hero-prev2 z-10 absolute bottom-2 left-10 cursor-pointer w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300 shadow-sm text-gray-700">
              <Icon icon="mdi:chevron-left" width="24" />
            </button>
            <button className="hero-next2 z-10 absolute bottom-2 right-20 cursor-pointer w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300 shadow-sm text-gray-700">
              <Icon icon="mdi:chevron-right" width="24" />
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero
