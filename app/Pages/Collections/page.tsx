"use client"

import DecoratedTitle from '@/app/Components/DecoratedTitle'
import Image from 'next/image'
import NewArrivalsData from "@/app/JsonData/NewArrivals.json"
import { Icon } from '@iconify/react'

import NewArrivalsImg6 from "@/public/Images/NewArrival-6.webp"
import NewArrivalsImg7 from "@/public/Images/NewArrival-7.webp"
import NewArrivalsImg8 from "@/public/Images/NewArrival-8.webp"
import NewArrivalsImg9 from "@/public/Images/NewArrival-9.webp"
import NewArrivalsImg10 from "@/public/Images/NewArrival-10.webp"
import NewArrivalsImg11 from "@/public/Images/NewArrival-11.webp"

import SneakerData from "@/app/JsonData/SneakerData.json"

import shoes4 from "@/public/Images/Shoes4.jpg"
import shoes5 from "@/public/Images/Shoes5.jpg"
import shoes6 from "@/public/Images/Shoes6.jpg"
import shoes7 from "@/public/Images/Shoes7.jpg"
import shoes8 from "@/public/Images/Shoes8.jpg"
import shoes9 from "@/public/Images/Shoes9.jpg"
import { useCart } from '../Cart/CartContext'
import { useWishlist } from '../Wishlist/WishlistContext'
import Link from 'next/link'


// const newArrivalData = [
//   {
//     "id": "newA1",
//     "image": "/NewArrival-1.webp",
//     "secondImage": "/NewArrival-2.webp",
//     "brand": "Iguera",
//     "title": "Short sleeve maternity  top with button detail",
//     "lessPrice": "$98.00",
//     "price": "$85.00",
//     "off": "-40% oFF"
//   },
//   {
//     "id": "newA2",
//     "image": "/NewArrival-3.webp",
//     "secondImage": "/NewArrival-4.webp",
//     "brand": "Dumark",
//     "title": "Training printed legging in purple",
//     "lessPrice": "$99.00",
//     "price": "$87.00",
//     "off": "-41% oFF"
//   },
//   {
//     "id": "newA3",
//     "image": "/NewArrival-5.webp",
//     "secondImage": "",
//     "brand": "Zenuro",
//     "title": "Maternity nursing short top with button detail",
//     "lessPrice": "$95.00",
//     "price": "$81.00",
//     "off": "-35% oFF"
//   },
//   {
//     "id": "newA4",
//     "image": "/NewArrival-6.webp",
//     "secondImage": "",
//     "brand": "Zenuro",
//     "title": "Tall high neck top in mesh with puff sleeve",
//     "lessPrice": "",
//     "price": "$80.00",
//     "off": ""
//   },
//   {
//     "id": "newA5",
//     "image": "/NewArrival-7.webp",
//     "secondImage": "",
//     "brand": "Zenuro",
//     "title": "Crop mesh top with cap sleeve in horoscope print",
//     "lessPrice": "",
//     "price": "$75.00",
//     "off": ""
//   },
//   {
//     "id": "newA6",
//     "image": "/NewArrival-8.webp",
//     "secondImage": "",
//     "brand": "Zenuro",
//     "title": "Tall Florence authentic leg jeans in washed black",
//     "lessPrice": "$35.00",
//     "price": "$22.00",
//     "off": "-31% oFF"
//   }
// ];

type ProductWithQty = {
  id: string;
  image: string;
  secondImage?: string;
  brand: string;
  title: string;
  price: string;
  lessPrice?: string;
  off?: string;
  quantity: number;
}



const Collections = () => {

  const { addToCart, cart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();


  return (
    <>
      <div className='Page-section relative overflow-hidden'>
        <div className='px-[5%] lg:px-[10%] py-30 md:py-32  pb-20 md:pb-25'>
          <DecoratedTitle>
            Our <br /> Collections
          </DecoratedTitle>
        </div>
      </div>

      {/* Casual fit collection */}
      <div className='px-[5%] lg:px-[10%] py-8 md:py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-8 items-center'>
          <div className='w-full lg:w-1/2'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5'>
              {NewArrivalsData.slice(0, 3).map((item, index) => (
                <div key={index} className='sneaker-card product-card group flex flex-col'>
                  <div className='overflow-hidden relative aspect-square group bg-gray-100 rounded-lg'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className={`w-full h-full object-cover transition-all duration-500 ${item.secondImage ? "group-hover:scale-110 group-hover:opacity-0" : "group-hover:scale-110"}`}
                    />

                    {item.secondImage && (
                      <Image
                        src={item.secondImage}
                        alt={item.title}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500'
                      />
                    )}
                  </div>

                  <div className='py-4 flex flex-col grow'>
                    <span className='Exo text-xs font-semibold text-gray-400 uppercase tracking-wider'>{item.brand}</span>

                    <h2 className='Exo text-base text-gray-800 font-medium mt-2 mb-3 hover:text-black cursor-pointer line-clamp-2 min-h-[3rem]'>
                      {item.title}
                    </h2>

                    <div className='mt-auto'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h5 className='Exo text-sm font-medium line-through text-gray-400'>{item.lessPrice}</h5>

                        <span className='bg-red-500 text-white px-2 py-0.5 rounded text-[10px] Exo font-bold uppercase'>
                          {item.off}
                        </span>
                      </div>

                      <div className='flex items-center gap-4 relative overflow-hidden'>
                        <h5 className='Exo font-bold text-lg text-gray-900'>{item.price}</h5>

                        <div className='flex items-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                          <Icon
                            icon="lets-icons:view"
                            className='text-black hover:opacity-60 cursor-pointer transition-all duration-300'
                            width="20"
                            height="20"
                          />
                          <Icon
                            icon={wishlist.includes(item.id) ? "eva:heart-fill" : "eva:heart-outline"}
                            onClick={() => toggleWishlist(item.id)}
                            className={`cursor-pointer transition-all duration-300 delay-75 ${wishlist.includes(item.id) ? "text-red-500" : "text-black hover:opacity-60"}`}
                            width="20"
                            height="20"
                          />
                          <Icon
                            onClick={() => addToCart(item.id)}
                            icon="akar-icons:cart"
                            className='text-black hover:opacity-60 cursor-pointer transition-all duration-300 delay-150'
                            width="20"
                            height="20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='w-full lg:w-1/2 bg-[#f8f9fa] rounded-lg'>
            <div className='p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20'>
              <h2 className='Exo text-2xl sm:text-3xl lg:text-4xl mb-4 font-semibold text-gray-800'>
                CASUAL FIT SELECTION
              </h2>

              <p className='Exo text-sm sm:text-base lg:text-lg mb-4 text-gray-700'>
                Globally reintermediate intermandated best practices with best-of-breed e-markets. Dinamically matrix
                complelling architectures for cooperative catalyst for change.
              </p>

              <p className='Exo text-sm sm:text-base lg:text-lg mb-4 text-gray-700'>
                The combination of high quality product, user-friendly interface and flexible customization makes this
                theme an ideal solution for any online store.
              </p>

              <p className='Exo text-sm sm:text-base lg:text-lg mb-4 text-gray-700'>
                Our collection is designed to provide comfort, style, and quality. Remember that you can always return or exchange.
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 pt-8 lg:pt-20'>
          {NewArrivalsData.slice(3, 9).map((item, index) => (
            <div key={index} className='sneaker-card product-card group'>
              <div className='overflow-hidden relative aspect-square group bg-gray-100 rounded-lg'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className={`w-full h-full object-cover transition-all duration-500 ${item.secondImage ? "group-hover:scale-110 group-hover:opacity-0" : "group-hover:scale-110"}`}
                />

                {item.secondImage && (
                  <Image
                    src={item.secondImage}
                    alt={item.title}
                    width={500}
                    height={500}
                    className='w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500'
                  />
                )}
              </div>

              <div className='py-4 flex flex-col grow'>
                <span className='Exo text-xs font-semibold text-gray-400 uppercase tracking-wider'>{item.brand}</span>

                <h2 className='Exo text-base text-gray-800 font-medium mt-2 mb-3 hover:text-black cursor-pointer line-clamp-2 min-h-[3rem]'>
                  {item.title}
                </h2>

                <div className='mt-auto'>
                  <div className='flex items-center gap-3 mb-2'>
                    <h5 className='Exo text-sm font-medium line-through text-gray-400'>{item.lessPrice}</h5>

                    <span className='bg-red-500 text-white px-2 py-0.5 rounded text-[10px] Exo font-bold uppercase'>
                      {item.off}
                    </span>
                  </div>

                  <div className='flex items-center gap-4 relative overflow-hidden'>
                    <h5 className='Exo font-bold text-lg text-gray-900'>{item.price}</h5>

                    <div className='flex items-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                      <Icon
                        icon="lets-icons:view"
                        className='text-black hover:opacity-60 cursor-pointer transition-all duration-300'
                        width="20"
                        height="20"
                      />
                      <Icon
                        icon={wishlist.includes(item.id) ? "eva:heart-fill" : "eva:heart-outline"}
                        onClick={() => toggleWishlist(item.id)}
                        className={`cursor-pointer transition-all duration-300 delay-75 ${wishlist.includes(item.id) ? "text-red-500" : "text-black hover:opacity-60"}`}
                        width="20"
                        height="20"
                      />
                      <Icon
                        onClick={() => addToCart(item.id)}
                        icon="akar-icons:cart"
                        className='text-black hover:opacity-60 cursor-pointer transition-all duration-300 delay-150'
                        width="20"
                        height="20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Running collection */}
      <div className='px-[5%] lg:px-[10%] py-8 md:py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-1/2 bg-[#f8f9fa] rounded order-1 lg:order-none'>
            <div className='p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20'>
              <h2 className='Exo text-2xl sm:text-3xl lg:text-4xl mb-4 font-semibold text-gray-800'>
                RUNNING COLLECTION
              </h2>

              <p className='Exo text-sm sm:text-base lg:text-lg mb-4 text-gray-700'>
                Globally reintermediate intermandated best practices with best-of-breed e-markets. Dinamically matrix
                complelling architectures for cooperative catalyst for change.
              </p>

              <p className='Exo text-sm sm:text-base lg:text-lg mb-4 text-gray-700'>
                The combination of high quality product, user-friendly interface and flexible customization makes this
                theme an ideal solution for any online store.
              </p>

              <p className='Exo text-sm sm:text-base lg:text-lg mb-4 text-gray-700'>
                Our collection is designed to provide comfort, style, and quality. Remember that you can always return or exchange.
              </p>
            </div>
          </div>

          <div className='w-full lg:w-1/2 order-2 lg:order-none'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5'>
              {SneakerData.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <div className="sneaker-card product-card group">
                    <div className="sneaker-img overflow-hidden">
                      <Link href={`/Pages/ShoesProduct/${item.id}`}>
                        <Image
                          src={item.image}
                          width={500}
                          height={500}
                          alt={item.title}
                          className="w-full h-full group-hover:scale-110 transition-all duration-300"
                        />
                      </Link>
                    </div>

                    <div className="py-3">
                      <Link href={`/Pages/ShoesProduct/${item.id}`}>
                        <span className="Exo text-gray-700">{item.brand}</span>
                        <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">
                          {item.title}
                        </h2>
                      </Link>

                      <div className="flex items-center relative gap-3 overflow-hidden">
                        <h5 className="Exo font-semibold text-gray-700">{item.price}</h5>
                        <div className="product-options flex items-center gap-2">
                          <Link href={`/Pages/ShoesProduct/${item.id}`}>
                            <Icon
                              icon="lets-icons:view"
                              width="24"
                              height="24"
                              className="text-gray-700 product-option1 view-btn hover:text-black"
                            />
                          </Link>

                          <Icon
                            icon={wishlist.includes(item.id) ? "eva:heart-fill" : "eva:heart-outline"}
                            onClick={() => toggleWishlist(item.id)}
                            className={`
                          cursor-pointer product-option2 wishlist-btn hover:text-black 
                          ${wishlist.includes(item.id) ? "text-red-500!" : "text-gray-700"}
                        `}
                            width="24"
                            height="24"
                          />

                          <Icon
                            onClick={() => addToCart(item.id)}
                            icon="akar-icons:cart"
                            className="text-gray-700 product-option3 cart-btn hover:text-black"
                            width="24"
                            height="24"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 md:gap-8 pt-6 lg:pt-10'>
          {SneakerData.slice(3, 9).map((item, index) => (
            <div key={index}>
              <div className="sneaker-card product-card group">
                <div className="sneaker-img overflow-hidden">
                  <Link href={`/Pages/ShoesProduct/${item.id}`}>
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      alt={item.title}
                      className="w-full h-full group-hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                </div>

                <div className="py-3">
                  <Link href={`/Pages/ShoesProduct/${item.id}`}>
                    <span className="Exo text-gray-700">{item.brand}</span>
                    <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>

                  <div className="flex items-center relative gap-3 overflow-hidden">
                    <h5 className="Exo font-semibold text-gray-700">{item.price}</h5>
                    <div className="product-options flex items-center gap-2">
                      <Link href={`/Pages/ShoesProduct/${item.id}`}>
                        <Icon
                          icon="lets-icons:view"
                          width="24"
                          height="24"
                          className="text-gray-700 product-option1 view-btn hover:text-black"
                        />
                      </Link>

                      <Icon
                        icon={wishlist.includes(item.id) ? "eva:heart-fill" : "eva:heart-outline"}
                        onClick={() => toggleWishlist(item.id)}
                        className={`
                          cursor-pointer product-option2 wishlist-btn hover:text-black 
                          ${wishlist.includes(item.id) ? "text-red-500!" : "text-gray-700"}
                        `}
                        width="24"
                        height="24"
                      />

                      <Icon
                        onClick={() => addToCart(item.id)}
                        icon="akar-icons:cart"
                        className="text-gray-700 product-option3 cart-btn hover:text-black"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Collections