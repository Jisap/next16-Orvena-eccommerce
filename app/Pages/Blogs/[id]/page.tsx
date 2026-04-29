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
import { Icon } from "@iconify/react";


const BlogsData = [
  {
    id: 1,
    img: blog1,
    date: "05/26",
    title: "Yoga at home. Feel the transformation in only several weeks",
    desc: "Practicing yoga at home can be a powerful way to improve both physical and mental well-being.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc1: "Start with short daily sessions and gradually increase the duration as your flexibility improves. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc2: "Focus on breathing techniques to enhance relaxation and concentration during each pose. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc3: "Consistency is key—just a few weeks of regular practice can lead to noticeable changes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!"
  },
  {
    id: 2,
    img: blog2,
    date: "08/26",
    title: "Sports equipments to make your workout more fun",
    desc: "Using the right equipment can transform your workouts into a more engaging experience. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc1: "Resistance bands, dumbbells, and jump ropes are affordable and versatile tools. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc2: "Incorporating variety helps prevent boredom and keeps your motivation high. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc3: "Choose equipment that fits your fitness level and personal goals. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!"
  },
  {
    id: 3,
    img: blog3,
    date: "09/26",
    title: "Several prescription for a healthier meal – keto food",
    desc: "Keto meals focus on low carbohydrates and high healthy fats to boost metabolism. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc1: "Incorporate foods like avocados, nuts, and lean proteins into your diet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc2: "Planning meals in advance helps maintain consistency and avoid unhealthy choices. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc3: "Always balance your diet and consult a professional when making major changes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!"
  },
  {
    id: 4,
    img: blog4,
    date: "09/26",
    title: "5 Exercises for Lower Back Pain",
    desc: "Lower back pain can be reduced with targeted strengthening and stretching exercises. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc1: "Exercises like bridges and pelvic tilts help improve core stability. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc2: "Stretching the hamstrings and hip flexors can relieve tension in the lower back. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc3: "Perform these exercises regularly but avoid movements that cause sharp pain. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!"
  },
  {
    id: 5,
    img: blog5,
    date: "09/26",
    title: "Tips to running in the heat",
    desc: "Running in hot weather requires extra precautions to stay safe and hydrated. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc1: "Run during early mornings or evenings to avoid peak temperatures. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc2: "Wear lightweight, breathable clothing to help regulate body temperature. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc3: "Always carry water and listen to your body to prevent overheating. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!"
  },
  {
    id: 6,
    img: blog6,
    date: "09/26",
    title: "Loss weight with simple daily routine",
    desc: "Losing weight doesn’t require extreme measures—small daily habits make a big difference. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc1: "Incorporate short workouts and stay active throughout the day. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc2: "Maintain a balanced diet and avoid processed foods when possible. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!",
    desc3: "Track your progress and stay consistent for long-term results. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi, repellendus molestias laborum eveniet vitae? Mollitia perferendis quo magnam, repudiandae possimus fugiat tenetur ullam quas? Dolorem esse nemo laboriosam dignissimos!"
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

      <div className="px-[5%] lg:px-[10%] py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contenido Principal del Artículo */}
          <article className="w-full lg:w-8/12">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-black text-white text-[10px] Exo font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                  Wellness
                </span>
                <span className="text-gray-400 text-xs Exo font-medium uppercase tracking-widest italic border-l pl-4 border-gray-200">
                  Published on {blog.date}, 2026
                </span>
              </div>
              <h2 className="Exo text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-8">
                {blog.title}
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl mb-12 shadow-2xl shadow-gray-200/50">
              <Image
                src={blog.img}
                alt={blog.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none">
              <p className="Exo text-xl leading-relaxed text-gray-800 font-medium mb-8 border-l-4 border-black pl-8 italic">
                {blog.desc}
              </p>
              <div className="space-y-6">
                <p className="Exo text-lg leading-relaxed text-gray-600 tracking-wide">
                  {blog.desc1}
                </p>
                <p className="Exo text-lg leading-relaxed text-gray-600 tracking-wide">
                  {blog.desc2}
                </p>
                <div className="bg-gray-50 p-10 rounded-2xl border-l-4 border-gray-200 my-10">
                  <p className="Exo text-lg italic text-gray-700 leading-relaxed">
                    "Yoga is not just a workout, it's a way of life. The mental benefits far outweigh the physical ones after just a few weeks."
                  </p>
                  <span className="block mt-4 Exo font-bold text-sm uppercase tracking-widest text-black">— Editorial Team</span>
                </div>
                <p className="Exo text-lg leading-relaxed text-gray-600 tracking-wide">
                  {blog.desc3}
                </p>
              </div>
            </div>

            {/* Tags & Social Share */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="Exo text-xs font-bold uppercase tracking-widest text-gray-400">Tags:</span>
                <div className="flex gap-2">
                  {['Health', 'Tips', 'Lifestyle'].map(tag => (
                    <span key={tag} className="Exo text-xs font-medium text-gray-600 hover:text-black cursor-pointer bg-gray-50 px-3 py-1 rounded-md transition-colors uppercase tracking-widest">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="Exo text-xs font-bold uppercase tracking-widest text-gray-400 text-center">Share this article:</span>
                <div className="flex gap-3">
                  {['ri:facebook-fill', 'ri:twitter-x-fill', 'ri:instagram-line'].map(social => (
                    <div key={social} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black cursor-pointer transition-all duration-300">
                      <Icon icon={social} width="18" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar - Formulario de Comentarios */}
          <aside className="w-full lg:w-4/12">
            <div className="lg:sticky lg:top-32 p-8 lg:p-10 bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <h3 className="Exo text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight">Leave a Response</h3>

              <div className="space-y-6">
                <textarea
                  rows={4}
                  placeholder="Your thoughts..."
                  className="Exo w-full bg-gray-50 border-transparent border-2 focus:border-black outline-none rounded-xl px-5 py-4 transition-all duration-300 resize-none"
                ></textarea>

                <input type="text" placeholder="Full Name" className="Exo w-full bg-gray-50 border-transparent border-2 focus:border-black outline-none rounded-xl px-5 py-4 transition-all duration-300" />
                <input type="email" placeholder="Email Address" className="Exo w-full bg-gray-50 border-transparent border-2 focus:border-black outline-none rounded-xl px-5 py-4 transition-all duration-300" />

                <div className="flex items-start gap-3 mt-4">
                  <input type="checkbox" className="mt-1 accent-black" id="save-info" />
                  <label htmlFor="save-info" className="Exo text-xs leading-relaxed text-gray-400 select-none cursor-pointer">
                    Save my name and email in this browser for future comments.
                  </label>
                </div>

                <button className="w-full bg-black text-white Exo font-bold uppercase tracking-[0.2em] text-xs py-5 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10">
                  Post Your Comment
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default page