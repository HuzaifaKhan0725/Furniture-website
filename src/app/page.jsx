"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Product from "./components/Product";
import Categories from "./components/Categories";

export default function Home() {
  const scroll = [
    { image: "/Zap.svg", id: 1 },
    { image: "/pipe.svg", id: 2 },
    { image: "/Cib.svg", id: 3 },
    { image: "/sath.svg", id: 4 },
    { image: "/burst.svg", id: 5 },
    { image: "/Panda.svg", id: 6 },
    { image: "/Moz.svg", id: 7 },
  ];

  return (
    <div>
      <div className="container mx-auto rounded-[3rem] bg-custom-gray mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <section className="ml-12">
            <p className="text-lg text-gray-600">WELCOME TO CHAIRY</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 break-words">
              Best Furniture Collection <br />
              for Your Interior
            </h1>
            <button className="flex items-center justify-center bg-custom-cyan text-white py-2 px-4 rounded-lg hover:bg-cyan-200 transition">
              Shop Now <FaArrowRightLong className="ml-2" />
            </button>
          </section>
          <section className="flex justify-center">
            <Image
              src="/chair.svg"
              alt="Chair"
              width={434}
              height={584}
              priority
            />
          </section>
        </div>
      </div>
      <div className="container mt-4">
        <div className="overflow-x-auto py-4">
          {/* Hidden for small screens, centered horizontally on large screens */}
          <div className="hidden md:flex items-center space-x-6 justify-center px-4 bg-white rounded-lg shadow-sm py-3 overflow-x-auto">
            {scroll.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={`Image ${item.id}`}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
          <Product />
          <Categories />
        </div>
      </div>
    </div>
  );
}
