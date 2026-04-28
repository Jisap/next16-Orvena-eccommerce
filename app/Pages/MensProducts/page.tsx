"use client"

import MensProductData from "@/app/JsonData/MensProduct.json"
import { Icon } from "@iconify/react"
import Image from 'next/image'
import Link from "next/link"
import { useCart } from "../Cart/CartContext"
import { useWishlist } from "../Wishlist/WishlistContext"
import { useState } from "react"


type product = typeof MensProductData[0];

const sortOptions = [
  { key: "default", label: "Default" },
  { key: "latest", label: "Latest" },
  { key: "oldest", label: "Oldest" },
  { key: "low", label: "Price: Low to High" },
  { key: "high", label: "Price: High to Low" },
];


const getIdNumber = (id: string | number) =>                                    // 1. Definimos el helper fuera del componente o de la función sort para mayor eficiencia
  typeof id === "string" ? parseInt(id.replace(/\D/g, "")) : id;

const parsePrice = (price: string) => Number(price.replace(/[^0-9.-]+/g, ""));  // 2. Helper para limpiar el precio de forma segura

const MensProducts = () => {
  const [sortOption, setSortOption] = useState("oldest");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(16);

  const sortedProducts = [...MensProductData].sort((a, b) => {
    switch (sortOption) {
      case "low":
        return parsePrice(a.price) - parsePrice(b.price);
      case "high":
        return parsePrice(b.price) - parsePrice(a.price);
      case "latest":
        return getIdNumber(b.id) - getIdNumber(a.id);
      case "oldest":
        return getIdNumber(a.id) - getIdNumber(b.id);
      default:
        // Si se quieres que el caso "default" también ordene por oldest:
        return getIdNumber(a.id) - getIdNumber(b.id);
    }
  });

  const { addToCart, cart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();


  return (
    <>
      <div className='Page-section relative'>
        <div className='px-[5%] lg:px-[10%] py-40 pb-10'>
          <h2 className='text-5xl md:text-7xl lg:text-9xl text-gray-300 font-bold Exo uppercase'>
            Men Clothing
          </h2>

          <div className='absolute top-1/2 right-0 translate-y-4/2 md:translate-y-1/2 w-[60%] md:w-[40%] bg-gray-100 h-10'></div>
          <div className='absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[8%] bg-gray-100 h-10'></div>
        </div>
      </div>

      <div className="px-[5%] lg:px-[10%] py-20">
        <div className="py-5 mb-10 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-baseline gap-2">
            <div className="Exo text-2xl font-semibold text-gray-700">Showing</div>
            <div className="text-gray-500 font-medium">({MensProductData.length}) products</div>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2 cursor-pointer border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-2 transition-colors duration-200"
            >
              <Icon icon="lucide:sort-desc" className="text-gray-500" />
              <span className="text-gray-600 font-medium">Sort:</span>
              <span className="text-gray-900">{sortOptions.find((o) => o.key === sortOption)?.label}</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-xl z-20 overflow-hidden">
                {sortOptions.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => { setSortOption(option.key); setDropdownOpen(false) }}
                    className={`w-full text-left cursor-pointer px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${sortOption === option.key ? 'bg-gray-50 text-black font-semibold' : 'text-gray-600'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sortedProducts.slice(0, visibleCount).map((product: product, index: number) => (
          <div key={index} className="sneaker-card product-card group">
            <Link href={`/Pages/MensProducts/${product.id}`}>
              <div className="overflow-hidden rounded-2xl relative group">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className={`w-full h-full transition-all duration-300 group-hover:scale-105 ${product.secondImage ? "group-hover:opacity-0" : ""}`}
                />

                {product.secondImage && (
                  <Image
                    src={product.secondImage}
                    alt={`${product.title} second image`}
                    width={500}
                    height={500}
                    className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default MensProducts