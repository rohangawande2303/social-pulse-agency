"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { DetailedOffering } from "@/app/data/services";
import OfferingStackCard from "@/components/ui/OfferingStackCard";

interface OfferingsSectionProps {
  offerings: DetailedOffering[];
  serviceTitle: string;
  serviceSubtitle: string;
}

const OfferingsSection = ({
  offerings,
  serviceTitle,
  serviceSubtitle,
}: OfferingsSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white m-0 p-0"
      // 🔧 Adjusted height formula to remove the blank space at bottom
      style={{ minHeight: `${offerings.length * 100}vh` }}
    >
      {/* Sticky Header (Top-Left, no extra space above) */}
      <motion.div
        className="sticky top-0 z-50 flex flex-col justify-start px-8 md:px-16 pt-24 bg-black pointer-events-none"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-left space-y-4">
            <p className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              OUR OFFERINGS
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {serviceTitle}
              </h2>

              <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md mt-2 lg:mt-0">
                {serviceSubtitle}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll-Based Stacked Cards */}
      <main className="relative flex w-full flex-col items-center justify-center">
        {offerings.map((offering, i) => {
          const targetScale = Math.max(
            0.8,
            1 - (offerings.length - i - 1) * 0.08
          );

          return (
            <OfferingStackCard
              key={i}
              i={i}
              offering={offering}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default OfferingsSection;
