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
        "Letters of recommendation",
        "Resume",
        "Entrance exam scorecards (SAT, ACT, GMAT, GRE, MCAT, and LSAT)",
        "Proof of financial support",
        "English proficiency",
        "Statement of Purpose",
        "Academic Certificates & Transcripts",
        "Proof of funds",
        "Work Experience Letters",
      ],
      image: "/destinations/usa.jpg",
      topUniversities: [
        {
          name: "Washington State University",
          location: "Vancouver",
          ranking: "#1 in World",
        },
        {
          name: "Southeast Missouri State University",
          location: "Missouri",
          ranking: "#2 in World",
        },
        {
          name: "University of Arizona",
          location: "Arizona",
          ranking: "#3 in World",
        },
        {
          name: "California State University",
          location: "East Bay",
          ranking: "#8 in World",
        },
      ],
    },
    {
      country: "canada",
      name: "Canada",
      flag: "🇨🇦",
      universities: "100+",
      description:
        "Known for high-quality education, multicultural environment, and excellent post-graduation work opportunities.",
      features: [
        "Post-graduation work permit",
        "High quality of life",
        "Multicultural society",
        "Affordable education",
      ],
      requirements: [
        "Valid passport",
        "Study permit",
        "Proof of financial support",
        "English/French proficiency",
        "Academic Certificates &  transcripts",
        "Biometrics",
      ],
      image: "/destinations/canada.jpg",
      topUniversities: [
        {
          name: "University of Toronto",
          location: "Toronto",
          ranking: "#21 in World",
        },
        {
          name: "McGill University",
          location: "Montreal",
          ranking: "#27 in World",
        },
        {
          name: "University of British Columbia",
          location: "Vancouver",
          ranking: "#34 in World",
        },
        {
          name: "University of Waterloo",
          location: "Waterloo",
          ranking: "#154 in World",
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
        "Student Visa",
        "Proof of financial means",
        "English proficiency (IELTS)",
        "Academic Certificates &  transcripts",
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
      country: "australia",
      name: "Australia",
      flag: "🇦🇺",
      universities: "43",
      description:
        "World-class education with a focus on innovation, research, and an excellent quality of life.",
      features: [
        "Post-study work rights",
        "High living standards",
        "Innovative research",
        "Beautiful environment",
      ],
      requirements: [
        "Valid passport",
        "Student visa (subclass 500)",
        "Proof of funds",
        "English proficiency",
        "Health insurance (OSHC)",
        "Academic Certificates &  transcripts",
        "GTE requirement",
      ],
      image: "/destinations/australia.jpg",
      topUniversities: [
        {
          name: "University of Melbourne",
          location: "Melbourne",
          ranking: "#34 in World",
        },
        {
          name: "Australian National University",
          location: "Canberra",
          ranking: "#37 in World",
        },
        {
          name: "University of Sydney",
          location: "Sydney",
          ranking: "#41 in World",
        },
        {
          name: "University of Queensland",
          location: "Brisbane",
          ranking: "#47 in World",
        },
      ],
    },
    {
      country: "ireland",
      name: "Ireland",
      flag: "🇮🇪",
      universities: "30+",
      description:
        "Excellence in education with a strong emphasis on technology and innovation, coupled with rich cultural heritage.",
      features: [
        "2-year stay back option",
        "English-speaking country",
        "Tech hub of Europe",
        "Rich cultural experience",
      ],
      requirements: [
        "Valid passport",
        "Student visa",
        "Proof of finances",
        "English proficiency",
        "Acceptance letter",
        "Health insurance",
      ],
      image: "/destinations/ireland.jpg",
      topUniversities: [
        {
          name: "Trinity College Dublin",
          location: "Dublin",
          ranking: "#155 in World",
        },
        {
          name: "University College Dublin",
          location: "Dublin",
          ranking: "#181 in World",
        },
        {
          name: "NUI Galway",
          location: "Galway",
          ranking: "#270 in World",
        },
        {
          name: "University College Cork",
          location: "Cork",
          ranking: "#303 in World",
        },
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
  ];

  return (
    <section className="py-20 sm:py-40 sm:pb-0">
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
            className={`flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg items-center justify-center text-[var(--color-primary)] hover:text-indigo-600 transition-all duration-300 ${
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
            className={`flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg items-center justify-center text-[var(--color-primary)] hover:text-indigo-600 transition-all duration-300 ${
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
            className="flex overflow-x-auto pb-8 gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar destinations-scroll scroll-smooth"
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
