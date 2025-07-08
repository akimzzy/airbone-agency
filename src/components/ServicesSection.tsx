"use client";

import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";

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
];

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeader
            title="Our Services"
            description="Comprehensive educational consulting services tailored to your academic journey"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white/50 p-8 rounded-3xl hover:bg-white transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl text-center border border-dashed border-black/20"
            >
              {/* <div className="text-4xl mb-6">{service.icon}</div> */}
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                {service.title}
              </h3>
              <p className="text-[var(--color-secondary)] mb-3 leading-relaxed text-xs">
                {service.description}
              </p>
              <div className="divide-y-1 divide-black/20 divide-dashed">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-center text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300 p-3 text-xs font-semibold"
                  >
                    {/* <span className="text-indigo-500 mr-2">✓</span> */}
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
