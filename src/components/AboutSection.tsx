"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section className="">
      <div className="container md:mx-auto px-8">
        <SectionHeader
          title="About Us"
          description="Dedicated to helping students achieve their international education goals"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="About Airborne Educational Consult"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 over"
          >
            <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
              Your Journey to Global Education Starts Here
            </h3>
            <p className="text-[var(--color-secondary)] leading-relaxed">
              At Airborne Educational Consult, we understand that pursuing
              international education is a significant life decision. Our team
              of experienced consultants is committed to providing personalized
              guidance and support throughout your educational journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-indigo-500 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">
                    Expert Guidance
                  </h4>
                  <p className="text-[var(--color-secondary)]">
                    Our consultants have years of experience in international
                    education and admissions processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-indigo-500 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">
                    Personalized Approach
                  </h4>
                  <p className="text-[var(--color-secondary)]">
                    We tailor our services to match your unique goals,
                    preferences, and academic background.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-indigo-500 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">
                    Comprehensive Support
                  </h4>
                  <p className="text-[var(--color-secondary)]">
                    From university selection to visa applications, we support
                    you at every step of your journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
