"use client";

import React from "react";
import Image from "next/image";
import { FaCheck, FaAngleDown } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <div>
      <div
        style={{ backgroundColor: "#272343" }}
        className="flex items-center justify-around h-[55px] px-4 py-2 text-white"
      >
        {/* Left Section */}
        <section className="flex items-center space-x-2">
          <FaCheck className="text-green-500" />
          <h1 className="text-sm font-medium">
            Free shipping On All Orders Over $50!
          </h1>
        </section>

        {/* Right Section */}
        <section className="flex items-center space-x-6 text-sm">
          {/* Language Selector */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <FaAngleDown />
          </div>

          {/* FAQs Link */}
          <Link href="/faqs">
            <li
              className={`list-none hover:text-blue-500 cursor-pointer ${
                pathName === "/faqs"
                  ? "text-blue-400 underline"
                  : "text-gray-500"
              }`}
            >
              Faqs
            </li>
          </Link>

          {/* Need Help Section */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <MdErrorOutline className="text-yellow-500" />
            <span>Need Help</span>
          </div>
        </section>
      </div>

      {/* Main Header Section */}
      <div style={{ backgroundColor: "#F0F2F3" }}>
        <div className="container mx-auto flex h-[84px] px-6 py-2 items-center justify-between">
          {/* Logo Section */}
          <section className="flex items-center space-x-2">
            <Image
              src="/Comfort.svg"
              width={40}
              height={40}
              alt="Comfort Icon"
            />
            <h1 className="text-lg font-bold">Comforty</h1>
          </section>

          {/* Cart Section */}
          <section className="flex items-center space-x-6">
            <div className="flex items-center bg-white rounded-md px-4 py-2 shadow-md">
              <Image
                className="mr-2"
                src="/Cart.svg"
                width={22}
                height={22}
                alt="Cart Icon"
              />
              <h1 className="text-sm">Cart</h1>
              <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs ml-2">
                2
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
