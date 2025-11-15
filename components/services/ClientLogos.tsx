"use client";
import Image from "next/image";
import React from "react";

interface ClientLogosProps {
  logos: { id: number; src: string; alt: string }[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <section className="py-14 bg-black overflow-hidden relative">
      {/* ✅ Continuous marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {logos.map((logo) => (
            <div
              key={`dup-${logo.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 👇 White horizontal divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[1px] sm:h-[1px] bg-white opacity-30" />
      </div>

      {/* 👇 Tailwind animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
