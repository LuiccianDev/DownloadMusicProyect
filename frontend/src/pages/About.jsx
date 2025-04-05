import React from 'react';

export default function About() {
  return (
    <div className="min-h-fit flex items-center justify-center bg-gray-950 text-white pt-50 text-pretty ">
      <div className="max-w-4xl text-center p-10 text-balace">
        <h1 className="text-bold text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-8">About Us</h1>
        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-300">
          Welcome to <span className="text-pink-400 font-semibold">LazDev Music</span>, 
          the ultimate destination for music lovers. Our platform allows you to download and 
          enjoy your favorite tracks with just a few clicks, offering a seamless and high-quality 
          experience. Whether you're looking for the latest hits or timeless classics, we have it all.  
        </p>

        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-300">
          At <span className="text-pink-400 font-semibold">LazDev Music</span>, we believe in the power of music to 
          inspire, energize, and connect people. That's why we've designed an intuitive and efficient 
          tool that lets you explore and download songs effortlessly. Our service is built with the latest 
          technology to ensure fast, secure, and high-quality downloads for all users.  
        </p>

        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-300">
          Join our growing community of music enthusiasts and take your listening experience to the next level. 
          No matter your taste in music, we are here to help you enjoy it without limits. Start exploring today 
          and feel the rhythm of LazDev Music! 🎶🚀  
        </p>
      </div>
    </div>
  );
}
