"use client";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <a href="#top" className="font-bold text-2xl text-orange-500">
          VyomGarud
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? "bg-gray-800/80 border border-gray-700"
              : "bg-gray-900/60 border border-gray-700"
          }`}
        >
          <li>
            <a
              href="#top"
              className="font-dm-sans hover:text-orange-500 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-dm-sans hover:text-orange-500 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#capabilities"
              className="font-dm-sans hover:text-orange-500 transition-colors"
            >
              Capabilities
            </a>
          </li>
          <li>
            <a
              href="#highlights"
              className="font-dm-sans hover:text-orange-500 transition-colors"
            >
              Highlights
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-dm-sans hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-600 rounded-full bg-gray-800 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
          >
            Contact
            <span>→</span>
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-900 transition duration-500 border-l border-gray-800"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <span className="text-2xl">✕</span>
          </div>
          <li>
            <a href="#top" className="font-dm-sans" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-dm-sans" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a
              href="#capabilities"
              className="font-dm-sans"
              onClick={closeMenu}
            >
              Capabilities
            </a>
          </li>
          <li>
            <a href="#highlights" className="font-dm-sans" onClick={closeMenu}>
              Highlights
            </a>
          </li>
          <li>
            <a href="#contact" className="font-dm-sans" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
