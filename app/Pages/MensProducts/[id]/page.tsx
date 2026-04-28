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
import DiscoverButton from '@/app/Components/Button'



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

            <DiscoverButton
              onClick={() => toggleWishlist(product.id)}
              className='py-4'
            >
              <div className='flex items-center gap-4'>
                <Icon
                  icon="eva:heart-outline"
                  width={24}
                  height={24}
                />
                Wishlist
              </div>
            </DiscoverButton>
          </div>

          <p>
            Categories: Active, Fashion Hoodies & Sweatsshirts, Jackets & Coats, Jeans, men Clothing, Pants, Shirts,
            Shorts, Socks, Suit & sport Coats.
          </p>
        </div>
      </div>

      <div className='px-[5%] lg:px-[10%] py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div>
            <h2 className='Exo font-semibold text-5xl mb-5'>
              Description
            </h2>

            <p className='text-gray-600 tracking-wide'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Perferendis sit amet consectetur adipisicing elit. Quisquam, quod. Voluptatum, rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem.
            </p>

            <p className='text-gray-600 tracking-wide mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Perferendis sit amet consectetur adipisicing elit. Quisquam, quod. Voluptatum, rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem voluptatum rerum voluptatem.
            </p>
          </div>

          <div className='mt-5 lg:mt-0'>
            <h2 className='Exo font-semibold text-5xl mb-5'>Information</h2>

            <div className='mb-4'>
              <h3 className='Exo font-semibold'>Shipping</h3>

              <p className='text-gray-600 tracking-wide'>
                We currently offer free shipping worldwide on all orders over $100.
              </p>
            </div>

            <div className='mb-4'>
              <h3 className='Exo font-semibold'>Sizing</h3>

              <p className='text-gray-600 tracking-wide'>
                Fits true to size. Do you need size advice?.
              </p>
            </div>

            <div className='mb-4'>
              <h3 className='Exo font-semibold'>Return & Exchange</h3>

              <p className='text-gray-600 tracking-wide'>
                If your are not satisfied with your purchase you can return it to us within 14 days for an exchange or refund. More Info.
              </p>
            </div>

            <div className='mb-4'>
              <h3 className='Exo font-semibold'>Assistance</h3>

              <p className='text-gray-600 tracking-wide'>
                Call us at 1-800-555-0199 or email us at support-orvena@email.com
              </p>
            </div>
          </div>
        </div>

        <h2 className='Exo font-semibold text-5xl my-10 mb-5'>
          Related Products
        </h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 4 },
            1000: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
          }}
        >
          {MensProductData.map((product, index) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <SwiperSlide key={index} className='sneaker-card product-card group'>
                <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-gray-100 mb-6 group cursor-pointer">
                  <Link href={`/Pages/MensProducts/${product.id}`} className="block h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${product.secondImage ? "group-hover:opacity-0" : ""}`}
                    />

                    {product.secondImage && (
                      <Image
                        src={product.secondImage}
                        alt={`${product.title} second image`}
                        fill
                        className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    )}
                  </Link>
                </div>

                <div className="flex flex-col grow px-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{product.brand}</span>
                  </div>

                  <Link href={`/Pages/MensProducts/${product.id}`} className="group-hover:text-gray-600 transition-colors">
                    <h2 className="Exo text-[15px] text-gray-900 font-semibold leading-tight mb-3 line-clamp-2 min-h-[20px]">
                      {product.title}
                    </h2>
                  </Link>

                  <div className='mt-auto'>
                    {(product.lessPrice || product.off) ? (
                      <div className='flex items-center gap-3 mb-2'>
                        {product.lessPrice && (
                          <h5 className='Exo text-sm font-medium line-through text-gray-400'>{product.lessPrice}</h5>
                        )}
                        {product.off && (
                          <span className='bg-red-500 text-white px-2 py-0.5 rounded text-[10px] Exo font-bold uppercase'>
                            {product.off}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className='flex items-center mb-5'>
                        <div className='w-6 h-[2px] bg-red-500 rounded-full'></div>
                      </div>
                    )}

                    <div className='flex items-center gap-4 relative overflow-hidden'>
                      <h5 className='Exo font-bold text-lg text-gray-900'>{product.price}</h5>

                      <div className='flex items-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                        <Link href={`/Pages/MensProducts/${product.id}`}>
                          <Icon
                            icon="lets-icons:view"
                            className='text-black hover:opacity-60 cursor-pointer transition-all duration-300'
                            width="20"
                            height="20"
                          />
                        </Link>
                        <Icon
                          icon={isWishlisted ? "eva:heart-fill" : "eva:heart-outline"}
                          onClick={() => toggleWishlist(product.id)}
                          className={`cursor-pointer transition-all duration-300 delay-75 ${isWishlisted ? "text-red-500" : "text-black hover:opacity-60"}`}
                          width="20"
                          height="20"
                        />
                        <Icon
                          onClick={() => addToCart(product.id)}
                          icon="akar-icons:cart"
                          className='text-black hover:opacity-60 cursor-pointer transition-all duration-300 delay-150'
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </>
  )
}

export default ProductDetails