"use client";

import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import { ThreeDCardExample } from "../../app/snippets/3d-card-snippet";
import Script from "next/script";
import Image from "next/image";
import { MotionWrapper } from "../../components/ui/MotionWrapper";

// Convert to Client Component for interactive features
export default function FounderPage() {
  // Scroll functions - client-side functionality
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

  // Schema markup - enhanced with more properties
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.socialpulseagency.in/rishabhmishra#person",
    name: "Rishabh Mishra",
    givenName: "Rishabh",
    familyName: "Mishra",
    jobTitle: "Founder & CEO",
    description:
      "Rishabh Mishra, Founder & CEO of Social Pulse Agency - Award-winning digital marketing expert with 10+ years experience in brand development, visual storytelling, and ROI-driven marketing strategies. Certified professional specializing in Shopify stores, website design, and social media marketing.",
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
      description:
        "Leading digital marketing agency specializing in brand development, e-commerce, and social media marketing",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Digital Marketing Institute",
    },
    knowsAbout: [
      "Digital Marketing",
      "Brand Strategy",
      "E-commerce",
      "Social Media Marketing",
      "Web Design",
      "Shopify Development",
      "SEO",
      "Content Marketing",
    ],
    award: "Best Digital Marketing Professional 2023",
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Marketing Expert",
      description:
        "Specializing in brand strategy, e-commerce optimization, and social media marketing",
      skills:
        "SEO, Social Media Marketing, Brand Development, E-commerce, Web Design",
    },
  };

  // FAQ Schema for additional SEO value
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Rishabh Mishra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rishabh Mishra is the Founder & CEO of Social Pulse Agency, an award-winning digital marketing expert with over 10 years of experience in transforming businesses through strategic online solutions. He is certified by the Digital Marketing Institute and has helped 200+ brands achieve measurable growth through innovative marketing strategies.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the founder of Social Pulse Agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rishabh Mishra is the founder and CEO of Social Pulse Agency. Under his leadership, the agency has become recognized as a top digital marketing agency specializing in e-commerce optimization, data-driven social media campaigns, conversion-focused website design, brand identity development, and SEO & content marketing.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Rishabh Mishra's agency offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Social Pulse Agency, founded by Rishabh Mishra, offers a comprehensive range of digital marketing services including e-commerce optimization (Shopify & WooCommerce), data-driven social media campaigns, conversion-focused website design, brand identity development, and SEO & content marketing.",
        },
      },
    ],
  };

  // Organization Schema for additional context
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Social Pulse Agency",
    url: "https://www.socialpulseagency.in",
    logo: "https://www.socialpulseagency.in/logo.png",
    founder: {
      "@type": "Person",
      name: "Rishabh Mishra",
      url: "https://www.socialpulseagency.in/rishabhmishra",
    },
    description:
      "Social Pulse Agency is a leading digital marketing agency specializing in brand development, e-commerce optimization, and social media marketing strategies.",
    sameAs: [
      "https://www.linkedin.com/company/social-pulse-agency",
      "https://www.facebook.com/socialpulseagency",
      "https://www.instagram.com/socialpulseagency",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Schema.org structured data */}
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>

      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <section className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-24 bg-gradient-to-b from-[#171717] via-[#1E1E1E] to-[#171717]">
        <header>
          <h1 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8103FF] to-sky-200 bg-opacity-50">
            Rishabh Mishra - Digital Marketing Expert & Founder
          </h1>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
            CEO of Social Pulse Agency | Certified Digital Marketing Strategist
            | Brand Development Specialist
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:space-x-1 pb-24">
          {/* Client-side motion component with animation */}
          <MotionWrapper>
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
              <div className="w-full flex justify-center">
                <Image
                  src="/rishabhmishra.png"
                  alt="Rishabh Mishra, Founder & CEO of Social Pulse Agency"
                  width={300}
                  height={400}
                  priority
                  className="rounded-lg w-4/5 md:w-full md:h-auto md:max-h-none"
                  style={{
                    maxWidth: "100%",
                    minWidth: "280px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-neutral-300 text-center pt-6 whitespace-nowrap">
                Founder & CEO - Rishabh Mishra
              </h2>
            </div>
          </MotionWrapper>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center">
            <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left md:pb-12">
              <h2 className="text-2xl font-bold mb-4">
                Who is Rishabh Mishra?
              </h2>
              <p>
                <strong>Rishabh Mishra</strong>, the visionary{" "}
                <strong>Founder & CEO of Social Pulse Agency</strong>, is an
                award-winning digital marketing expert with over a decade of
                experience in transforming businesses through strategic online
                solutions. Certified by the Digital Marketing Institute, Rishabh
                has helped 200+ brands achieve measurable growth through
                innovative marketing strategies.
              </p>
            </article>

            <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left mt-6">
              <h3 className="text-xl font-semibold mb-3">
                Leadership & Achievements
              </h3>
              <p>
                Under Rishabh&apos;s guidance, Social Pulse Agency has become
                recognized as a top digital marketing agency specializing in:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>E-commerce optimization (Shopify & WooCommerce)</li>
                <li>Data-driven social media campaigns</li>
                <li>Conversion-focused website design</li>
                <li>Brand identity development</li>
                <li>SEO & content marketing</li>
              </ul>
            </article>

            <article className="mt-6 text-lg md:text-xl text-neutral-300">
              <h3 className="text-xl font-semibold mb-3">
                Our Founder&apos;s Vision
              </h3>
              <p>
                &ldquo;At Social Pulse Agency, we combine creative storytelling
                with analytical precision to create digital experiences that
                convert. Our mission is to empower businesses to thrive in the
                competitive digital landscape through innovative strategies and
                cutting-edge technology.&rdquo;
              </p>
            </article>

            <div className="flex justify-center mt-8">
              <a
                href="https://www.linkedin.com/in/rishabh-mishra007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                aria-label="Connect with Rishabh Mishra on LinkedIn"
              >
                <FaLinkedin className="mr-2 text-xl" />
                Connect with Rishabh on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
