"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MensProductData from "@/app/JsonData/MensProduct.json"
import RandomProductData from "@/app/JsonData/RandomProducts.json"
import WomensProductData from "@/app/JsonData/WomensProduct.json"
import NewArrivalsData from "@/app/JsonData/NewArrivals.json"
import SneakerData from "@/app/JsonData/SneakerData.json"
import toast from "react-hot-toast"
import { useCart } from "../Cart/CartContext"

type Product = {
  id: string;
  image: string;
  secondImage?: string;
  brand: string;
  title: string;
  price: string;
  lessPrice?: string;
  off?: string;
}

const page = () => {

  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) return;

    const ids: string[] = JSON.parse(storedWishlist || "[]");
    setWishlistIds(ids);

    const products: Product[] = ids.map((id) => {
      return (
        MensProductData.find((p) => p.id === id) ||
        WomensProductData.find((p) => p.id === id) ||
        SneakerData.find((p) => p.id === id) ||
        NewArrivalsData.find((p) => p.id === id) ||
        RandomProductData.find((p) => p.id === id) ||
        null
      );
    }).filter(Boolean) as Product[];

    setWishlistProducts(products);
  }, []);

  const removeFromWishlist = (id: string) => {
    const updatedIds = wishlistIds.filter((itemId) => itemId !== id); // Actualizamos los ids
    setWishlistIds(updatedIds);

    setWishlistProducts((prev) => prev.filter((p) => p.id !== id));   // Actualizamos los productos
    localStorage.setItem("wishlist", JSON.stringify(updatedIds));
    toast.success("Removed from Wishlist");
  };

  const addToCart = useCart();


  return (
    <>
      <div className="px-[5%] lg:px-[10%] py-20">
        {wishlistProducts.length === 0 ? (
          <div className="flex justify-center items-center flex-col text-center py-20 text-gray-500 ">
            <Icon icon="proicons:heart" width="100" height="100" />

            <h3 className="Exo font-semibold text-3xl text-gray-800 my-2">Wishlist is empty</h3>

            <p className="tracking-wide">
              Your wishlist is currently empty. Search and save items to your cart
            </p>

            <Link href="/Pages/MensProducts" className="mt-5 px-4 py-2 bg-black rounded text-white text-xl">
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <h2 className="my-8 text-5xl font-semibold Exo">
              My Wishlist:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistProducts.map((item) => (
                <div key={item.id} className="">

                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default page