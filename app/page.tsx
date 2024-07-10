"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
// import Brands from "./brands";
import Services from "./services";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showSurprise, setShowSurprise] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "With Stunning Websites!",
    "Engaging Social Media Marketing!",
    "Powerful Google My Business Optimization!",
    "E-commerce Boost: Sell More Online!",
    "Content Marketing Magic: Attract & Engage!",
    "Targeted Ads That Convert: Reach Your Ideal Audience!",
    "SEO Optimization for Top Rankings: Get Found Online!",
  ];

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 100 : 150);
      }
    };

    const typingInterval = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayText, isDeleting, loop, typingSpeed, words]);

  useEffect(() => {
    if (loop >= words.length) {
      setTimeout(() => {
        setShowSurprise(true);
        setTimeout(() => {
          setShowSurprise(false);
          setLoop(0);
        }, 5000); // Surprise text duration
      }, 2000); // Delay before showing surprise text
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loop]);

  return (
    <div className="w-full md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <div className="pt-2 md:pt-14">
        <section className="app__hero relative bg-black text-white min-h-screen flex items-center justify-center pt-2 md:pt-0">
          <div className="container mx-auto p-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col items-center"
            >
              {!showSurprise && (
                <>
                  <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight lg:leading-tight">
                    Craft Your Brand Story . . .
                    <br />
                    <span className="dynamic-text text-[#8103FF]">
                      {displayText}
                    </span>
                  </h1>
                  <p className="text-lg text-white mb-4 mt-4">
                    SocialPulse has experts who are experienced and know how and
                    what specification of a company or a product are to be
                    showcased.
                  </p>
                  <Link
                    href={"/book"}
                    className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-4 text-white"
                  >
                    Book a call
                  </Link>
                </>
              )}

              {showSurprise && (
                <motion.h2
                  className="text-3xl lg:text-5xl font-extrabold text-yellow-400 mt-4 animate-pulse"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Lets Grow Your Business Online!
                </motion.h2>
              )}
            </motion.div>
          </div>
        </section>

        <div ref={websiteDesignRef}>{/* <WebsiteDesign /> */}</div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>{/* <ShopifyStores /> */}</div>
        <div ref={brandsRef}>{/* <Brands /> */}</div>
        <div id="services">
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState, useRef } from "react";
// import Navbar from "@/components/navbar";
// // import SliderOne from "@/components/ui/slider";
// import { Spotlight } from "@/components/ui/spotlight";
// import Image from "next/image";
// import Link from "next/link";

// import WebsiteDesign from "./website-design";
// import GraphicDesign from "./graphic-design";
// // import ShopifyStores from "./shopify-stores";
// import Brands from "./brands";
// import Services from "./services";
// // import FAQS from "./faq";
// import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

// export default function Home() {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };
//   const closeDropdown = () => {
//     setDropdownVisible(false);
//   };

//   const websiteDesignRef = useRef<HTMLDivElement>(null);
//   const graphicDesignRef = useRef<HTMLDivElement>(null);
//   const shopifyStoresRef = useRef<HTMLDivElement>(null);
//   const brandsRef = useRef<HTMLDivElement>(null);
//   const servicesRef = useRef<HTMLDivElement>(null);

//   const scrollToWebsiteDesign = () => {
//     websiteDesignRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//     });
//   };

//   const scrollToGraphicDesign = () => {
//     graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToShopifyStores = () => {
//     shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToBrands = () => {
//     brandsRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Function to scroll to Services section
//   const scrollToServices = () => {
//     servicesRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Navbar
//         scrollToWebsiteDesign={scrollToWebsiteDesign}
//         scrollToGraphicDesign={scrollToGraphicDesign}
//         scrollToShopifyStores={scrollToShopifyStores}
//         scrollToBrands={scrollToBrands}
//         scrollToServices={scrollToServices}
//       />

//       <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
//       <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
//         <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
//           Welcome to
//           <br /> Harmony International School
//         </div>
//         <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
//           we foster a nurturing environment where students thrive academically
//           and socially. Our state-of-the-art facilities and dedicated staff
//           ensure a comprehensive learning experience that prepares students for
//           future success.
//         </p>

//         <Link
//           href={"/book"}
//           className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
//         >
//           Book a call
//         </Link>

//         <div className="w-full pt-20">{/* <SliderOne /> */}</div>
//         <div ref={websiteDesignRef}>
//           <WebsiteDesign />
//         </div>
//         <div ref={graphicDesignRef}>
//           <GraphicDesign />
//         </div>
//         <div ref={shopifyStoresRef}>{/* <ShopifyStores /> */}</div>
//         <div ref={brandsRef}>
//           <Brands />
//         </div>
//         <div id="services">
//           <Services />
//         </div>
//         <InfiniteMovingCardsDemo />
//         {/* <FAQS /> */}
//       </div>
//     </div>
//   );
// }
