"use client"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Image from "next/image";
import Brand1 from "@/public/Images/logo1.svg";
import Brand2 from "@/public/Images/logo2.svg";
import Brand3 from "@/public/Images/logo3.svg";
import Brand4 from "@/public/Images/logo4.svg";
import Brand5 from "@/public/Images/logo5.svg";
import Brand6 from "@/public/Images/logo6.svg";
import Brand7 from "@/public/Images/logo7.svg";
import Brand8 from "@/public/Images/logo8.svg";
import Brand9 from "@/public/Images/logo9.svg";
import Brand10 from "@/public/Images/logo10.svg";

const BrandsData = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10,];


const Brands = () => {
  return (
    <>
      <div className="px-[5%] lg:px-[10%] py-0 md:py-10 pb-0">
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 8 },
            1000: { slidesPerView: 5 },
            600: { slidesPerView: 3 },
            575: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
        >
          {BrandsData.map((brand, index) => (
            <SwiperSlide key={index} className="group">
              <div className="brand-image relative">
                <Image
                  src={brand}
                  alt="brand-logo"
                  width={500}
                  height={500}
                  className="w-full h-full" />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Brands