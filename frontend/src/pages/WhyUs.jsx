import React from 'react';

export default function WhyUs() {
  return (
    <div className="min-h-fit bg-gray-950 text-white flex items-center justify-center py-25">
      <div className="max-w-5xl w-full text-center section px-5 space-y-10">
        <h2 className="text-bold text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-4 text-center">Why Choose Us?</h2>
        <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 " >
          We provide the best tools and features to enhance your music experience. Whether you're an artist, a producer, or a music lover, 
          our platform is designed to offer you seamless and high-quality services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-bold text-transparent text-2xl sm:text-3xl  bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-4 text-center">High-Quality Audio</h3>
            <p className="mt-2 text-gray-300 text-sm sm:text-lg md:text-xl">Enjoy crystal-clear sound with our top-notch audio technology.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-4 text-center">Fast & Secure</h3>
            <p className="mt-2 text-gray-300 text-sm sm:text-lg md:text-xl">Lightning-fast downloads with full security for your data.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-4 text-center">User-Friendly</h3>
            <p className="mt-2 text-gray-300 text-sm sm:text-lg md:text-xl">Simple and intuitive interface for effortless navigation.</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="/download" className="inline-block px-6 py-3 bg-gradient-to-tl from-purple-600 to-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}
