interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4A4643] mb-4">
        {title}
      </h2>
      {description && (
        <>
          <p className="text-base mb-8 max-w-2xl mx-auto leading-relaxed text-[#8B8178] font-semibold">
            {description}
          </p>
        </>
      )}
    </div>
  );
}
