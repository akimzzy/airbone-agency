"use client";

import { useState, useRef, useEffect } from "react";
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
}: Readonly<DestinationCardProps>) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(undefined);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

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
      <button
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className="relative bg-gradient-to-br from-white/15 via-white/80 to-white/15 hover:from-white hover:via-white hover:to-white rounded-3xl shadow-lg transition-all cursor-pointer overflow-hidden w-[320px] min-w-[320px]"
        >
          <div className="p-6 h-[30rem] flex flex-col justify-between text-xs">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[var(--color-primary)] font-semibold flex items-center gap-2">
                  {universities} Universities
                  <div className="text-2xl">{flag}</div>
                </span>
                <span
                  className={`text-indigo-600 text-[10px] transition-opacity duration-300 text-left -mt-1 ${isHovered ? "opacity-0" : "opacity-100"
                    }`}
                >
                  see top Universities
                </span>
              </div>
              <div>
                <div
                  className={`w-10 h-10 !p-0 flex items-center justify-center group/btn rounded-full border  ${isHovered
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[#E5E0DA] text-[var(--color-primary)]"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center items-center">
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                {name}
              </h3>

              <p className="text-[var(--color-secondary)] leading-relaxed mb-2">
                {description}
              </p>
              <span
                className={`text-indigo-600 text-[10px] transition-opacity duration-300 ${isHovered ? "opacity-0 hidden" : "opacity-100 visible"
                  }`}
              >
                see top Universities
              </span>

              <div className="border-gray-200 pt-4 w-full">
                <div
                  className={`transition-all duration-500 ${isHovered
                      ? "opacity-100 max-h-[500px]"
                      : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
                  <h4 className="text-[var(--color-primary)] mb-2 text-sm">
                    Top Universities
                  </h4>
                  <div className="flex flex-col gap-2">
                    {topUniversities?.slice(0, 3).map((uni) => (
                      <div
                        key={uni.name}
                        className="bg-[var(--color-primary)]/5 p-3 rounded-2xl hover:bg-[var(--color-primary)]/15 transition-colors w-full"
                      >
                        <h5 className="font-bold text-[var(--color-primary)] mb-1">
                          {uni.name}
                        </h5>
                        <span className="flex gap-3 justify-center">
                          <p className="text-xs text-[var(--color-secondary)]">
                            {uni.location}
                          </p>
                          {/* <p className="text-xs text-indigo-600 font-medium">
                          {uni.ranking}
                        </p> */}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

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
