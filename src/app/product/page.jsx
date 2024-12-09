
'use client'

import React from "react";
import Image from "next/image";
import Subscribe from "../components/Subscribe";

export default function Product() {
  const product = [
    {
      Image: "/pchair.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/ochair.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/bchiar.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/wchair.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/best.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/Black.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/Desk.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/windowchair.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/bchiar.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/Desk.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/best.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
    {
      Image: "/wchair.svg",
      Name: "Library Stool Chair",
      Price: "$20",
      Cart: "/Cart.svg",
      width: 300,
      height: 300,
      cartWidth: 24,
      cartHeight: 24,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
          <p className="text-gray-600 mt-2">
            Explore our range of quality chairs
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {/* Product Image */}
              <div className="aspect-w-1 aspect-h-1 relative">
                <Image
                  src={item.Image}
                  alt={item.Name}
                  width={item.width}
                  height={item.height}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
               
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.Name}
                </h2>
                <p className="text-gray-500">{item.Price}</p>

                {/* Add to Cart Button */}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-600">
                  <Image
                    src={item.Cart}
                    alt="Cart"
                    width={item.cartWidth}
                    height={item.cartHeight}
                  />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
