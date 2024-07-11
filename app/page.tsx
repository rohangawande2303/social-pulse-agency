"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GraphicDesign from "./graphic-design";
import Services from "./services";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

const words = [
  "Stunning Creatives!",
  "Social Media Marketing!",
  "Google My Business Optimization!",
  "E-commerce Boost",
  "Content Marketing",
  "Targeted Ads That Convert",
  "SEO Optimization",
];

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
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight lg:leading-tight">
                Craft Your Brand Story . . .
              </h1>
              <div className="relative w-full overflow-hidden h-16">
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
              </div>
              <p className="text-lg text-white mb-4 mt-4 pt-4 md:pt-8">
                SocialPulse has experts who are experienced and know how and
                what specification of a company or a product are to be
                showcased.
              </p>
              <Link
                href="/book"
                className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-4 text-white"
                prefetch={true} // Enable prefetching for faster navigation
              >
                Book a call
              </Link>
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
