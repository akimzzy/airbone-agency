"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, ensuring the highest quality guidance and support for our students.",
    icon: "⭐",
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty and ethical behavior in all our interactions with students and institutions.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "We continuously adapt and improve our services to meet the evolving needs of international education.",
    icon: "💡",
  },
  {
    title: "Student Success",
    description:
      "We are committed to helping every student achieve their academic and career goals through personalized support.",
    icon: "🎓",
  },
  {
    title: "Global Perspective",
    description:
      "We embrace diversity and foster cross-cultural understanding in international education.",
    icon: "🌍",
  },
  {
    title: "Continuous Support",
    description:
      "We provide ongoing guidance and assistance throughout the student's educational journey.",
    icon: "🤲",
  },
];

export default function ValuesSection() {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-normal text-center mb-4 text-[var(--color-primary)]">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-x md:divide-y-0 mt-4 border-b">
          {[values[0], values[1], values[2]].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-1">
                {value.title}
              </h3>
              <p className="text-[var(--color-secondary)] leading-relaxed text-xs">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-x md:divide-y-0">
          {[values[3], values[4], values[5]].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white  p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* <div className="text-4xl mb-4">{value.icon}</div> */}
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-1">
                {value.title}
              </h3>
              <p className="text-[var(--color-secondary)] leading-relaxed text-xs">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
