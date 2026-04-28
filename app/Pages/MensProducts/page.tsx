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

      <div className="px-[5%] lg:px-[10%] pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {sortedProducts.slice(0, visibleCount).map((product: product, index: number) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div key={index} className="product-card group flex flex-col h-full">
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
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <button></button>
      </div>
    </>
  )
}

export default MensProducts