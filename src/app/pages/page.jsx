"use client";

import Image from "next/image";

export default function ProductPage() {
  const featuredProducts = [
    { id: 1, name: "Library Stool Chair", price: "$20", src: "/bchiar.svg" },
    { id: 2, name: "Library Stool Chair", price: "$30", src: "/Pchair.svg" },
    { id: 3, name: "Library Stool Chair", price: "$25", src: "/best.svg" },
    { id: 4, name: "Library Stool Chair", price: "$35", src: "/wchair.svg" },
    { id: 5, name: "Library Stool Chair", price: "$40", src: "/Desk.svg" },
    { id: 6, name: "Library Stool Chair", price: "$50", src: "/ochair.svg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="/Pchair.svg"
            alt="Library Stool Chair Product Image"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Library Stool Chair
          </h1>
          <p className="text-lg text-green-600 font-semibold mb-4">
            $30.00 USD
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Experience the comfort and elegance of our Library Stool Chair,
            designed to complement your study or workspace. Built with durable
            materials and a sleek finish, it&#39;s a must-have for style and
            functionality.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
            + Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Featured Products</h2>
          <button className="text-blue-500 hover:underline">View all</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <Image
                src={product.src}
                alt={`Image of ${product.name}`}
                width={150}
                height={150}
                className="rounded-lg object-contain mb-2"
              />
              <h3 className="text-sm font-medium text-gray-700 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
