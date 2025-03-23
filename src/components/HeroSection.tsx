"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ConsultationButton } from "./PrimaryButton";

const typeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const sentence = "Expert Educational Consulting That Puts You Ahead.";
const words = sentence.split(" ");
const lastWordIndex = words.length - 1;
const paragraphDelay = (lastWordIndex + 1) * 0.1;
const buttonDelay = paragraphDelay + 0.25; // Changed from 0.5 to 0.25 to start halfway through paragraph transition

export default function HeroSection() {
  return (
    <AnimatedSection className="relative h-[100vh] flex items-center justify-end overflow-hidden flex-col px-4 sm:px-0 py-36">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-7xl">
        <h1 className="font-damion text-4xl sm:text-5xl md:text-8xl font-normal mb-4 sm:mb-2 leading-tight tracking-tight text-[var(--color-primary)] flex flex-wrap justify-center gap-x-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={typeVariants}
              style={{
                display: "inline-block",
                marginRight: "0.3em",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: paragraphDelay, duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-secondary)] font-semibold px-2 sm:px-0"
        >
          Guiding students through admissions, visa processes, scholarships, and
          global opportunities with personalized support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: buttonDelay, duration: 0.5 }}
        >
          <ConsultationButton className="mt-4 sm:mt-6" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
