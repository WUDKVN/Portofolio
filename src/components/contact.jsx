import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';


const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  

   
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl bg-black text-white p-8 rounded-lg shadow-lg flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl mb-4 font-bold">Contact</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium ">Name: *</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email: *</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message: *</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-800 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="mb-4">You can contact me using the form to your left, alternatively you can use the links below:</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl mr-4" />
              <span>+437 238 1150</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-2xl mr-4" />
              <span>wudkevin@icloud.com</span>
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-2xl mr-4" />
              <span>wud_kvn___</span>
            </div>
          
          </div>
        </div>
      </div>
      {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contact Sent</h2>
            <p>Your message has been sent successfully!</p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
