"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const aboutDropdown = [
    { name: "Our Team", href: "/ourteam" },
  ];

  const servicesDropdown = [
    { name: "Web Development", href: "/web-design-development-services" },
    { name: "UI UX", href: "/uiux" },
    { name: "Mobile App Development", href: "/mobile-development-services" },
    { name: "Digital Marketing", href: "/digital-marketing-services" },
    { name: "Blockchain Development", href: "/blockchain-development-services" },
    { name: "AI Technologies", href: "/ai-tech-services" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 text-white bg-[rgba(30,30,30,0.72)] backdrop-blur-md border-none cursor-pointer">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/cdn/images/logo.png" width={60} height={60} alt="Logo" />
            <div>
              <h1 className="text-sm font-bold">DevNexus Solutions</h1>
              <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <Link href="/" className="hover:text-white hover:font-bold">Home</Link>

          {/* About Dropdown (hover) */}
          <div
            className="relative"
            onMouseEnter={() => {
              setAboutOpen(true);
              setServicesOpen(false);
            }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <div className="flex gap-1 items-center cursor-pointer">
              <button
                onClick={() => {
                  router.push("/about");
                  setAboutOpen(false);
                  setServicesOpen(false);
                }}
                className="hover:text-white cursor-pointer hover:font-bold"
              >
                About Us
              </button>
              <ChevronDown />
            </div>
            {aboutOpen && (
              <div className="absolute left-0 top-full bg-white rounded-md shadow-md text-[#7E7E7E] z-50 min-w-[200px] p-2">
                {aboutDropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown (hover) */}
          <div
            className="relative"
            onMouseEnter={() => {
              setServicesOpen(true);
              setAboutOpen(false);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex gap-1 items-center cursor-pointer ">
              <button
                onClick={() => {
                  router.push("/services");
                  setServicesOpen(false);
                  setAboutOpen(false);
                }}
                className="hover:text-white cursor-pointer hover:font-bold"
              >
                Services
              </button>
              <ChevronDown />
            </div>
            {servicesOpen && (
              <div className="absolute left-0 top-full bg-white text-[#7E7E7E] rounded-md shadow-md  z-50 min-w-[300px] p-8">
                {servicesDropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className="block p-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {["Project", "Career", "Blogs", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-white hover:font-bold"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Contact + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#00357A] hover:bg-[#335D95] text-white text-sm px-4 py-2 rounded-md hidden md:block"
          >
            Free Consultation
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[rgba(30,30,30,0.72)] backdrop-blur-md text-white p-7 space-y-3">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-white hover:font-bold text-xl">
            Home
          </Link>

          <div className="space-y-1">
            <p className="font-semibold text-xl">About Us</p>
            {aboutDropdown.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg hover:text-white hover:font-bold"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-xl">Services</p>
            {servicesDropdown.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {["Project", "Career", "Blogs", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#00357A] text-xl"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#00357A] text-white text-lg px-4 py-4 rounded-md"
          >
            Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};
