import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-fit bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white px-6 pt-20 relative flex flex-col justify-center items-center py-40
            md:flex-col ">
      <div className="max-w-3xl w-full p-5 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-bold text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-4 text-center">Contact Us</h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-300 text-center text-balance">
          Have questions or need assistance? Feel free to reach out! Our team is always ready 
          to help you with any inquiries related to our services.
        </p>

        <form className="mt-6 md:mx-5">
          <div className="mb-4">
            <label className="block text-gray-500 dark:text-gray-400 text-sm mb-2">Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 dark:text-gray-400 text-sm mb-2">Your Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 dark:text-gray-400 text-sm mb-2">Your Message</label>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <Link to="/download">
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition">
              Send Message
            </button>
          </Link>

        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">Or reach us at:</p>
          <p className="text-pink-500 dark:text-pink-400 font-medium">support@lazdevmusic.com</p>
        </div>
      </div>
    </div>
  );
}
