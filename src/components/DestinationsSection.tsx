"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setIsScrollStart(container.scrollLeft <= 0);
    setIsScrollEnd(
      Math.ceil(container.scrollLeft + container.clientWidth) >=
        container.scrollWidth
    );
  };

  const destinations = [
    {
      country: "united-states",
      name: "United States",
      flag: "🇺🇸",
      universities: "4000+",
      description:
        "Home to many of the world's top-ranked universities, offering diverse programs and vibrant campus life.",
      features: [
        "World-class research facilities",
        "Optional Practical Training (OPT)",
        "Diverse cultural experience",
        "Extensive scholarship opportunities",
      ],
      requirements: [
        "Valid passport",
        "F-1 Student Visa",
        "Proof of financial support",
        "English proficiency (TOEFL/IELTS)",
        "Academic transcripts",
        "Letters of recommendation",
      ],
      image: "/destinations/usa.jpg",
      topUniversities: [
        {
          name: "Harvard University",
          location: "Cambridge, MA",
          ranking: "#1 in World",
        },
        { name: "MIT", location: "Cambridge, MA", ranking: "#2 in World" },
        {
          name: "Stanford University",
          location: "Stanford, CA",
          ranking: "#3 in World",
        },
        {
          name: "Yale University",
          location: "New Haven, CT",
          ranking: "#8 in World",
        },
      ],
    },
    {
      country: "united-kingdom",
      name: "United Kingdom",
      flag: "🇬🇧",
      universities: "150+",
      description:
        "Rich academic heritage combined with modern innovation and research opportunities.",
      features: [
        "Shorter degree programs",
        "Post-study work visa",
        "Historic institutions",
        "Multicultural environment",
      ],
      requirements: [
        "Valid passport",
        "Tier 4 Student Visa",
        "Proof of financial means",
        "English proficiency (IELTS)",
        "Academic qualifications",
        "Tuberculosis test certificate",
      ],
      image: "/destinations/uk.jpg",
      topUniversities: [
        {
          name: "University of Oxford",
          location: "Oxford",
          ranking: "#4 in World",
        },
        {
          name: "University of Cambridge",
          location: "Cambridge",
          ranking: "#5 in World",
        },
        {
          name: "Imperial College London",
          location: "London",
          ranking: "#6 in World",
        },
        { name: "UCL", location: "London", ranking: "#10 in World" },
      ],
    },
    {
      country: "germany",
      name: "Germany",
      flag: "🇩🇪",
      universities: "400+",
      description:
        "Excellence in engineering and technology education with many tuition-free universities and strong industry connections.",
      features: [
        "Tuition-free education",
        "Strong industry links",
        "Rich cultural heritage",
        "Work opportunities",
      ],
      requirements: [
        "Valid passport",
        "German Student Visa",
        "Proof of financial resources",
        "German or English proficiency",
        "University entrance qualification",
        "Health insurance",
      ],
      image: "/destinations/germany.jpg",
      topUniversities: [
        {
          name: "Technical University of Munich",
          location: "Munich",
          ranking: "#25 in World",
        },
        {
          name: "Ludwig Maximilian University",
          location: "Munich",
          ranking: "#32 in World",
        },
        {
          name: "Heidelberg University",
          location: "Heidelberg",
          ranking: "#42 in World",
        },
        {
          name: "Humboldt University",
          location: "Berlin",
          ranking: "#55 in World",
        },
      ],
    },
    {
      country: "france",
      name: "France",
      flag: "🇫🇷",
      universities: "250+",
      description:
        "World-renowned for arts, sciences, and culture with prestigious grandes écoles and research institutions.",
      features: [
        "Affordable education",
        "Rich cultural experience",
        "Research excellence",
        "Central European location",
      ],
      requirements: [
        "Valid passport",
        "VLS-TS Student Visa",
        "Proof of sufficient funds",
        "French or English proficiency",
        "Previous diplomas",
        "Campus France registration",
      ],
      image: "/destinations/france.jpg",
      topUniversities: [
        {
          name: "Paris Sciences et Lettres",
          location: "Paris",
          ranking: "#28 in World",
        },
        {
          name: "École Polytechnique",
          location: "Paris",
          ranking: "#33 in World",
        },
        {
          name: "Sorbonne University",
          location: "Paris",
          ranking: "#43 in World",
        },
        {
          name: "CentraleSupélec",
          location: "Paris",
          ranking: "#61 in World",
        },
      ],
    },
  ];

  return (
    <section className="pt-30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Popular Destinations"
          description="Explore top education destinations and find your perfect study abroad location"
        />
        <div className="relative px-4 sm:px-0">
          <button
            onClick={() => {
              const container = document.querySelector(".destinations-scroll");
              if (container) container.scrollLeft -= 400;
            }}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg items-center justify-center text-[#4A4643] hover:text-indigo-600 transition-all duration-300 ${
              isScrollStart ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => {
              const container = document.querySelector(".destinations-scroll");
              if (container) container.scrollLeft += 400;
            }}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg items-center justify-center text-[#4A4643] hover:text-indigo-600 transition-all duration-300 ${
              isScrollEnd ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div
            className="flex overflow-x-auto py-8 gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar destinations-scroll scroll-smooth"
            onScroll={handleScroll}
          >
            {destinations.map((destination) => (
              <DestinationCard key={destination.country} {...destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
