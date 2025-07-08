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
}: Readonly<WhyChooseFeatureProps>) {
  return (
    <div className="bg-white/50 p-6 rounded-2xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="text-lg mb-1 text-[var(--color-primary)] font-semibold text-center">
        {title}
      </h3>
      <p className="text-[var(--color-secondary)] text-center text-xs">{description}</p>
    </div>
  );
}
