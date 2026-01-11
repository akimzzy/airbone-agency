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

const sentence = "Expert Educational Consulting";
const sentence2 = "That Puts You Ahead.";
const words = sentence.split(" ");
const words2 = sentence2.split(" ");
const lastWordIndex = [...words, ...words2].length - 1;
const paragraphDelay = (lastWordIndex + 1) * 0.1;
const buttonDelay = paragraphDelay + 0.25; // Changed from 0.5 to 0.25 to start halfway through paragraph transition

export default function HeroSection() {
  return (
    <AnimatedSection className="relative h-[100vh] flex items-center justify-end overflow-hidden flex-col px-4 sm:px-0 py-36 hero-moving-gradient">
      {/* Background Atmosphere Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.5, opacity: 0, x: -100, y: -100 }}
          animate={{
            scale: [1, 1.1, 0.9, 1.15, 0.95, 1.05, 0.9, 1],
            opacity: [0.12, 0.1, 0.12, 0.08, 0.12, 0.09, 0.12],
            x: [0, 80, -40, 100, -20, 60, -80, 0],
            y: [0, -60, 40, -80, 50, -30, 70, 0],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[var(--brand-gold)] blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ scale: 1.5, opacity: 0, x: 100, y: 100 }}
          animate={{
            scale: [1, 0.9, 1.1, 0.95, 1.2, 0.85, 1.05, 1],
            opacity: [0.04, 0.03, 0.04, 0.03, 0.04, 0.02, 0.04],
            x: [0, -100, 50, -80, 30, -60, 90, 0],
            y: [0, 70, -50, 90, -60, 40, -80, 0],
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            delay: 0.5,
          }}
          style={{ willChange: "transform, opacity" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[var(--brand-red)] blur-[100px] rounded-full"
        />
        {/* Dominant White Luminous Pools */}
        <motion.div
          animate={{
            x: [0, 150, -100, 200, -50, 120, -180, 0],
            y: [0, -100, 150, -120, 180, -80, 100, 0],
            scale: [1, 1.5, 0.8, 1.3, 0.9, 1.4, 0.85, 1],
            opacity: [0.05, 0.15, 0.08, 0.18, 0.1, 0.2, 0.12, 0.05],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="absolute top-[10%] left-[20%] w-[50%] h-[50%] bg-white blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -120, 180, -60, 140, -90, 110, 0],
            y: [0, 80, -130, 90, -150, 60, -110, 0],
            scale: [1.2, 0.8, 1.4, 0.9, 1.1, 0.85, 1.3, 1.2],
            opacity: [0.08, 0.18, 0.1, 0.2, 0.12, 0.18, 0.08, 0.08],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="absolute bottom-[20%] right-[10%] w-[45%] h-[45%] bg-white blur-[90px] rounded-full"
        />
      </div>


      <div className="absolute inset-0 noise-overlay" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-7xl">
        <h1 className="font-damion text-4xl sm:text-5xl md:text-6xl font-normal mb-4 sm:mb-2 leading-tight tracking-tight text-[var(--color-primary)] flex flex-wrap justify-center gap-x-2 flex-col drop-shadow-sm">
          <div className="">
            {words.map((word, index) => (
              <motion.span
                key={index + word}
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
          </div>

          <div className="">
            {words2.map((word, index) => (
              <motion.span
                key={index + word}
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
          </div>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: paragraphDelay, duration: 0.5 }}
          className="text-sm sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-secondary)] font-semibold px-2 sm:px-0 drop-shadow-sm"
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
