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
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import { useWishlist } from "../Wishlist/WishlistContext"
import { useCart } from "../Cart/CartContext"



type ProductWithQty = {
  id: string;
  image: string;
  secondImage?: string;
  brand: string;
  title: string;
  price: string;
  lessPrice?: string;
  off?: string;
  quantity: number;
}

const CartPage = () => {
  const [wishlist, toggleWishlist] = useWishlist();
  const [cart, addToCart, removeFromCart] = useCart();

  const [quantities, setQuantities] = useState(            // Inicializa las cantidades a 1 por cada producto en el carrito
    cart.reduce((acc: Record<string, number>, id) => {
      acc[id] = 1;
      return acc;
    }, {})
  );

  const handleQtyChange = (id: string, qty: number) => {   // Actualiza la cantidad del producto
    if (qty < 1) return;
    setQuantities({ ...quantities, [id]: qty })
  };

  const cartItems: ProductWithQty[] = cart.map((id) => {     // Mapea los productos del carrito
    const product =                                          // Busca el producto en los diferentes archivos JSON
      MensProductData.find((p) => p.id === id) ||
      WomensProductData.find((p) => p.id === id) ||
      SneakerData.find((p) => p.id === id) ||
      NewArrivalsData.find((p) => p.id === id) ||
      RandomProductData.find((p) => p.id === id) ||
      null;

    if (!product) return null;

    return {
      ...product,                                            // Agrega la cantidad al producto
      quantity: quantities[id] || 1,
    };
  }).filter(Boolean) as ProductWithQty[];                    // Filtra los productos que no existen

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item?.price.replace("$", "") || "0") * (item?.quantity || 1), 0
  );

  if (cartItems.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500 ">
        Your Cart is empty.
      </div>
    )
  }


  return (
    <>
      <div className="px-[5%] lg:px-[10%] py-20 mt-10">
        <h2 className="text-5xl font-medium mb-10">Shopping Cart</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto rounded-2xl">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">SubTotal</th>
                <th className="text-left py-3 px-4">Remove</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition">

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CartPage