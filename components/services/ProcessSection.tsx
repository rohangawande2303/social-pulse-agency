// components/services/ProcessSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  heading?: string;
  subheading?: string;
  steps?: ProcessStep[];
}

export default function ProcessSection({
  title = "OUR PROCESS",
  heading = "Building Your",
  subheading = "Digital Presence",
  steps = [],
}: ProcessSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !waveRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
      );

      // Parallax effect - moves slower than scroll
      const translateY = scrollProgress * 200 - 100;
      waveRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden bg-[#1a1a1a]"
    >
      {/* Animated Wave Background with Parallax */}
      <div
        ref={waveRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transition: "transform 0.1s ease-out",
        }}
      >
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 Q360,200 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="url(#wave-gradient)"
            opacity="0.15"
          />
          <path
            d="M0,450 Q360,250 720,450 T1440,450 L1440,800 L0,800 Z"
            fill="url(#wave-gradient)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8103FF" />
              <stop offset="100%" stopColor="#b34dff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-semibold tracking-wider mb-6 text-[#00ff87]">
              {title}
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">{heading}</span>
              <br />
              <span
                className="inline-block mt-2"
                style={{
                  backgroundImage: "linear-gradient(to right, #8103FF, #b34dff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {subheading}
              </span>
            </h2>
            <button className="group mt-8 flex items-center gap-2 text-white hover:text-[#b34dff] transition-colors">
              <span className="font-medium">VIEW ALL PROJECTS</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-[#8103FF]/30 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white border-2 border-[#8103FF] bg-[#1a1a1a] group-hover:bg-gradient-to-r group-hover:from-[#8103FF] group-hover:to-[#b34dff] transition-all duration-300"
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#b34dff] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}