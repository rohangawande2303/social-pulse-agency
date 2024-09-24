/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";

const AboutUs = () => {
  return (
    <section
      className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-24 bg-gradient-to-b from-[#171717] via-[#1E1E1E] to-[#171717]"
      aria-label="About Us Section"
    >
      <header>
        <h1 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8103FF] to-sky-200 bg-opacity-50">
          About Us
        </h1>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          We Build Brands that Captivate: Meet the Visionary Behind It All
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:space-x-1 pb-24">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full md:w-1/3 flex flex-col items-center justify-center"
        >
          <ThreeDCardExample />
          <h2 className="text-lg md:text-2xl font-bold text-neutral-300 text-center pt-8">
            Founder - Rishabh Mishra
          </h2>
        </motion.div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center">
          <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left md:pb-12">
            <p>
              Rishabh Mishra, our founder, has always been passionate about the
              power of visual storytelling. With a keen eye for design and a
              deep understanding of branding principles, he established Social
              Pulse Agency to empower businesses to connect with their audience
              through impactful visuals. Our team of passionate creatives, led
              by Rishabh Mishra's vision, brings that passion to life every day.
            </p>
          </article>

          <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left mt-4">
            <p>
              We're Social Pulse, a digital marketing agency fueled by passion
              and powered by expertise. We craft magnetic campaigns and
              data-driven strategies to amplify your brand voice and ignite
              growth. Think of us as your secret weapon in the ever-evolving
              digital jungle.
            </p>
            <p className="mt-4">
              Ready to conquer the online world? Let&apos;s chat!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
