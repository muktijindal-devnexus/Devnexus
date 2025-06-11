'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-4xl font-semibold text-[#00357A] mb-4">
            Ready To Get Started?
          </h2>
          <p className="text-[#4C4C4C] my-8">
            Have questions about pricing, projects or slingshot? Fill out the form below and a slingshot
            representative will be in touch shortly.
          </p>

          <div className="space-y-16 text-2xl text-gray-800">
            <div className="flex items-center gap-4 border-b pb-2">
              <Mail className="text-[#00357A]" size={40} />
              <span>contactus@devnexus.in</span>
            </div>
            <div className="flex items-center gap-4 border-b pb-2">
              <Phone className="text-[#00357A]" size={40} />
              <span>+91 9711010160</span>
            </div>
            <div className="flex items-start gap-4 border-b pb-2">
              <MapPin className="text-[#00357A]" size={40} />
              <span>26-B, Spaze Itech Park, Sector-49, Gurgaon, 122001</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-[#f9f9f9] rounded-lg p-6 shadow-md ">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Get in Touch</h3>
          <p className="text-sm text-gray-600 mb-6">
            Please fill out the form to help us understand the areas where you require assistance.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Enter Your Name*" className="border p-2 rounded text-lg w-full h-[57px]" />
              <input type="email" placeholder="Enter Your Email*" className="border p-2 rounded text-lg w-full h-[57px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" value="IN +91" readOnly className="border p-2 rounded text-lg w-full bg-gray-100 h-[57px]" />
              <input type="text" placeholder="Enter Your Number*" className="border p-2 rounded text-lg w-full h-[57px]" />
              <input type="text" placeholder="Website URL" className="border p-2 rounded text-lg w-full h-[57px]" />
            </div>

            <input type="text" placeholder="Looking for*" className="border p-2 rounded text-lg w-full h-[57px]" />
            <textarea placeholder="Enter Your Message" rows={4} className="border p-2 rounded text-lg w-full" />

            <button
              type="submit"
              className="bg-[#00357A] hover:bg-blue-800 text-white py-2 px-6 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
