interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: Readonly<SectionHeaderProps>) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-sm mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-secondary)] font-semibold">
          {description}
        </p>
      )}
    </div>
  );
}
