"use client";

import { useState, useRef, useEffect } from "react";
import { PrimaryButton } from "./PrimaryButton";
import DestinationModal from "./DestinationModal";

interface University {
  name: string;
  location: string;
  ranking: string;
}

interface DestinationCardProps {
  country: string;
  name: string;
  flag: string;
  universities: string;
  description: string;
  features: string[];
  image: string;
  topUniversities?: University[];
  requirements: string[];
  onScroll?: (
    scrollLeft: number,
    scrollWidth: number,
    clientWidth: number
  ) => void;
}

export default function DestinationCard({
  // country,
  name,
  flag,
  universities,
  description,
  features,
  // image,
  topUniversities,
  requirements,
  onScroll,
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current && onScroll) {
        onScroll(
          cardRef.current.scrollLeft,
          cardRef.current.scrollWidth,
          cardRef.current.clientWidth
        );
      }
    };

    const currentCard = cardRef.current;
    if (currentCard) {
      currentCard.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (currentCard) {
        currentCard.removeEventListener("scroll", handleScroll);
      }
    };
  }, [onScroll]);

  return (
    <>
      <div
        ref={cardRef}
        className="relative bg-gradient-to-br from-white/15 via-white/80 to-white/15 hover:from-white/95 hover:via-white/85 hover:to-white/75 rounded-2xl shadow-lg transition-all overflow-hidden cursor-pointer transform hover:-translate-y-1 w-[400px] min-w-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-8 h-[36rem] flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[var(--color-primary)] font-semibold flex items-center gap-2">
                {universities} Universities
                <div className="text-2xl">{flag}</div>
              </span>
              <span
                className={`text-indigo-600 text-xs transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                see top Universities
              </span>
            </div>
            <div>
              <PrimaryButton
                className={`w-10 h-10 !p-0 flex items-center justify-center group/btn ${
                  isHovered ? "bg-[var(--color-primary)] text-white" : ""
                }`}
                onClick={() => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform -rotate-45 transition-colors duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </PrimaryButton>
            </div>
          </div>

          <div className="flex flex-col text-center items-center">
            <h3 className="text-xl font-semibold mb-1 text-[var(--color-primary)]">
              {name}
            </h3>

            <p className="text-[var(--color-secondary)] leading-relaxed mb-2">
              {description}
            </p>
            <span
              className={`text-indigo-600 text-xs transition-opacity duration-300 ${
                isHovered ? "opacity-0 hidden" : "opacity-100 visible"
              }`}
            >
              see top Universities
            </span>

            <div className="border-gray-200 pt-4 w-full">
              <div
                className={`transition-all duration-500 ${
                  isHovered
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <h4 className="text-[var(--color-primary)] mb-2 text-lg">
                  Top Universities
                </h4>
                <div className="flex flex-col gap-2">
                  {topUniversities?.slice(0, 3).map((uni) => (
                    <div
                      key={uni.name}
                      className="bg-[var(--color-primary)]/5 p-3 rounded-2xl hover:bg-[var(--color-primary)]/10 transition-colors w-full"
                    >
                      <h5 className="font-bold text-[var(--color-primary)] mb-1">
                        {uni.name}
                      </h5>
                      <span className="flex gap-3 justify-center">
                        <p className="text-xs text-[var(--color-secondary)] mb-1">
                          {uni.location}
                        </p>
                        <p className="text-xs text-indigo-600 font-medium">
                          {uni.ranking}
                        </p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DestinationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        flag={flag}
        description={description}
        features={features}
        requirements={requirements || []}
        topUniversities={topUniversities || []}
      />
    </>
  );
}
