"use client";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export default function Tooltip({
  text,
  children,
  position = "bottom",
  className = "",
}: TooltipProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "-top-8 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "-bottom-8 left-1/2 transform -translate-x-1/2";
      case "left":
        return "left-0 top-1/2 transform -translate-x-full -translate-y-1/2 -ml-2";
      case "right":
        return "right-0 top-1/2 transform translate-x-full -translate-y-1/2 ml-2";
      default:
        return "-bottom-8 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div className={`relative group inline-block ${className}`}>
      {children}
      <div
        className={`absolute ${getPositionClasses()} bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50`}
      >
        {text}
      </div>
    </div>
  );
}
