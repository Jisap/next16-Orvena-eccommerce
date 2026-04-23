"use client"

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; }
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Men's", href: "/Pages/MensProducts/" },
  { label: "Women's", href: "/Pages/WomensProduct/" },
  { label: "Shoes's", href: "/Pages/ShoesProduct/" },
  { label: "Collections", href: "/Pages/Collections" },
  { label: "Blogs", href: "/Pages/Blogs" },
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const normalizePath = (path: string) => path.replace(/\/$/, "");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      {/* Navbar */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[5%] lg:px-[10%]
          ${scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="flex justify-between items-center py-3">
          <div className="flex justify-between items-center gap-5">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 bg-black rounded-lg px-2 pe-4 py-1">
                <h1 className="Luxur text-2xl md:text-4xl font-bold text-white tracking-widest">
                  Orvena
                </h1>
              </div>
            </Link>

            {/* Menu Links */}
            <nav className="hidden lg:flex space-x-3 ps-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    text-lg text-gray-700 nav-menu px-2 font-medium transition-all
                    ${normalizePath(pathname) === normalizePath(link.href)
                      ? "text-gray-950 border-b-2 border-t-2 border-black active-link"
                      : "text-black hover:text-black"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setIsLogin(true)
                setShowModal(true)
              }}
            >
              <Icon
                icon="solar:user-linear"
                width="35"
                height="35"
                className="p-1.5 border border-gray-500 rounded-full hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
              />
            </button>

            <div className="relative">
              <Link href="/Pages/Wishlist">
                <Icon
                  icon="ic:outline-favorite-border"
                  width="35"
                  height="35"
                  className="p-1.5 border border-gray-500 rounded-full hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
                />
              </Link>
            </div>

            <div className="relative">
              <Link href="/Pages/Cart">
                <Icon
                  icon="ic:outline-shopping-cart"
                  width="35"
                  height="35"
                  className="p-1.5 border border-gray-500 rounded-full hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
                />
              </Link>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar