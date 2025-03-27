import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-fit flex items-center justify-center bg-gray-950 text-white px-6 pt-8">
      <div className="max-w-4xl w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-bold text-transparent text-7xl bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 pb-4 text-center">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Have questions or need assistance? Feel free to reach out! Our team is always ready 
          to help you with any inquiries related to our services.
        </p>

        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Your Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Your Message</label>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition">
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">Or reach us at:</p>
          <p className="text-pink-400 font-medium">support@lazdevmusic.com</p>
        </div>
      </div>
    </div>
  );
}
