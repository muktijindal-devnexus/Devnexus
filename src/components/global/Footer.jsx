import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-[#003B80] text-white p-4 sm:p-6 md:p-8 cursor-pointer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-white/30 pb-8">
        {/* Logo and Contact Info */}
        <div className="order-1">
          <Link href="/" className="flex items-center gap-2 pb-4">
            <img src="/images/logo.svg" alt="Logo" className="h-12 w-auto sm:h-14" />
            <div>
              <h1 className="text-sm font-bold">DevNexus Solutions</h1>
              <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
            </div>
          </Link>
          <div className="space-y-1 text-sm text-gray-300">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:contactus@devnexus.in"
                className="underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                contactus@devnexus.in
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a href="tel:+919711010160" className="underline hover:text-white">
                +91 9711010160
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span> 26-B,
              Spaze Itech Park, Sector-49, Gurgaon, 122018
            </p>
          </div>
        </div>

        {/* Explore On */}
        <div className="order-3 lg:order-2 sm:pl-4 md:pl-8 lg:pl-20">
          <h3 className="font-semibold text-white mb-3">Explore On</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="hover:text-white transition-colors">Home</li>
            <li className="hover:text-white transition-colors">About us</li>
            <li className="hover:text-white transition-colors">Services</li>
            <li className="hover:text-white transition-colors">Contact</li>
            <li className="hover:text-white transition-colors">Projects</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="order-4 lg:order-3">
          <h3 className="font-semibold text-white mb-3">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="hover:text-white transition-colors">Web Development</li>
            <li className="hover:text-white transition-colors">Blockchain Development</li>
            <li className="hover:text-white transition-colors">Mobile App Development</li>
            <li className="hover:text-white transition-colors">AI Technologies Development</li>
            <li className="hover:text-white transition-colors">UI/UX Design</li>
            <li className="hover:text-white transition-colors">Digital Marketing</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="order-2 lg:order-4">
          <h3 className="font-semibold text-white mb-3">Join Our Community</h3>
          <div className="flex gap-4 mb-4 text-white text-xl">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <IoClose />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
          <h4 className="text-sm font-medium mb-3">
            Subscribe us for Latest News
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 text-sm rounded-md w-full text-black bg-white focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <button className="px-4 py-2 sm:py-1 rounded-md text-sm text-white border border-white hover:bg-white hover:text-[#003B80] transition-colors w-full sm:w-auto text-center">
              Submit
            </button>
          </div>
        </div>
      </div>
      
      {/* Copyright section can be added here */}
      <div className="max-w-7xl mx-auto pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} DevNexus Solutions. All rights reserved.
      </div>
    </section>
  );
}