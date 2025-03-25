"use client";

import { useContactModal } from "@/context/ContactModalContext";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.FormEvent | undefined) => void;
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  const { openContactModal } = useContactModal();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openContactModal();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        !className?.includes("bg-") ? "bg-[#E5E0DA]" : ""
      } text-[var(--color-primary)] px-4 sm:px-7 py-2 sm:py-4 text-sm sm:text-base rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition-all duration-300 ease-in-out border border-[var(--color-primary)] ${className}`}
    >
      {children}
    </button>
  );
}

interface ConsultationButtonProps {
  className?: string;
  country?: string;
}

export function ConsultationButton({
  className = "",
  country,
}: ConsultationButtonProps) {
  const { openContactModal } = useContactModal();

  return (
    <PrimaryButton
      onClick={() => openContactModal(country)}
      className={`px-4 sm:px-6 py-2 rounded-full hover:scale-105 ${className}`}
    >
      Book Consultation
    </PrimaryButton>
  );
}
