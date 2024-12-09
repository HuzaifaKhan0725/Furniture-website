import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Big Black Line */}
      <hr />
      <div className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-6">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <section className="md:text-left">
              <Image
                src="/Comfort.svg"
                width={40}
                height={40}
                alt="Comfort Logo"
              />
              <div className="mt-2 text-xl font-semibold">Comforty</div>
              <p className="mt-2 text-sm">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <Image
                  src="/Facebook.svg"
                  width={24}
                  height={24}
                  alt="Facebook"
                />
                <Image
                  src="/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                />
                <Image src="/p.svg" width={24} height={24} alt="Pinterest" />
                <Image src="/pogo.svg" width={24} height={24} alt="Pogo" />
              </div>
            </section>

            {/* Category Section */}
            <section>
              <h1 className="text-lg font-semibold mb-4">CATEGORY</h1>
              <ul className="space-y-2 text-sm">
                <li>Sofa</li>
                <li>Wing Chair</li>
                <li>Desk Chair</li>
                <li>Wooden Chair</li>
                <li>Park Beach</li>
              </ul>
            </section>

            {/* Support Section */}
            <section>
              <h1 className="text-lg font-semibold mb-4">SUPPORT</h1>
              <ul className="space-y-2 text-sm">
                <li>Help and Support</li>
                <li>Terms and Conditions</li>
                <li>Privacy and Policies</li>
                <li>Help</li>
              </ul>
            </section>

            {/* Newsletter Section */}
            <section>
              <h1 className="text-lg font-semibold mb-4">NEWSLETTER</h1>
              <form className="flex flex-col space-y-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </p>
            </section>
          </div>

          {/* Footer Bottom */}
          <hr />
          <div className="text-center mt-8 text-sm text-gray-600">
            &copy; 2024 Comforty. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
