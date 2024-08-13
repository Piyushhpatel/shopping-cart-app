"use client";

import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

const Navbar = ({ length }) => {
  const { cart } = useContext(AppContext);

  return (
    <div className="sticky z-[100] h-20 inset-x-0 top-0 w-full bottom-b border-gray-200 bg-black backdrop-blur-lg transition-all">
      <nav className="px-6 lg:px-0 flex justify-between items-center h-20 max-w-6xl mx-auto bg-black">
        <Link href="/">
          <p className="text-white font-bold text-2xl">Profile.fyi Shop</p>
        </Link>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <Link href="/">
            <p className="text-slate-100 hover:font-bold transition-all duration-300">
              Home
            </p>
          </Link>
          <div className="relative group">
            <Link href="/Cart">
              <FaShoppingCart className="text-2xl" />
            </Link>
            {cart.length !== 0 && (
              <div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animation-bounce rounded-full text-white">
                <p>{cart.length}</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
