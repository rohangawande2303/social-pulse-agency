"use client";
import React, { useState } from "react";

interface AnimatedButtonProps {
  label?: string;
  onClick?: () => void;
  purple?: boolean;
  className?: string;
  textColor?: string;
}

export default function AnimatedButton({
  label = "Download",
  onClick,
  purple = false,
  className = "",
  textColor = "text-black", // <— default color
}: AnimatedButtonProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative flex items-center rounded-full px-5 py-3
        border-2 transition-all duration-300 overflow-hidden
        ${purple ? "border-purple-500" : "border-purple-500"}
        ${active ? "w-16" : "w-40"}
        ${className}
      `}
    >
      <div
        className={`
          absolute inset-0 bg-purple-600 transition-all duration-500
          ${active ? "h-full" : "h-0"}
        `}
      ></div>

      <div className="relative flex items-center justify-center transition-all duration-300">
        {!active && (
          <span className={`${textColor} text-lg font-medium`}>{label}</span>
        )}

        {active && (
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
