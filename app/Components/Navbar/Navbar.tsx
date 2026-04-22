"use client"

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
  return (
    <div>Navbar</div>
  )
}

export default Navbar