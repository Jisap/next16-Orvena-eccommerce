"use client"

import DecoratedTitle from '@/app/Components/DecoratedTitle'
import Image from 'next/image'

import { useState } from 'react'
import MensProductData from "@/app/JsonData/MensProduct.json"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import { useCart } from '../../Cart/CartContext'
import { useWishlist } from '../../Wishlist/WishlistContext'
import { useParams } from 'next/navigation'



const ProductDetails = () => {

  const params = useParams();
  const { id } = params;
  const product = MensProductData.find((product) => product.id.toString() === id);

  if (!product) {
    return (
      <div className='px-[5%] py-20 text-center text-2xl font-semibold'>
        Product Not Found
      </div>
    )
  }

  const { addToCart, cart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product.id);
  };

  const handleClearSize = () => {
    setSelectedSize(null);
  };

  const isInWishlist = wishlist.includes(product.id);
  const isInCart = cart.includes(product.id);

  return (
    <>
      <div className='Page-section relative overflow-hidden'>
        <div className='px-[5%] lg:px-[10%] py-40 pb-10'>
          <DecoratedTitle>
            Product <br /> Details
          </DecoratedTitle>
        </div>
      </div>

      <div className='px-[5%] lg:px-[10%] py-20 pt-20 flex flex-col lg:flex-row gap-10 border-b border-gray-300'>
        <div className='w-full lg:w-1/3 flex justify-center'>
          <div className='rounded-2xl overflow-hidden w-full md:w-1/2 lg:w-full'>
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col gap-5'>
          <div>
            <span className='text-gray-700 bg-prim px-3 py-1 rounded-full font-semibold'>
              {product.brand}
            </span>
          </div>

          <h1 className='text-4xl lg:text-6xl font-medium Exo text-gray-800'>
            {product.title}
          </h1>

          <div className='flex items-center gap-4'>
            <h2 className='text-xl font-semibold Exo'>{product.price}</h2>
            <span className='line-through text-gray-500'>{product.lessPrice}</span>
            <span className='bg-red-500 text-white px-3 rounded Exo font-medium'>{product.off}</span>
          </div>

          <p className='text-gray-600 mt-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maiores, magni officiis soluta, odio dolorum adipisci dolores, illum amet dignissimos ab iusto quod aperiam deleniti fugit architecto quibusdam iure dicta.
          </p>

          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum consectetur dolorum tenetur voluptates sed quis, quos odit aperiam excepturi nisi unde, repellat delectus sint, molestias maiores esse aliquam error!
          </p>

          <div className='flex items-center gap-2'>
            <h3 className='Exo tracking-wide font-semibold uppercase'>clothing-size &nbsp; -</h3>

            <div className='flex gap-3 ml-4'>
              {["XS", "S", "M", "L", "XL", "XX"].map((size) => (
                <div key={size} className='relative group'>
                  <button
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-3 py-1 cursor-pointer border rounded text-sm font-medium transition 
                      ${selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-400 hover:border-black hover:text-black"
                      }`
                    }
                  >
                    {size}
                  </button>

                  <div className='absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none'>
                    {size}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='flex items-center'>
              <Icon
                icon="fluent:checkmark-circle-sparkle-24-regular"
                className='text-green-700'
                width="24"
                height="24"
              />
              <span className='ml-2 text-green-700 Exo font-semibold'>In Stock</span>
            </div>

            <div>
              {selectedSize && (
                <button
                  onClick={handleClearSize}
                  className='px-4 py-1 border border-red-500 text-red-500 font-medium rounded hover:bg-red-500 hover:text-white transition cursor-pointer'
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex items-center bg-black p-1'>
              <div className='bg-white flex items-center'>
                <span
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className='px-3 py-1 text-2xl font-semibold cursor-pointer'
                > - </span>

                <span className='px-3 py-1 font-semibold border-e border-s border-gray-300'>
                  {quantity}
                </span>

                <span
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-3 py-1 text-2xl font-semibold cursor-pointer'
                > + </span>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || isInCart}
                className={`
                  px-6 py-3 rounded font-medium flex items-center gap-2 transition 
                  ${selectedSize
                    ? "text-white cursor-pointer"
                    : "text-gray-400 cursor-not-allowed"
                  }  
                `}
              >
                <Icon
                  icon="akar-icons:cart"
                  width={24}
                  height={24}
                />
                {isInCart ? "In Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails