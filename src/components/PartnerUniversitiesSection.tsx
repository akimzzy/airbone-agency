"use client";

import SectionHeader from "./SectionHeader";
import UniversityCard from "./UniversityCard";

export default function PartnerUniversitiesSection() {
  const universities = [
    {
      name: "Harvard University",
      country: "USA",
      image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367",
    },
    {
      name: "University of Oxford",
      country: "UK",
      image: "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac",
    },
    {
      name: "University of Toronto",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1569534068145-66497c06f1e5",
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    },
    {
      name: "National University of Singapore",
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    },
    {
      name: "University of Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    },
    {
      name: "Seoul National University",
      country: "South Korea",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    },
  ];

  return (
    <section className="py-20 sm:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Partner Universities"
          description="We partner with leading universities worldwide, fostering strong academic relationships to deliver exceptional educational pathways"
        />
        <div className="relative overflow-hidden px-2 sm:px-0">
          <div
            className="flex gap-4 sm:gap-6 animate-scroll hover:pause-animation"
            style={{ animationDuration: "5s" }}
          >
            {universities.map((university) => (
              <UniversityCard key={university.name} {...university} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
