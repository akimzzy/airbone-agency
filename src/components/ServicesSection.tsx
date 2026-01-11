"use client";

import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import { useContactModal } from "@/context/ContactModalContext";
import { PrimaryButton } from "./PrimaryButton";

const services = [
  {
    title: "University Admissions",
    description:
      "Expert guidance through the entire university application process, from selecting the right institutions to crafting compelling personal statements and preparing for interviews.",
    icon: "🎓",
    features: [
      "Personalized university selection",
      "Application strategy planning",
      "Essay review and feedback",
      "Interview preparation",
    ],
    cta: "Learn More",
  },
  {
    title: "Visa Assistance",
    description:
      "Comprehensive support for student visa applications, ensuring all documentation is properly prepared and maximizing your chances of approval.",
    icon: "📋",
    features: [
      "Document preparation guidance",
      "Visitor or Tourist visa",
      "Application timeline planning",
      "Status tracking support",
    ],
    cta: "Explore Services",
  },
  {
    title: "Career Counseling",
    description:
      "Professional guidance to help you make informed decisions about your academic and career path, aligned with your goals and aspirations.",
    icon: "💼",
    features: [
      "Career path assessment",
      "Course selection advice",
      "Industry insights",
      "Internship guidance",
    ],
    cta: "Get Started",
  },
  {
    title: "Canada Permanent Residency (PR)",
    description:
      "Comprehensive support for your Canadian Permanent Residency application, from eligibility assessment to final submission.",
    icon: "🇨🇦",
    features: [
      "Express Entry & PNP guidance",
      "Document verification & ECA",
      "Family Sponsorship support",
      "Personalized PR strategy",
    ],
    cta: "Learn More",
  },
];

export default function ServicesSection() {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <SectionHeader
              title="Our Services"
              description="Professional educational and immigration consulting services delivered with excellence"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100/10">
            {services.map((service, index) => {
              const colors = [
                { class: "bg-[#EE1D23]/10", rgb: "238, 29, 35", hover: "group-hover:bg-[#EE1D23]/[0.02]" }, // Brand Red
                { class: "bg-[#DCA513]/10", rgb: "220, 165, 19", hover: "group-hover:bg-[#DCA513]/[0.02]" }, // Brand Gold
                { class: "bg-blue-600/10", rgb: "37, 99, 235", hover: "group-hover:bg-blue-600/[0.02]" }, // Sophisticated Blue
                { class: "bg-emerald-600/10", rgb: "5, 150, 105", hover: "group-hover:bg-emerald-600/[0.02]" } // Elegant Emerald
              ];
              const activeColor = colors[index % colors.length];

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    "--border-light-rgb": activeColor.rgb,
                    "--border-delay": `${index * 1}s`
                  } as React.CSSProperties}
                  className="group relative border-trace-container"
                >
                  <div className={`border-trace-inner p-12 sm:p-20 ${activeColor.hover} transition-colors duration-500`}>
                    <div className="flex flex-col h-full">
                      <div className={`w-16 h-16 ${activeColor.class} flex items-center justify-center text-3xl mb-12 transition-transform duration-500 group-hover:scale-110`}>
                        {/* Icons removed for a cleaner, abstract look */}
                      </div>

                      <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)] group-hover:text-[var(--brand-red)] transition-colors duration-300 uppercase tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-[var(--color-secondary)] mb-10 leading-relaxed text-sm max-w-sm">
                        {service.description}
                      </p>

                      <div className="space-y-4 mt-auto">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300 text-sm font-medium"
                          >
                            <span className="w-1 h-1 bg-[var(--brand-gold)] mr-4 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <PrimaryButton
              onClick={() => openContactModal()}
              className="px-12 py-4"
            >
              Inquire Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

