"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// Types matching your data structure
export interface DetailedOffering {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  backgroundColor: string;
}

interface OfferingStackCardProps {
  i: number;
  offering: DetailedOffering;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

// ✅ The actual stack card component (exported properly)
const OfferingStackCard = ({
  i,
  offering,
  progress,
  range,
  targetScale,
}: OfferingStackCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center px-4 md:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-full max-w-7xl origin-top"
      >
        <div
          className="rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-gray-700/50"
          style={{ backgroundColor: "#202020" }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-200 text-lg md:text-xl font-light">
                  {offering.subtitle}
                </p>
              </div>

              <div className="space-y-3 mt-8">
                {offering.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-100 text-sm md:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={offering.image}
                alt={offering.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ✅ Export this component (used in OfferingsSection)
export default OfferingStackCard;
