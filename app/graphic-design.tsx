/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import ScrollReveal from "../components/ui/ScrollReveal";

const AboutUs = () => {
  return (
    <section
      className="
    relative px-4 mx-auto z-10 w-full flex flex-col items-center justify-start bg-black py-24

    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
    before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent

    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]
    after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent
  "
    >
      {/* Heading (fixed, always visible) */}
      <h2 className="text-center text-[clamp(2.2rem,5vw,4rem)] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#8103FF] to-sky-200">
        About Us
      </h2>

      {/* Main Paragraph (scroll reveal) */}
      <ScrollReveal
        containerClassName="max-w-3xl text-center mt-6"
        textClassName="text-neutral-300 text-lg md:text-2xl leading-relaxed"
      >
        We're Social Pulse, a digital marketing agency fueled by passion and
        powered by expertise. We craft magnetic campaigns and data-driven
        strategies to amplify your brand voice and ignite growth. Think of us as
        your secret weapon in the ever-evolving digital jungle. Ready to conquer
        the online world? Let's chat!
      </ScrollReveal>

      {/* Read More Button */}
      <div className="mt-8">
        <Link
          href="/about"
          className="px-6 py-3 border border-neutral-700 text-neutral-300 rounded-xl hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300 text-lg md:text-xl"
        >
          Read More →
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
