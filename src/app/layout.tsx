import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/context/ContactModalContext";
// import { raleway, dancingScript, damion, parisienne } from "../fonts";

export const metadata: Metadata = {
  title: "Airborne Edu Consult",
  description:
    "Guiding students through admissions, visa processes, scholarships, and global opportunities with personalized support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ContactModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
