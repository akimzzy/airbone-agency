"use client";

import { useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import ContactButtons from "./ContactButtons";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl w-full max-w-5xl m-4 shadow-2xl overflow-hidden flex">
        {/* Left side - Image */}
        <div className="w-2/5 relative hidden md:block">
          <div className="absolute inset-0 bg-[var(--color-primary)]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
              alt="Leather texture"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
            <div>
              <h2 className="text-4xl mb-6 font-bold">
                Schedule a consultation
              </h2>
              <p className="opacity-80 mb-8">
                Fill in your details and we will contact you soon!
              </p>
              <ContactButtons />
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 p-12">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
          >
            ✕
          </button>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block font-medium text-[var(--color-primary)] mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                />
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
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
              />
            </div>
            <div className="flex items-center">
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
            </div>
            <PrimaryButton
              onClick={(e) => handleSubmit(e as React.FormEvent)}
              className="w-full mt-6"
            >
              Submit now
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
}
