"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Script from "next/script";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
        Rishabh Mishra
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-gray-400">
        Founder & CEO - Social Pulse Agency
      </p>
    </div>
  );
}

function FounderIntro() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollRevealText>
            <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src="/images/team/rishabh1.jpg"
                alt="Rishabh Mishra, Founder & CEO of Social Pulse Agency"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollRevealText>

          <ScrollRevealText className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who is Rishabh Mishra?
            </h2>

            <ScrollReveal
              textClassName="text-lg md:text-xl text-gray-300 leading-relaxed"
              containerClassName="my-0"
            >
              Rishabh Mishra, the visionary Founder & CEO of Social Pulse
              Agency, is an award-winning digital marketing expert and has great
              experience in transforming businesses through strategic online
              solutions. Certified by the Digital Marketing Institute, Rishabh
              has helped many brands achieve measurable growth through
              innovative marketing strategies.
            </ScrollReveal>

            <div className="flex flex-col gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/rishabh-mishra007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg"
              >
                <FaLinkedin className="text-2xl" />
                Connect on LinkedIn ↗
              </a>
            </div>
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ScrollRevealText className="md:pt-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leadership & Achievements
            </h2>
          </ScrollRevealText>

          <ScrollRevealText>
            <ScrollReveal
              textClassName="text-lg md:text-xl text-gray-300 leading-relaxed"
              containerClassName="my-0"
            >
              Under Rishabh&apos;s guidance, Social Pulse Agency has become
              recognized as a top digital marketing agency specializing in
              data-driven social media campaigns, conversion-focused website
              design, brand identity development, and SEO & content marketing.
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">
                  Data-driven social media campaigns
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">
                  Conversion-focused website design
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">
                  Brand identity development
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">SEO & content marketing</p>
              </div>
            </div>
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ScrollRevealText className="md:pt-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Founder&apos;s Vision
            </h2>
          </ScrollRevealText>

          <ScrollRevealText>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <ScrollReveal
                textClassName="text-lg md:text-xl text-gray-300 leading-relaxed italic"
                containerClassName="my-0"
              >
                At Social Pulse Agency, we combine creative storytelling with
                analytical precision to create digital experiences that convert.
                Our mission is to empower businesses to thrive in the
                competitive digital landscape through innovative strategies and
                cutting-edge technology.
              </ScrollReveal>
              <p className="text-gray-400 mt-6 text-right">- Rishabh Mishra</p>
            </div>
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const expertise = [
    "Digital Marketing Strategy",
    "Brand Development",
    "E-commerce Optimization",
    "Social Media Marketing",
    "Web Design & Development",
    "Shopify Development",
    "SEO & Analytics",
    "Content Marketing",
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollRevealText className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Areas of Expertise
          </h2>
        </ScrollRevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((skill, index) => (
            <ScrollRevealText key={index}>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                <p className="text-gray-300 text-lg font-medium">{skill}</p>
              </div>
            </ScrollRevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FounderPage() {
  const scrollToWebsiteDesign = () => {};
  const scrollToGraphicDesign = () => {};
  const scrollToShopifyStores = () => {};
  const scrollToBrands = () => {};
  const scrollToServices = () => {};

  // Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.socialpulseagency.in/rishabhmishra#person",
    name: "Rishabh Mishra",
    givenName: "Rishabh",
    familyName: "Mishra",
    jobTitle: "Founder & CEO",
    description:
      "Rishabh Mishra, Founder & CEO of Social Pulse Agency - Award-winning digital marketing expert with 10+ years experience in brand development, visual storytelling, and ROI-driven marketing strategies.",
    image: "https://www.socialpulseagency.in/rishabhmishra.png",
    url: "https://www.socialpulseagency.in/rishabhmishra",
    sameAs: [
      "https://www.linkedin.com/in/rishabh-mishra007/",
      "https://www.socialpulseagency.in",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Social Pulse Agency",
      url: "https://www.socialpulseagency.in",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Rishabh Mishra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rishabh Mishra is the Founder & CEO of Social Pulse Agency, an award-winning digital marketing expert with over 10 years of experience in transforming businesses through strategic online solutions.",
        },
      },
    ],
  };

  return (
    <main className="bg-black min-h-screen">
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

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

      {/* Founder Intro Section */}
      <FounderIntro />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      <Footer />
    </main>
  );
}
