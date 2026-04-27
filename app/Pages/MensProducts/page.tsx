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
        <div className="py-5 mb-10 flex justify-between items-center">
          <div className="Exo text-2xl font-semibold text-gray-700">Showing</div>
          ({MensProductData.length}) products
        </div>

        <div className="relative cursor-pointer">

        </div>
      </div>
    </>
  )
}

export default MensProducts