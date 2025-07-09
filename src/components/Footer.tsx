"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 text-xs">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <Link
              href="tel:+2347068904268"
              className="mb-4 flex gap-2 items-center hover:text-white/50"
            >
              <svg
                className="size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.327 22.5c-.915 0-2.2-.331-4.125-1.407-2.34-1.312-4.15-2.524-6.478-4.846-2.245-2.243-3.337-3.695-4.865-6.476C1.132 6.63 1.426 4.984 1.755 4.28c.392-.842.97-1.345 1.718-1.844a8.263 8.263 0 0 1 1.343-.712l.13-.057c.231-.105.583-.263 1.028-.094.297.112.562.34.978.75.852.84 2.015 2.71 2.445 3.63.288.619.479 1.028.48 1.486 0 .537-.27.95-.598 1.397l-.182.242c-.356.469-.435.604-.383.846.104.486.884 1.933 2.165 3.212 1.281 1.278 2.686 2.008 3.174 2.112.253.054.39-.027.875-.397.069-.053.14-.107.215-.162.5-.372.894-.635 1.418-.635h.003c.456 0 .847.198 1.493.524.844.426 2.771 1.575 3.616 2.427.412.415.64.679.753.976.169.447.01.797-.094 1.031l-.057.129a8.27 8.27 0 0 1-.716 1.34c-.499.745-1.004 1.322-1.846 1.714a3.16 3.16 0 0 1-1.386.304Z"></path>
              </svg>{" "}
              +234 (706) 890-4268
            </Link>
            <Link
              href="mailto:airborneglobalconsult@gmail.com"
              className="flex gap-2 items-center mb-4 hover:text-white/50"
            >
              {" "}
              <svg
                className="size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.875 3.75H4.125A2.628 2.628 0 0 0 1.5 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h15.75a2.627 2.627 0 0 0 2.625-2.625V6.375a2.627 2.627 0 0 0-2.625-2.625Zm-.665 4.342-6.75 5.25a.75.75 0 0 1-.92 0l-6.75-5.25a.75.75 0 1 1 .92-1.184L12 11.8l6.29-4.892a.75.75 0 0 1 .92 1.184Z"></path>
              </svg>
              <span> airborneglobalconsult@gmail.com</span>{" "}
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="gap-y-4 gap-x-8 flex flex-wrap">
              <li>
                <Link href="/" className="hover:text-white/50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white/50">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#destinations" className="hover:text-white/50">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/#universities" className="hover:text-white/50">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white/50">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white/50">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="hover:text-white/50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/airborne__consult"
                target="_blank"
                className="flex gap-2 items-center hover:text-white/50"
              >
                {" "}
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
                <span> @airborne__consult</span>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs opacity-70">
          2024 Airborne Educational Consult.
        </div>
      </div>
    </footer>
  );
}
