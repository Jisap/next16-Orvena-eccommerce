import Image, { StaticImageData } from 'next/image'
import category1 from "@/public/Images/Shop-banner-category-1.jpg"
import category2 from "@/public/Images/Shop-banner-category-2.jpg"
import category3 from "@/public/Images/Shop-banner-category-3.jpg"
import Link from 'next/link'

interface CategoryCardProps {
  image: StaticImageData;
  title: string;
  alt: string;
}

const CategoryCard = ({ image, title, alt }: CategoryCardProps) => (
  <div>
    <div className='discover-img relative'>
      <Image src={image} alt={alt} className='w-full h-full rounded' />
      <button className='btn btn-left bg-white absolute bottom-5 left-5 z-10 font-semibold'>
        <span>Shop Now</span>
      </button>
    </div>
    <div className='mt-5'>
      <h2 className='Exo text-3xl md:text-4xl font-semibold text-gray-700 uppercase'>
        {title}
      </h2>
    </div>
  </div>
);

const sports = [
  "Fitness & Yoga",
  "Fotball",
  "Tennis",
  "Swimwear",
  "Basketball",
  "Athletics",
  "Dancewear",
  "Boxing"
];

const ShopBannerCategory = () => {
  return (
    <>
      <div className='px-[5%] lg:px-[10%] py-10 lg:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          
          <CategoryCard 
            image={category1} 
            title="LEGGINS" 
            alt="category1" 
          />

          <div className='Shop-cate-banner p-10'>
            <h2 className='Exo text-5xl font-semibold mb-5'>SHOP BY SPORT</h2>

            <div className='flex flex-col gap-1 mt-10'>
              {sports.map((sport) => (
                <Link
                  key={sport}
                  href="#"
                  className='text-gray-500 font-medium text-lg hover:text-black transition-all duration-300 hover:translate-x-1 inline-block group'
                >
                  {sport}
                </Link>
              ))}
            </div>
          </div>

          <CategoryCard 
            image={category2} 
            title="JACKETS & COATS" 
            alt="category2" 
          />

          <CategoryCard 
            image={category3} 
            title="TOPS" 
            alt="category3" 
          />
          
        </div>
      </div>
    </>
  )
}

export default ShopBannerCategory