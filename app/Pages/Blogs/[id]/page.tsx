"use client"

import DecoratedTitle from "@/app/Components/DecoratedTitle"
import { useParams } from "next/navigation"
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


const page = () => {

  const params = useParams();
  const { id } = params;
  const blog = BlogsData.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return (
      <div className='px-[5%] lg:px-[10%] py-20 text-center text-2xl font-semibold'>
        Blog Not Found
      </div>
    )
  }


  // Función para manejar títulos largos dividiéndolos en dos líneas
  const formatTitle = (title: string) => {
    if (title.length <= 15) return title;

    const words = title.split(' ');
    const mid = Math.ceil(words.length / 2);

    return (
      <span className="flex flex-col">
        <span className="block">{words.slice(0, mid).join(' ')}</span>
        <span className="block">{words.slice(mid).join(' ')}</span>
      </span>
    );
  };


  return (
    <>
      <div className='Page-section relative overflow-hidden'>
        <div className='px-[5%] lg:px-[10%] py-32 md:py-40 pb-10 relative z-10'>
          <DecoratedTitle
            className="text-4xl md:text-6xl lg:text-7xl leading-tight"
          >
            {formatTitle(blog.title)}
          </DecoratedTitle>
        </div>
      </div>
    </>
  )
}

export default page