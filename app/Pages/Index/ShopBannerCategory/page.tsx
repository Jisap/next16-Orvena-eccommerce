import Image from 'next/image'
import category1 from "@/public/Images/Shop-banner-category-1.jpg"
import category2 from "@/public/Images/Shop-banner-category-2.jpg"
import category3 from "@/public/Images/Shop-banner-category-3.jpg"
import Link from 'next/link'



const ShopBannerCategory = () => {
  return (
    <>
      <div className='px-[5%] lg:px-[10%] py-10 lg:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <div className='discover-img relative'>
              <Image src={category1} alt="category1" className='w-full h-full rounded' />

              <button className='btn btn-left bg-white absolute bottom-5 left-5 z-10 font-semibold'>
                <span>Shop Now</span>
              </button>
            </div>

            <div className='mt-5'>
              <h2 className='Exo text-3xl md:text-4xl font-semibold text-gray-700'>
                LEGGINS
              </h2>
            </div>
          </div>

          <div className='Shop-cate-banner p-10'>
            <h2 className='Exo text-5xl font-semibold mb-5'>SHOP BY SPORT</h2>

            <div className='flex flex-col gap-1 mt-10'>
              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Fitness & Yoga
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Fotball
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Tennis
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Swimwear
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Basketball
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Athletics
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Dancewear
              </Link>

              <Link
                href="#"
                className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
              >
                Boxing
              </Link>
            </div>
          </div>

          <div>
            <div className='discover-img relative'>
              <Image
                src={category2}
                alt="category2"
                className='w-full h-full rounded'
              />

              <button className='btn btn-left bg-white absolute bottom-5 left-5 z-10 font-semibold'>
                <span>Shop Now</span>
              </button>
            </div>

            <div className='mt-5'>
              <h2 className='Exo text-3xl md:text-4xl font-semibold text-gray-700'>
                JACKETS & COATS
              </h2>
            </div>
          </div>

          <div>
            <div className='discover-img relative'>
              <Image
                src={category3}
                alt="category2"
                className='w-full h-full rounded'
              />

              <button className='btn btn-left bg-white absolute bottom-5 left-5 z-10 font-semibold'>
                <span>Shop Now</span>
              </button>
            </div>

            <div className='mt-5'>
              <h2 className='Exo text-3xl md:text-4xl font-semibold text-gray-700'>
                TOPS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopBannerCategory