"use client"

import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Icon } from "@iconify/react"

const Hero2 = () => {
  return (
    <>
      {/* CSS mínimo irreducible: keyframes + selectores de Swiper */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(200%); }
          to   { transform: translateX(0%); }
        }
        .swiper-slide-active .hero-slide-info h2,
        .swiper-slide-active .hero-slide-info button {
          animation: slide-in 0.8s ease forwards;
        }
      `}</style>

      {/* Hero principal — min-h para que el contenido izquierdo no quede cortado */}
      <div className="w-full min-h-[90vh] max-lg:h-auto flex items-center">
        <div className="ps-[5%] lg:ps-[10%] px-5 lg:px-0 w-full flex flex-col lg:flex-row justify-between items-center gap-5">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 pt-20 pb-10">

            <div>
              <h1 className="Luxur text-7xl font-bold text-gray-700">30% Off</h1>
              <h3 className="Exo text-7xl font-light my-3 text-gray-700">Selected Styles</h3>

              <div className="my-8">
                <p className="text-gray-500 text-md">An Exclusive selection of this season&apos;s trends</p>
                <p className="font-semibold text-md">Exclusively online!</p>
              </div>

              <div className="flex gap-4">
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

          {/* Right Side */}
          <div className="w-full lg:w-[65%] lg:translate-x-20">

            {/* Wrapper con skew: crea el corte diagonal en el borde izquierdo */}
            <div className="w-full overflow-hidden rounded-[10px]
              lg:-skew-x-[10deg]
              border-l border-transparent
              h-[90vh] max-[600px]:h-[70vh]"
            >

              {/* Contra-skew: la imagen y el contenido interno quedan rectos */}
              <div className="relative lg:skew-x-[10deg] h-full">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  loop={true}
                  autoplay={{ delay: 2000 }}
                  navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
                  modules={[Autoplay, Navigation]}
                  className="w-full h-full"
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="bg-[url('/Images/Hero-Slide1.webp')] bg-cover bg-center bg-no-repeat w-full h-[90vh] max-[600px]:h-[70vh] relative">
                      <div className="hero-slide-info absolute bottom-23 md:bottom-50 left-10">
                        <h2 className="bg-prim px-4 py-3 pb-4 text-3xl font-semibold rounded-md overflow-hidden whitespace-nowrap">
                          JOGGING &amp; RUNNING
                        </h2>
                        <button className="px-4 py-3 bg-gray-700 my-2 ms-5 cursor-pointer hover:bg-gray-800 transition-all duration-300 rounded-md text-white text-2xl overflow-hidden whitespace-nowrap">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="bg-[url('/Images/Hero-Slide2.webp')] bg-cover bg-center bg-no-repeat w-full h-[90vh] max-[600px]:h-[70vh] relative">
                      <div className="hero-slide-info absolute bottom-23 md:bottom-50 left-10">
                        <h2 className="bg-prim px-4 py-3 pb-4 text-3xl font-semibold rounded-md overflow-hidden whitespace-nowrap">
                          FITNESS &amp; YOGA
                        </h2>
                        <button className="px-4 py-3 bg-gray-700 my-2 ms-5 cursor-pointer hover:bg-gray-800 transition-all duration-300 rounded-md text-white text-2xl overflow-hidden whitespace-nowrap">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="bg-[url('/Images/Hero-Slide3.webp')] bg-cover bg-center bg-no-repeat w-full h-[90vh] max-[600px]:h-[70vh] relative">
                      <div className="hero-slide-info absolute bottom-23 md:bottom-50 left-10">
                        <h2 className="bg-prim px-4 py-3 pb-4 text-3xl font-semibold rounded-md overflow-hidden whitespace-nowrap">
                          HIKING GEAR
                        </h2>
                        <button className="px-4 py-3 bg-gray-700 my-2 ms-5 cursor-pointer hover:bg-gray-800 transition-all duration-300 rounded-md text-white text-2xl overflow-hidden whitespace-nowrap">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Botones de navegación */}
                <div className="flex">
                  <button className="hero-prev z-10 absolute bottom-10 left-10 cursor-pointer w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md">
                    <Icon icon="mdi:chevron-left" width="30" />
                  </button>
                  <button className="hero-next z-10 absolute bottom-10 right-20 cursor-pointer w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md">
                    <Icon icon="mdi:chevron-right" width="30" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Banda inferior con frases rotativas */}
      <div className="px-[5%] lg:px-[10%] py-10">
        <div className="bg-gray-200 flex justify-center items-center text-center py-4 rounded-2xl relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{ nextEl: ".hero-next2", prevEl: ".hero-prev2" }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <p className="text-2xl text-gray-700 Exo">Free and Easy Returns. Every Day.</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-2xl text-gray-700 Exo">Hassle-Free Returns. Anytime.</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-2xl text-gray-700 Exo">Secure Checkout With Full Protection.</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-2xl text-gray-700 Exo">Satisfaction Guaranteed On Every Purchase.</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-2xl text-gray-700 Exo">Trusted Products. Reliable Service Always.</p>
            </SwiperSlide>
          </Swiper>

          <div className="md:flex hidden">
            <button className="hero-prev2 z-10 absolute bottom-2 left-10 cursor-pointer w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md">
              <Icon icon="mdi:chevron-left" width="30" />
            </button>
            <button className="hero-next2 z-10 absolute bottom-2 right-20 cursor-pointer w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md">
              <Icon icon="mdi:chevron-right" width="30" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero2