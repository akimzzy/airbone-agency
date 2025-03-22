"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">📞 +1 (555) 123-4567</p>
            <p className="mb-2">📧 info@visaconsultant.com</p>
            <p>🏢 123 Global Avenue, New York</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#destinations" className="hover:text-blue-400">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/#universities" className="hover:text-blue-400">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-blue-400">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400">
                Facebook
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">
                Twitter
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-400">
                LinkedIn
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe for updates and visa news</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded text-gray-800"
            />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm opacity-70">
          © 2024 Visa Consultant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
