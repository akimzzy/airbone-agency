"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ConsultationButton, PrimaryButton } from "./PrimaryButton";
import ContactButtons from "./ContactButtons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [, setLastInteractionTime] = useState(Date.now());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth < 768) {
        setIsVisible(
          lastScrollY > currentScrollY ||
          currentScrollY < 50 ||
          isMobileMenuOpen
        );
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
      setLastInteractionTime(Date.now());
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!isMobileMenuOpen && window.innerWidth < 768) {
          setIsVisible(false);
        }
      }, 2000);
    };

    const handleTouchStart = () => {
      setIsVisible(true);
      setLastInteractionTime(Date.now());
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!isMobileMenuOpen && window.innerWidth < 768) {
          setIsVisible(false);
        }
      }, 2000);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("touchstart", handleTouchStart);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("touchstart", handleTouchStart);
      }
      clearTimeout(timeoutId);
    };
  }, [lastScrollY, isMobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
        } ${!isMobileMenuOpen ? "backdrop-blur-lg" : "bg-[#E5E0DA]"}`}
    >
      <div className="flex justify-center">
        <div className="bg-[var(--brand-red)] text-white text-[10px] py-2 rounded-b-2xl font-bold leading-relaxed px-6">
          Airborne Educational Consult
        </div>
      </div>
      <div
        className={`container mx-auto px-6 transition-all duration-300 ${!isVisible && !isMobileMenuOpen
          ? "max-h-0 h-0 opacity-0 pointer-events-none overflow-hidden"
          : "max-h-[1000px] opacity-100"
          }`}
      >
        <div className="flex items-center justify-between h-20 text-xs">
          {/* Left section - Contact buttons */}
          <ContactButtons />

          {/* Center section - Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-primary)] hover:text-[var(--brand-gold)] transition-colors font-semibold"
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
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-[var(--color-primary)]"
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
          className={`md:hidden ${isMobileMenuOpen ? "block py-4 pb-8" : "hidden"
            }`}
        >
          <div className="pb-8 grid grid-cols-2 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/60 transition-colors py-2 text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ConsultationButton className="w-full justify-center" />
        </div>
      </div>
    </nav>
  );
}
