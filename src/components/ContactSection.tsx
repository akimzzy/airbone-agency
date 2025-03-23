"use client";

import { ConsultationButton } from "./PrimaryButton";
import ContactButtons from "./ContactButtons";

export default function ContactSection() {
  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[var(--color-primary)]">
        Start Your International Education Journey
      </h2>
      <p className="text-sm text-[var(--color-secondary)] mb-10 max-w-2xl mx-auto">
        Get expert guidance on university admissions, visa applications, and
        career planning. Schedule a consultation with our education advisors.
      </p>
      <div className="flex justify-center items-center gap-4">
        <ConsultationButton />
        <ContactButtons />
      </div>
    </div>
  );
}
