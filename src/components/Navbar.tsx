"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ConsultationButton, PrimaryButton } from "./PrimaryButton";
import ContactButtons from "./ContactButtons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#destinations", label: "Destinations" },
    { href: "/#universities", label: "Universities" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="flex justify-center ">
        <div className="bg-[var(--color-primary)] text-white text-xs p-3 rounded-bl-3xl rounded-br-3xl font-bold leading-relaxed px-8">
          Airborne Educational Consult
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left section - Contact buttons */}
          <ContactButtons />

          {/* Center section - Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-primary)] hover:text-indigo-600 transition-colors font-normal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section - Book consultation button */}
          <div className="hidden md:block">
            <PrimaryButton>Book Consultation</PrimaryButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[var(--color-primary)] hover:text-indigo-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ConsultationButton className="w-full justify-center" />
          </div>
        </div>
      </div>
    </nav>
  );
}
