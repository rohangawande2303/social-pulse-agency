"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GraphicDesign from "./graphic-design";
import Services from "./services";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import LocationSection from "./LocationSection";
import React from "react";

// Words for the carousel
const words = [
  "Stunning Creatives!",
  "Social Media Marketing!",
  "Google My Business Optimization!",
  "E-commerce Boost",
  "Content Marketing",
  "Targeted Ads That Convert",
  "SEO Optimization",
];

// MemoizedWords Component to optimize rendering
const MemoizedWords = React.memo(
  ({ words, currentIndex }: { words: string[]; currentIndex: number }) => (
    <div
      className="absolute inset-0 flex transition-transform duration-2000 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {words.map((word, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full flex items-center justify-center text-[#8103FF] text-4xl lg:text-6xl font-extrabold"
        >
          {word}
        </div>
      ))}
    </div>
  )
);

MemoizedWords.displayName = "MemoizedWords";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () =>
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToGraphicDesign = () =>
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToShopifyStores = () =>
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToBrands = () =>
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () =>
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="w-full md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <div className="">
        <section className="app__hero relative bg-black text-white min-h-screen flex items-center justify-center md:pt-0">
          <div className="container mx-auto p-6 lg:px-8 text-center">
            {/* Start with a non-animated view for fast LCP */}
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight lg:leading-tight mt-0 md:mt-14">
              Craft Your Brand Story . . .
            </h1>
            {/* MemoizedWords without motion initially */}
            <div className="relative w-full overflow-hidden h-28 md:h-24">
              <MemoizedWords words={words} currentIndex={currentIndex} />
            </div>
            <p className="hidden md:block text-lg text-white mb-4 pt-4 md:pt-8">
              At SocialPulse, our experts showcase your company&apos;s unique
              specifications effectively.
            </p>
            <Link
              href="/book"
              prefetch={true}
              className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-4 text-white"
            >
              Book a Call
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=8451951123&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={true}
              className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-4 text-white md:hidden"
            >
              WhatsApp
            </Link>
          </div>
        </section>

        <div ref={websiteDesignRef}>{/* <WebsiteDesign /> */}</div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>{/* <ShopifyStores /> */}</div>
        <div ref={brandsRef}>{/* <Brands /> */}</div>
        <div id="services" ref={servicesRef}>
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <LocationSection />
        <Footer />
      </div>
    </div>
  );
}
