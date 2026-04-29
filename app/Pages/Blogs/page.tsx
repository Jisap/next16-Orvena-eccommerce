"use client"

import DecoratedTitle from '@/app/Components/DecoratedTitle'
import Image from 'next/image';
import blog1 from "@/public/Images/blog-1.jpg"
import blog2 from "@/public/Images/blog-2.jpg"
import blog3 from "@/public/Images/blog-3.jpg"
import blog4 from "@/public/Images/blog-4.jpg"
import blog5 from "@/public/Images/blog-5.jpg"
import blog6 from "@/public/Images/blog-6.jpg"
import Link from 'next/link';
import DiscoverButton from '@/app/Components/Button';


const BlogsData = [
  {
    id: 1,
    img: blog1,
    date: "05/26",
    title: "Yoga at home. Feel the transformation in only several weeks"
  },
  {
    id: 2,
    img: blog2,
    date: "08/26",
    title: "Sports equipments to make your workout more fun"
  },
  {
    id: 3,
    img: blog3,
    date: "09/26",
    title: "Several prescription for a healthier meal – keto food"
  },
  {
    id: 4,
    img: blog4,
    date: "09/26",
    title: "5 Exercises for Lower Back Pain"
  },
  {
    id: 5,
    img: blog5,
    date: "09/26",
    title: "Tips to running in the heat"
  },
  {
    id: 6,
    img: blog6,
    date: "09/26",
    title: "Loss weight with simple daily routine"
  }
];

const Blogs = () => {
  return (
    <>

      <div className='Page-section relative overflow-hidden'>
        <div className='px-[5%] lg:px-[10%] py-40 pb-10 relative z-10'>
          <DecoratedTitle>
            Our <br /> Blogs
          </DecoratedTitle>
        </div>
      </div>

      <div className='px-[5%] lg:px-[10%] py-10 lg:py-20'>
        <div className='flex flex-wrap justify-between items-center gap-5 mb-20'>
          <div>
            <h2 className='Exo text-4xl uppercase font-semibold text-gray-800'>
              REY'S JOURNAL
            </h2>

            <p className='Exo text-gray-700 font-medium mt-1'>
              We write stuff too
            </p>
          </div>

          <DiscoverButton>
            READ MORE ARTICLES
          </DiscoverButton>
        </div>

        <div className='mt-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {BlogsData.map((blog, index) => (
              <div key={index}>
                <div className='blog-card group'>
                  <div className='overflow-hidden rounded-2xl'>
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={800}
                      height={800}
                      className='w-full h-full group-hover:scale-105 transition-all duration-300'
                    />
                  </div>

                  <div className='py-4'>
                    <div>
                      <h4 className='Exo font-semibold text-gray-800 mb-3'>{blog.date}</h4>
                    </div>

                    <div>
                      <h2 className='Exo text-2xl font-semibold text-gray-700 cursor-pointer hover:text-black'>
                        {blog.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs