"use client";
import React, { useRef } from "react";

const Navbar = () => {
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

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300">
        <a href="#top" className="font-bold text-2xl text-orange-500">
          VyomGarud
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-900/80 border border-gray-700/60 backdrop-blur-md transition-all duration-300">
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
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-900/95 backdrop-blur-xl transition duration-500 border-l border-gray-700/50"
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
