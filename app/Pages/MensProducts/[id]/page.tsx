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

        <div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails