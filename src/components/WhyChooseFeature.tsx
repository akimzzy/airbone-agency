"use client";

interface WhyChooseFeatureProps {
  title: string;
  description: string;
  icon: string;
}

export default function WhyChooseFeature({
  title,
  description,
  icon,
}: WhyChooseFeatureProps) {
  return (
    <div className="bg-white/50 p-8 rounded-2xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-6 text-center">{icon}</div>
      <h3 className="text-xl mb-2 text-[#4A4643] font-semibold text-center">
        {title}
      </h3>
      <p className="text-[#8B8178] text-center">{description}</p>
    </div>
  );
}
