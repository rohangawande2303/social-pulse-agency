"use client"; // Ensure this page is treated as a Client Component

import React from "react";
import Navbar from "@/components/navbar"; // Ensure Navbar is Client-side
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion for animations
import { ThreeDCardExample } from "../../app/snippets/3d-card-snippet"; // Import 3D card snippet
import founderImage from "../../public/rishabhmishra.png"; // Import founder image
import Head from "next/head"; // Import Head for adding meta tags
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

const FounderPage = () => {
  const scrollToWebsiteDesign = () => {
    console.log("Scrolling to Website Design");
  };
  const scrollToGraphicDesign = () => {
    console.log("Scrolling to Graphic Design");
  };
  const scrollToShopifyStores = () => {
    console.log("Scrolling to Shopify Stores");
  };
  const scrollToBrands = () => {
    console.log("Scrolling to Brands");
  };
  const scrollToServices = () => {
    console.log("Scrolling to Services");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Add Head component here to include canonical link and structured data */}
      <Head>
        <link
          rel="canonical"
          href="https://www.socialpulseagency.in/rishabhmishra"
        />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rishabh Mishra",
              url: "https://www.socialpulseagency.in/rishabhmishra",
              image: "/rishabhmishra.png", // Path to the image for Rishabh
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "Social Pulse Agency",
              },
              description:
                "Rishabh Mishra is the founder of Social Pulse Agency, passionate about digital marketing and visual storytelling.",
            }),
          }}
        />
      </Head>

      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      {/* About Section */}
      <section
        className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-24 bg-gradient-to-b from-[#171717] via-[#1E1E1E] to-[#171717]"
        aria-label="About Us Section"
      >
        <header>
          <h1 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8103FF] to-sky-200 bg-opacity-50">
            About Rishabh Mishra
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
                Rishabh Mishra, our founder, has always been passionate about
                the power of visual storytelling. With a keen eye for design and
                a deep understanding of branding principles, he established
                Social Pulse Agency to empower businesses to connect with their
                audience through impactful visuals. Our team of passionate
                creatives, led by Rishabh Mishra&apos;s vision, brings that
                passion to life every day.
              </p>
            </article>

            <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left mt-4">
              <p>
                We&apos;re Social Pulse, a digital marketing agency fueled by
                passion and powered by expertise. We craft magnetic campaigns
                and data-driven strategies to amplify your brand voice and
                ignite growth. Think of us as your secret weapon in the
                ever-evolving digital jungle.
              </p>
              <p className="mt-4">
                Ready to conquer the online world? Let&apos;s chat!
              </p>
            </article>

            {/* LinkedIn Button */}
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/rishabh-mishra007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-blue-500 font-semibold rounded-md hover:text-blue-700 transition duration-300"
              >
                <FaLinkedin className="mr-2 text-xl" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FounderPage;
