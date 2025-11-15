// app/components/services/ServiceBanner.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // ✅ Next.js Image

interface ServiceBannerProps {
  heading: string;
  subheading: string;
  description: string;
  image: string; // ✅ image instead of lottie
  ctaText: string;
}

export default function ServiceBanner({
  heading,
  subheading,
  description,
  image,
  ctaText,
}: ServiceBannerProps) {
  const scrollToContact = () => {
    const element = document.getElementById("collaborate-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-auto md:h-[60vh] flex items-center justify-center bg-black overflow-hidden pt-6 md:pt-12">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ✅ Mobile-first: Image on top for mobile  */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="block lg:hidden w-full max-w-xs mx-auto mb-6"
          >
            <Image
              src={image}
              alt={heading}
              width={500} // ✅ required for next/image
              height={500}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              priority // ✅ ensures banner loads fast
            />
          </motion.div>

          {/* ✅ Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {heading}
              <span
                className="block mt-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8103FF, #b34dff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {subheading}
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* ✅ Desktop: Image on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-full h-[50vh] relative"
          >
            <Image
              src={image}
              alt={heading}
              fill // ✅ make it responsive in container
              className="object-contain rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
