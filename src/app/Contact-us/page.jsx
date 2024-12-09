'use client'
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Contact Section */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          For More Information About Our Products & Services, Please Feel Free
          To Drop Us A Line. Our Team Always Here To Help You Out! Feel Free To
          Contact Us.
        </p>

        <div className="flex flex-wrap justify-between gap-8">
          {/* Contact Information */}
          <div className="flex-1 min-w-[300px] space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">
                  2307 Beverley Rd, Brooklyn, New York 11226, United States.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 234-567-890</p>
                <p className="text-gray-600">+1 987-654-321</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Working Time
                </h3>
                <p className="text-gray-600">Monday - Friday: 08:00 - 20:00</p>
                <p className="text-gray-600">
                  Saturday - Sunday: 10:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 min-w-[300px] bg-white p-8 shadow-md rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="This field is optional"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Let us know about it!"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white mt-12 py-6">
        <div className="container mx-auto flex flex-wrap justify-around items-center space-y-4 sm:space-y-0">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-medium text-gray-800">High Quality</h3>
            <p className="text-gray-600">crafted from top materials</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-lg font-medium text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-gray-600">over 2 years</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-lg font-medium text-gray-800">
              24 / 7 Support
            </h3>
            <p className="text-gray-600">dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
