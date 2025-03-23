"use client";

import { useState } from "react";
import { ConsultationButton, PrimaryButton } from "@/components/PrimaryButton";
import ContactModal from "@/components/ContactModal";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnerUniversitiesSection from "@/components/PartnerUniversitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E5E0DA]">
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
      </div>
      <div id="destinations">
        <AnimatedSection>
          <DestinationsSection />
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <WhyChooseSection />
      </AnimatedSection>
      <div id="universities">
        <AnimatedSection>
          <PartnerUniversitiesSection />
        </AnimatedSection>
      </div>
      <div id="testimonials">
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
      </div>
      <div className="py-20 sm:py-40 bg-white" id="about">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <TeamSection />
        </AnimatedSection>
        <AnimatedSection>
          <ValuesSection />
        </AnimatedSection>
        <AnimatedSection>
          <StatsSection />
        </AnimatedSection>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <AnimatedSection className="py-20 sm:py-40" delay={0.7}>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[var(--color-primary)]">
              Start Your International Education Journey
            </h2>
            <p className="text-sm text-[var(--color-secondary)] mb-10 max-w-2xl mx-auto">
              Get expert guidance on university admissions, visa applications,
              and career planning. Schedule a consultation with our education
              advisors.
            </p>
            <div className="flex justify-center items-center gap-4">
              <ConsultationButton />
              <div className="flex items-center justify-center gap-4">
                <PrimaryButton
                  onClick={() =>
                    window.open("https://wa.me/1234567890", "_blank")
                  }
                  className="w-12 h-12 !p-0 rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.894 1.108C6.226 1.108 1.614 5.719 1.614 11.387c0 1.868.5 3.682 1.448 5.272L1.391 22l5.439-1.644c1.592.948 3.406 1.447 5.273 1.447h.004c5.668 0 10.279-4.611 10.279-10.279S17.562 1.108 11.894 1.108z" />
                  </svg>
                </PrimaryButton>
                <PrimaryButton
                  onClick={() =>
                    (window.location.href = "mailto:contact@airbone.com")
                  }
                  className="w-12 h-12 !p-0 rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
