"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnerUniversitiesSection from "@/components/PartnerUniversitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
// import AboutSection from "@/components/AboutSection";
// import TeamSection from "@/components/TeamSection";
// import ValuesSection from "@/components/ValuesSection";
// import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";

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
      {/* <div className="py-20 sm:py-40 bg-white" id="about">
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
      </div> */}

      {/* Contact Section */}
      <div id="contact">
        <AnimatedSection className="py-20 sm:py-40" delay={0.7}>
          <ContactSection />
        </AnimatedSection>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
