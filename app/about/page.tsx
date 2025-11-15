"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function ScrollRevealText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function RevealHeading() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div ref={headingRef} className="relative overflow-hidden py-20 md:py-32">
      <h1
        className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white text-balance transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        About Us
      </h1>
    </div>
  );
}

function StudioStory() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ScrollRevealText className="md:pt-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h2>
          </ScrollRevealText>

          <ScrollRevealText>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We&apos;re Social Pulse, a digital marketing agency fueled by
              passion and powered by expertise. We craft magnetic campaigns and
              data-driven strategies to amplify your brand voice and ignite
              growth. Think of us as your secret weapon in the ever-evolving
              digital jungle. Ready to conquer the online world? Let&apos;s
              chat!
            </p>
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollRevealText className="mb-12">
          <p className="text-gray-400 text-sm md:text-base mb-16">
            Our founder
          </p>
        </ScrollRevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollRevealText>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src="/images/team/rishabh1.jpg"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </ScrollRevealText>

          <ScrollRevealText className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <strong>Rishabh Mishra</strong>, the visionary{" "}
              <strong>Founder & CEO of Social Pulse Agency</strong>, is an
              award-winning digital marketing expert and has great experience in
              transforming businesses through strategic online solutions.
              Certified by the Digital Marketing Institute, Rishabh has helped
              many brands achieve measurable growth through innovative marketing
              strategies.
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Rishabh Mishra</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Linkedin ↗
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Youtube ↗
              </a>
            </div>

            <Link href="/rishabhmishra">
              <Button
                variant="outline"
                className="mt-6 bg-white text-black border-white hover:bg-gray-100 hover:text-black"
              >
                Read More
              </Button>
            </Link>
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      name: "Rohan Gawande",
      position: "Tech Head at Social Pulse Agency",
      image: "/images/team/rohan1.png",
    },
    {
      name: "Mamta wadhwani",
      position: "Account Manager at Social Pulse Agency",
      image: "/images/team/mamta1.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollRevealText className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Team</h2>
        </ScrollRevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <ScrollRevealText key={index} className="space-y-4">
              <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.position}</p>
              </div>
            </ScrollRevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  // Dummy scroll functions (because About page does not use them)
  const scrollToWebsiteDesign = () => {};
  const scrollToGraphicDesign = () => {};
  const scrollToShopifyStores = () => {};
  const scrollToBrands = () => {};
  const scrollToServices = () => {};

  return (
    <main className="bg-black min-h-screen">
      {/* Navbar */}
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      {/* Header Section */}
      <div className="px-4 md:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <RevealHeading />
        </div>
      </div>

      {/* Studio Story Section */}
      <StudioStory />

      {/* Founder Section */}
      <FounderSection />

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
