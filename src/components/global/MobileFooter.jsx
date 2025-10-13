"use client";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MobileFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch(
        `https://backend.devnexussolutions.com/api/subscribe?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "POST",
        }
      );

      if (res.ok) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("Subscription failed. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="bg-[#003B80] text-white px-2 py-2  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-white/30 pb-8">
        {/* Logo and Contact Info */}
        <div className="">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
                    <Image
                src="/cdn/images/54.svg"
                width={60}
                height={40}
                alt="Logo"
              />
              <div>
                <h2 className="text-sm font-bold">DevNexus Solutions</h2>
                <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
              
              </div>
       
            </Link>
               
          </div>
          <p className="py-4 text-xs text-gray-300">
                    Your Partner in Digital Growth, Not Just a Service Provider
                </p>
          <div className="space-y-1 sm:space-y-1 text-sm sm:text-sm text-gray-300 sm:pl-4">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <Link
                href="mailto:contactus@devnexus.in"
                className="underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                contactus@devnexus.in
              </Link>
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <Link
                href="tel:+919211815556"
                className="underline hover:text-white"
              >
                +91 9211815556
              </Link>
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span> 26-B,
              Spaze Itech Park, Sector-49, Gurgaon, 122018
            </p>
          </div>
        </div>
        {/* Explore On */}
        <div className="grid grid-cols-2">
   <div className="order-3 lg:order-2 sm:pl-4 md:pl-8 lg:pl-20">
          <h3 className="font-semibold text-white mb-3">Explore On</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/ourteam" className="hover:text-white transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-white transition-colors">
                Career
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
                 <li>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="order-4 lg:order-3">
          <h3 className="font-semibold text-white mb-3">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <Link
                href="/web-development-services"
                className="hover:text-white transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <a href="/ui-ux-design-services" className="hover:text-white transition-colors">
                UI/UX Design
              </a>
            </li>
            <li>
              <Link
                href="/mobile-app-development-services"
                className="hover:text-white transition-colors"
              >
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link
                href="/digital-marketing-services"
                className="hover:text-white transition-colors"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/blockchain-development-services"
                className="hover:text-white transition-colors"
              >
                Blockchain Development
              </Link>
            </li>
            <li>
              <Link
                href="/ai-tech-services"
                className="hover:text-white transition-colors"
              >
                AI Technologies
              </Link>
            </li>
          </ul>
        </div>
        </div>
     

        {/* Social & Newsletter */}
        <div className="order-2 lg:order-4">
          <h3 className="font-semibold text-white mb-3">Join Our Community</h3>
          <div className="flex gap-4 mb-4 text-white text-xl">
            <Link
              href="https://www.instagram.com/devnexussolutions?igsh=NXUycjU4MHBpNDk3"
              className="hover:text-gray-300 transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/share/1Dsa49Kxrr/"
              className="hover:text-gray-300 transition-colors"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://x.com/DevNexusSol?t=YV_XZosMLVwNo6W0SvuB9Q&s=08"
              className="hover:text-gray-300 transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/company/devnexus-solutions/"
              className="hover:text-gray-300 transition-colors"
            >
              <FaLinkedinIn />
            </Link>
                   <Link
              href="https://www.youtube.com/@DevNexusSolutions/videos"
              className="hover:text-gray-300 transition-colors"
            >
              <FaYoutube />
            </Link>
          </div>
          <h4 className="text-sm font-medium mb-3">
            Subscribe us for Latest News
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-3 ">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 text-sm rounded-md w-full text-black bg-white focus:outline-none focus:ring-0 focus:border-transparent "
            />
            <button
              onClick={handleSubscribe}
              className="px-4 py-2 sm:py-1 rounded-md text-sm text-white border border-white hover:bg-white hover:text-[#003B80] transition-colors w-full sm:w-auto text-center hover:cursor-pointer"
            >
              Submit
            </button>
          </div>
          {status && <p className="text-xs text-gray-200 mt-2">{status}</p>}
        </div>
      </div>

   <div className="flex flex-col justify-center items-center">
    <p className="text-center text-xs text- mt-6">
        Copyright © 2025 DevNexus Solutions | All Rights Reserved.
      </p>
         <a
        href="/privacy-policy"
        className="hover:text-white transition-colors text-center text-xs text-white mt-2"
      >
        Privacy Policy
      </a>
   </div>
  

      {/* <div className="pt-2">
        <a href="//www.dmca.com/Protection/Status.aspx?ID=b07cf681-1e6f-46f9-8992-50d8d54d14b9" title="DMCA.com Protection Status">
          <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=b07cf681-1e6f-46f9-8992-50d8d54d14b9" alt="DMCA.com Protection Status" />
        </a>
      </div> */}
    </section>
  );
}
