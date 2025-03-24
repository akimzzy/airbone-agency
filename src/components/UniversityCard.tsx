"use client";

import Image from "next/image";

interface UniversityCardProps {
  name: string;
  country: string;
  image: string;
  width?: string;
  height?: string;
}

export default function UniversityCard({
  name,
  country,
  image,
  width = "250px",
  height = "250px",
}: UniversityCardProps) {
  return (
    <div
      style={{ width, height, minWidth: width }}
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <Image
        src={`${image}?auto=format&fit=crop&w=800&h=800&q=80`}
        alt={name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-opacity duration-300"></div>
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-200">{country}</p>
      </div>
    </div>
  );
}
