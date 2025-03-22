"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (inView) setHasBeenInView(true);
  }, [inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 50 : -50,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        delay: hasBeenInView ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
