"use client";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
      setScrollProgress(progress);

      // Set scroll state for navbar styling
      if (scrollY > 50) {
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
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-gray-900/85 backdrop-blur-xl shadow-xl border-b border-gray-700/50"
            : "bg-gray-900/20 backdrop-blur-md"
        }`}
        style={{
          backgroundColor: isScroll
            ? `rgba(17, 24, 39, ${0.85 + scrollProgress * 0.1})`
            : `rgba(17, 24, 39, ${0.2 + scrollProgress * 0.3})`,
        }}
      >
        <a href="#top" className="font-bold text-2xl text-orange-500">
          VyomGarud
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? "bg-gray-800/70 border border-gray-700/60 backdrop-blur-sm"
              : "bg-gray-900/40 border border-gray-700/40 backdrop-blur-sm"
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
