"use client";
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Base text - always visible */}
      <span className="text-[#b5b5b5]">{text}</span>

      {/* Shimmer overlay */}
      <span
        className={`absolute inset-0 ${
          disabled ? "" : "shiny-animate"
        } pointer-events-none`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 60%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          color: "transparent",
          opacity: 0.9, // subtle glassy shine
          animationDuration,
        }}
      >
        {text}
      </span>

      {/* Scoped CSS for animation */}
      <style jsx>{`
        .shiny-animate {
          animation: shine ${animationDuration} linear infinite;
        }
        @keyframes shine {
          0% {
            background-position: 100%;
          }
          100% {
            background-position: -100%;
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;
