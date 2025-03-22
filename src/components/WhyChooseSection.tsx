"use client";

import WhyChooseFeature from "./WhyChooseFeature";

export default function WhyChooseSection() {
  return (
    <section className="pb-24 pt-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-normal text-center mb-12 sm:mb-16 text-[#4A4643] px-2 sm:px-0">
          Why Choose These Destinations?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Quality Education",
              description:
                "World-renowned universities with high academic standards and cutting-edge research facilities",
              icon: "🎓",
            },
            {
              title: "Career Opportunities",
              description:
                "Post-study work options, industry connections, and global career prospects for long-term success",
              icon: "💼",
            },
            {
              title: "Student Experience",
              description:
                "Rich cultural exposure, vibrant campus life, and comprehensive support for international students",
              icon: "🌟",
            },
            {
              title: "Global Recognition",
              description:
                "Internationally recognized degrees and qualifications that open doors to opportunities worldwide",
              icon: "🌍",
            },
          ].map((feature) => (
            <WhyChooseFeature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
