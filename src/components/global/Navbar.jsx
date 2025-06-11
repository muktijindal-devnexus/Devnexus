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

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const aboutDropdown = [
    { name: "About", href: "/about" },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 text-white bg-[rgba(30,30,30,0.72)] backdrop-blur-md border-none">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" width={60} height={60} alt="Logo" />
            <div>
              <h1 className="text-sm font-bold">DevNexus Solutions</h1>
              <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <Link href="/" className="hover:text-blue-400">Home</Link>

          {/* About Dropdown */}
          <div className="relative" ref={aboutRef}>
            <div className="flex gap-1 items-center">
              <button
                onClick={() => {
                  router.push("/about");
                  setAboutOpen(false);
                  setServicesOpen(false);
                }}
                className="hover:text-blue-400"
              >
                About
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAboutOpen(!aboutOpen);
                  setServicesOpen(false);
                }}
                className="text-white"
              >
                <ChevronDown />
              </button>
            </div>
            {aboutOpen && (
              <div className="absolute left-0 top-full bg-white rounded-md shadow-md mt-5 text-[#7E7E7E] z-50 min-w-[200px]">
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

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <div className="flex gap-1 items-center">
              <button
                onClick={() => {
                  router.push("/services");
                  setServicesOpen(false);
                  setAboutOpen(false);
                }}
                className="hover:text-white hover:font-bold"
              >
                Services
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen(!servicesOpen);
                  setAboutOpen(false);
                }}
                className="text-white"
              >
                <ChevronDown />
              </button>
            </div>
            {servicesOpen && (
              <div className="absolute left-0 top-full bg-white text-[#7E7E7E] rounded-md shadow-md mt-5 z-50 min-w-[300px] p-8">
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
              href={`/${item.toLowerCase()}`}
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
            className="bg-[#4D77AF] text-white text-sm px-4 py-2 rounded-md"
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
        <nav className="md:hidden bg-[rgba(30,30,30,0.72)] backdrop-blur-md text-white px-4 py-4 space-y-3">
          <Link href="/" className="block hover:text-blue-400">Home</Link>

          <div className="space-y-1">
            <p className="font-semibold">About</p>
            {aboutDropdown.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block pl-4 text-sm hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1">
            <p className="font-semibold">Services</p>
            {servicesDropdown.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block pl-4 text-sm hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {["Project", "Career", "Blogs", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase()}`}
              className="block hover:text-blue-400"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
          >
            Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};
