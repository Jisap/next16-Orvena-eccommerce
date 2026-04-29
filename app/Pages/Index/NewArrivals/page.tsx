"use client"

import DiscoverButton from '@/app/Components/Button'
import Image from 'next/image'
import NewArrivalsData from "@/app/JsonData/NewArrivals.json"
import { Icon } from '@iconify/react'
import { useCart } from "../../Cart/CartContext"
import { useWishlist } from "../../Wishlist/WishlistContext"




const NewArrivals = () => {

  const { addToCart } = useCart()
  const { toggleWishlist, wishlist } = useWishlist()

  return (
    <>
      <div className='px-[5%] lg:px-[10%] py-10 lg:py-20'>
        <div className='flex flex-wrap justify-between items-center gap-5 mb-20'>
          <h2 className='Exo text-4xl uppercase font-semibold text-gray-800'>
            New Arrivals
          </h2>

          <DiscoverButton>
            SHOP NOW
          </DiscoverButton>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-x-5 gap-y-10'>
          {NewArrivalsData.slice(0, 6).map((item, index) => (
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
    </>
  )
}


export default NewArrivals