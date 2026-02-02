import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white text-black mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
  {/* Main Footer Content Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4 pb-12">
    <div className="flex flex-col flex-shrink-0">
      <div className="flex justify-start">
        <img src="/logo.png" alt="SpiceScript Logo" className="w-40 h-auto object-contain" />
      </div>
    </div>

    <div className="sm:ml-0 ml-8 flex flex-col">
      <h2 className="text-base font-bold leading-4 text-black">Company</h2>
      <a href="#" className="hover:text-gray-600 text-base leading-4 mt-6 text-black">Blog</a>
      <a href="#" className="hover:text-gray-600 text-base leading-4 mt-6 text-black">About Us</a>
      <a href="#" className="hover:text-gray-600 text-base leading-4 mt-6 text-black">Contact us</a>
    </div>

    <div className="flex flex-col">
      <h2 className="text-base font-bold leading-4 text-black">Support</h2>
      <a href="#" className="hover:text-gray-600 text-base leading-4 mt-6 text-black">Privacy policy</a>
      <a href="#" className="hover:text-gray-600 text-base leading-4 mt-6 text-black">Terms of service</a>
    </div>

    <div className="mt-10 lg:mt-0 lg:block hidden">
      <label className="text-xl font-bold leading-5 text-black">Get updates</label>
      <div className="flex items-center justify-between border border-black mt-4">
        <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-black bg-white placeholder-gray-500" placeholder="Enter your email" />
        <button aria-label="send" className="mr-4 text-black hover:text-gray-600">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="currentColor">
            <path d="M14.8934 7.39673..." />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* The Line and Copyright Section */}
  <hr className="border-gray-200" />
<div className="flex flex-col items-center text-center mt-8 space-y-2">    <p className="text-sm leading-none text-gray-900">
      Copyright © 2026 SpiceScript
    </p>
    <p className="text-sm leading-none text-gray-900">
      All rights reserved
    </p>
  </div>
</div>
  )
}

export default Footer