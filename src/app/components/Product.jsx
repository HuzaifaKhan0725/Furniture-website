"use client";
import Image from "next/image";

export default function Product() {
  const product = [
    {
      name: "Library Tool Chair",
      price: "$20",
      image: "/bchiar.svg",
      cart: "/Cart.svg",
    },
    {
      name: "Library Tool Chair",
      price: "$20",
      image: "/Pchair.svg",
      cart: "/Cart.svg",
    },
    {
      name: "Library Tool Chair",
      price: "$20",
      image: "/Pchair.svg",
      cart: "/Cart.svg",
    },
    {
      name: "Library Tool Chair",
      price: "$20",
      image: "/ochair.svg",
      cart: "/Cart.svg",
    },
    {
      name: "Library Tool Chair",
      price: "$20",
      image: "/wchair.svg",
      cart: "/Cart.svg",
    },
   
  
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4">
        {/* Centered Section */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Featured Products
          </h1>
        </section>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {product.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  width={500}
                  height={500} 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200">
                  <Image
                    width={24}
                    height={24}
                    src={item.cart}
                    alt="Add to cart"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-800">
                  {item.name}
                </h3>
                <p className="text-lg font-semibold text-teal-600 mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
