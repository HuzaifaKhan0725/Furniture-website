"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className=" container flex justify-between items-center py-4 px-6">
        {/* Logo or Title */}
        <section className="flex items-center">
          <h1 className="text-xl font-bold text-gray-300">
            Contact:(808) 555-0111
          </h1>
        </section>

        {/* Desktop Navigation */}
        <section className="hidden md:flex space-x-6 text-gray-500 items-center ml-auto">
          <Link href="/">
            <li
              className={`hover:text-blue-500 cursor-pointer ${
                pathName == "/" ? "text-blue-400 underline" : "text-gray-500"
              }`}
            >
              Home
            </li>
          </Link>
       
          <Link href="/product">
            <li
              className={`hover:text-blue-500 cursor-pointer ${
                pathName == "/product"
                  ? "text-blue-400 underline"
                  : "text-gray-500"
              }`}
            >
              Product
            </li>
          </Link>
          <Link href="/pages">
            <li
              className={`hover:text-blue-500 cursor-pointer ${
                pathName == "/pages"
                  ? "text-blue-400 underline"
                  : "text-gray-500"
              }`}
            >
              Pages
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`hover:text-blue-500 cursor-pointer ${
                pathName == "/about"
                  ? "text-blue-400 underline"
                  : "text-gray-500"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/Contact-us">
            <li
              className={`hover:text-blue-500 cursor-pointer ${
                pathName == "/Contact-us"
                  ? "text-blue-400 underline"
                  : "text-gray-500"
              }`}
            >
              Contact-us
            </li>
          </Link>
        </section>

        {/* Hamburger Icon (Mobile) */}
        <section className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FaBars className="text-xl text-gray-600" />
          </button>
        </section>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-0 w-full bg-white py-4 px-6 space-y-4 shadow-lg`}
      >
        <Link href="/">
          <li
            className={`hover:text-blue-500 cursor-pointer ${
              pathName == "/" ? "text-blue-400 underline" : "text-gray-500"
            }`}
          >
            Home
          </li>
        </Link>
        
        <Link href="/product">
          <li
            className={`hover:text-blue-500 cursor-pointer ${
              pathName == "/product"
                ? "text-blue-400 underline"
                : "text-gray-500"
            }`}
          >
            Product
          </li>
        </Link>
        <Link href="/pages">
          <li
            className={`hover:text-blue-500 cursor-pointer ${
              pathName == "/pages" ? "text-blue-400 underline" : "text-gray-500"
            }`}
          >
            Pages
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`hover:text-blue-500 cursor-pointer ${
              pathName == "/about" ? "text-blue-400 underline" : "text-gray-500"
            }`}
          >
            About
          </li>
        </Link>
        <Link href="/Contact-us">
          <li
            className={`hover:text-blue-500 cursor-pointer ${
              pathName == "/Contact-us"
                ? "text-blue-400 underline"
                : "text-gray-500"
            }`}
          >
            Contact-us
          </li>
        </Link>
    
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <FaTimes className="text-xl text-gray-600" />
        </button>
      </div>
    </div>
  );
}
