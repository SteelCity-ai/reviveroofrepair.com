"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-[#1a1a2e] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`font-bold text-xl ${isScrolled ? "text-[#1a1a2e]" : "text-white"}`}>
              Revive Roof Repair
            </span>
          </div>

          {/* Right side - Phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+17175001434"
              className={`flex items-center gap-2 font-semibold ${
                isScrolled ? "text-[#1a1a2e]" : "text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">(717) 500-1434</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="#contact-form"
              className="bg-[#e63946] hover:bg-[#c5303c] text-white font-semibold py-2 px-4 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
