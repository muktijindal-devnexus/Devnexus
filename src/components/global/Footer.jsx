import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#003B80] text-white p-4 sm:p-6 md:p-8 cursor-pointer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-white/30 pb-8">
        {/* Logo and Contact Info */}
        <div className="order-1">
               <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" width={60} height={60} alt="Logo" />
            <div>
              <h1 className="text-sm font-bold">DevNexus Solutions</h1>
              <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
            </div>
          </Link>
        </div>
          <div className="space-y-1 text-sm text-gray-300 pl-4">
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
    <li>
      <a href="/" className="hover:text-white transition-colors">Home</a>
    </li>
    <li>
      <a href="/about" className="hover:text-white transition-colors">About us</a>
    </li>
    <li>
      <a href="/services" className="hover:text-white transition-colors">Services</a>
    </li>
    <li>
      <a href="/contact" className="hover:text-white transition-colors">Contact</a>
    </li>
    <li>
      <a href="/projects" className="hover:text-white transition-colors">Project</a>
    </li>
  </ul>
</div>


        {/* Our Services */}
   <div className="order-4 lg:order-3">
  <h3 className="font-semibold text-white mb-3">Our Services</h3>
  <ul className="text-sm text-gray-300 space-y-2">
    <li>
      <a href="/web-design-development-services" className="hover:text-white transition-colors">
        Web Development
      </a>
    </li>
    <li>
      <a href="/blockchain-development-services" className="hover:text-white transition-colors">
        Blockchain Development
      </a>
    </li>
    <li>
      <a href="/mobile-development-services" className="hover:text-white transition-colors">
        Mobile App Development
      </a>
    </li>
    <li>
      <a href="/uiux" className="hover:text-white transition-colors">
        UI/UX Design
      </a>
    </li>
    <li>
      <a href="/digital-marketing-services" className="hover:text-white transition-colors">
        Digital Marketing
      </a>
    </li>
       <li>
      <a href="/ai-tech-services" className="hover:text-white transition-colors">
      AI Technologies
      </a>
    </li>
  </ul>
</div>


        {/* Social & Newsletter */}
        <div className="order-2 lg:order-4">
          <h3 className="font-semibold text-white mb-3">Join Our Community</h3>
          <div className="flex gap-4 mb-4 text-white text-xl">
            <a href="https://www.instagram.com/devnexussolutions?igsh=NXUycjU4MHBpNDk3" className="hover:text-gray-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1Dsa49Kxrr/" className="hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://x.com/DevNexusSol?t=YV_XZosMLVwNo6W0SvuB9Q&s=08" className="hover:text-gray-300 transition-colors">
              <IoClose />
            </a>
            <a href="https://www.linkedin.com/company/devnexus-solutions/" className="hover:text-gray-300 transition-colors">
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
    <div className="pt-2">
      <a href="//www.dmca.com/Protection/Status.aspx?ID=b07cf681-1e6f-46f9-8992-50d8d54d14b9" title="DMCA.com Protection Status" className=""> <img src ="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=b07cf681-1e6f-46f9-8992-50d8d54d14b9"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>

</div>
      
      {/* Copyright section can be added here */}
      <div className="max-w-7xl mx-auto pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} DevNexus Solutions. All rights reserved.
      </div>
    </section>
  );
}