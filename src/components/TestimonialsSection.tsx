"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Sarah Chen",
    university: "Harvard University",
    quote:
      "The guidance I received was invaluable. They helped me achieve my dream of studying at Harvard.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    program: "Computer Science",
    year: "2023",
  },
  {
    name: "James Wilson",
    university: "Oxford University",
    quote:
      "Their expertise in visa applications and interview preparation made the entire process smooth and successful.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    program: "Business Administration",
    year: "2023",
  },
  {
    name: "Aisha Patel",
    university: "University of Toronto",
    quote:
      "From university selection to scholarship applications, their support was comprehensive and personalized.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    program: "Medicine",
    year: "2022",
  },
  {
    name: "David Kim",
    university: "ETH Zurich",
    quote:
      "Their counseling helped me make informed decisions about my academic future. Now I'm studying at my dream university.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    program: "Engineering",
    year: "2023",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-40 bg-[#E5E0DA]">
      <div className="container mx-auto px-10">
        <SectionHeader
          title="Student Success Stories"
          description="Read inspiring stories of students who achieved their academic dreams and built successful careers through our guidance"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-dashed border-[var(--color-primary)]/70"
            >
              <p className="text-[var(--color-primary)] text-base mb-2 font-semibold">
                {`${testimonial.quote}`}
              </p>

              <h3 className="text-sm text-[var(--color-primary)]/70">
                {testimonial.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
