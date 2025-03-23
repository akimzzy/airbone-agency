"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const stats = [
  {
    value: "5000+",
    label: "Students Placed",
    description: "Successfully placed in top universities worldwide",
    icon: "👨‍🎓",
  },
  {
    value: "98%",
    label: "Visa Success Rate",
    description: "Successful student visa applications",
    icon: "📋",
  },
  {
    value: "150+",
    label: "Partner Universities",
    description: "Strong partnerships with leading institutions",
    icon: "🏛️",
  },
  {
    value: "$10M+",
    label: "Scholarships Secured",
    description: "In scholarships and financial aid for students",
    icon: "💰",
  },
];

export default function StatsSection() {
  const [, setIsVisible] = useState(false);

  return (
    <section className="py-24 pb-0">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Impact in Numbers"
          description="Making a difference in students' lives through dedicated educational consulting"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsVisible(true)}
              className="text-center p-6 rounded-2xl backdrop-blur-lg hover:bg-[var(--color-primary)]/90 bg-[var(--color-primary)] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-white/80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
