"use client";

import React, { createContext, useContext, useState } from "react";
import ContactModal from "@/components/ContactModal";

interface ContactModalContextType {
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, closeContactModal }}
    >
      {children}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error(
      "useContactModal must be used within a ContactModalProvider"
    );
  }
  return context;
}
