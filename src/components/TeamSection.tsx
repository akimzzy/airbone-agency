"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const team = [
  {
    name: "Dr. Emily Chen",
    role: "Lead Educational Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    description:
      "Former admissions officer with 15+ years of experience in international education.",
    specialization: "University Admissions",
  },
  {
    name: "Michael Thompson",
    role: "Visa Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    description: "Expert in student visa applications with a 98% success rate.",
    specialization: "Immigration Law",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Career Development Advisor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description:
      "Career counseling professional specializing in international student placement.",
    specialization: "Career Guidance",
  },
  {
    name: "James Anderson",
    role: "Scholarship Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description: "Helped students secure over $2M in scholarships and grants.",
    specialization: "Financial Aid",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 pb-0 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Meet Our Team"
          description="Experienced professionals dedicated to helping you achieve your educational goals"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] text-center mb-2">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium text-center mb-3">
                {member.role}
              </p>
              <p className="text-[var(--color-secondary)] text-center mb-4">
                {member.description}
              </p>
              <div className="text-sm text-[var(--color-secondary)] text-center">
                <span className="font-medium">Specialization:</span>{" "}
                {member.specialization}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
