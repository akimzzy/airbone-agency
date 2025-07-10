"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import ContactButtons from "./ContactButtons";
import Link from "next/link";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  selectedCountry,
}: Readonly<ContactModalProps>) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: selectedCountry || "",
    message: "",
  });

  useEffect(() => {
    if (selectedCountry) {
      setFormData((prev) => ({
        ...prev,
        country: selectedCountry,
      }));
    }
  }, [selectedCountry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-[var(--color-primary)]/70">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white md:rounded-3xl w-full md:max-w-5xl h-full sm:h-auto md:m-4 shadow-2xl overflow-hidden flex">
        {/* Left side - Image */}
        <div className="w-2/5 relative hidden md:block">
          <div className="absolute inset-0 bg-[var(--color-primary)]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
              alt="Leather texture"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-b from-black to-transparent p-8 pb-40">
                <h2 className="text-2xl mb-1 font-bold">
                  Schedule a consultation
                </h2>
                <p className="text-xs text-gray-300">
                  Fill in your details and we will contact you soon!
                </p>
              </div>
              <div className="mt-auto pt-40 p-8 bg-gradient-to-b from-transparent to-black flex gap-4">
                <ContactButtons />
                <Link
                  href="https://www.instagram.com/airborne__consult"
                  className="w-10 h-10 bg-[#E5E0DA] text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
                >
                  <svg
                    className="size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z"></path>
                    <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z"></path>
                    <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 p-12 text-xs">
          <button
            onClick={onClose}
            className="absolute top-6 text-xl right-6 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
          >
            ✕
          </button>
          {/* <div className="">
            <h2 className="text-2xl mb-1 font-bold">Schedule a consultation</h2>
            <p className="text-xs text-gray-300">
              Fill in your details and we will contact you soon!
            </p>
          </div> */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-medium text-[var(--color-primary)] mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-[var(--color-primary)] mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block font-medium text-[var(--color-primary)] mb-2"
                >
                  Phone number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block font-medium text-[var(--color-primary)] mb-2"
                >
                  Destination Country *
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                  required
                >
                  <option value="">Select a country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-[var(--color-primary)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={7}
                className="w-full p-2 rounded-xl resize-none bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
              />
            </div>
            {/* <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-[var(--color-primary)]">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  Terms of use
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div> */}
            <div className="flex justify-center">
              <PrimaryButton
                onClick={(e) => handleSubmit(e as React.FormEvent)}
                className="p-2"
              >
                Submit now
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
