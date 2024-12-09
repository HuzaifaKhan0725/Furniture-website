import React from "react";
import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      name: "Wing Chair",
      image: "/best.svg",
      width: 500, // Example width
      height: 500, // Example height
      product: "3584 Products",
    },
    {
      name: "Wooden Chair",
      image: "/windowchair.svg",
      width: 500, 
      height: 500, 
      product: "157 Products",
    },
    {
      name: "Desk Chair",
      image: "/Desk.svg",
      width: 500, 
      height: 500, 
      product: "154 Products",
    },
  ];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="container mx-auto py-12">
        {/* Title */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Top Categories
          </h1>
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-[#f3f0f0b2] shadow-lg rounded-lg overflow-hidden p-4 max-w-[500px]"
            >
              {/* Image Section */}
              <div className="relative mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{item.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
