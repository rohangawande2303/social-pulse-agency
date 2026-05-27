import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

const logos = [
  {
    image: "/logo/balaji.png",
    name: "Balaji",
  },
  {
    image: "/logo/kohinoor.png",
    name: "Kohinoor",
  },
  {
    image: "/logo/Mahavir.webp",
    name: "Mahavir",
  },
  {
    image: "/logo/Rutu.webp",
    name: "Rutu",
  },
  {
    image: "/logo/mangeshi.png",
    name: "Mangeshi-Velvet",
  },
  {
    image: "/logo/beqube-logo.png",
    name: "Beqube",
  },
  {
    image: "/logo/trade-centre-logo.jpg",
    name: "Trade Centre",
  },
  {
    image: "/logo/north-star-logo.png",
    name: "North Star",
  },
  {
    image: "/logo/aarav.png",
    name: "Aarav Realty",
  },
  {
    image: "/logo/ekdant.png",
    name: "Ekdant Enterprises",
  },
  {
    image: "/logo/mangeshi-universe.png",
    name: "Mangeshi",
  },
  {
    image: "/logo/pancharatna.png",
    name: "Pancharatna Developers",
  },
  {
    image: "/logo/mangeshi-world.png",
    name: "Mangeshi World",
  },
  {
    image: "/logo/parth-lakeview.png",
    name: "Parth Developer",
  },
  {
    image: "/logo/swaminarayan.png",
    name: "Swaminarayan",
  },
  {
    image: "/logo/venus-skky-city.png",
    name: "Venus Skky City",
  },
  {
    image: "/logo/bellagio.png",
    name: "SSL Bellagio",
  },
  {
    image: "/logo/Landmark.png",
    name: "Landmark Developer",
  },
  {
    image: "/logo/balaji-classsica.jpg",
    name: "Balaji Classica",
  },
];

const Brands = () => {
  // Mapping the logos array to match the format needed by the InfiniteMovingCards component
  const brandItems = logos.map((logo) => ({
    quote: "",
    // name: logo.name,
    name: "",
    title: "", // Optional, leave empty if no title
    image: logo.image, // Pass the logo image path
  }));

  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
      <div
        className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
      >
        The best brands <br /> choose us
      </div>

      {/* Increased margin to create more space between text and cards */}
      <p className="mt-10 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        From small businesses to large corporations, we have helped many brands
        elevate their business.
      </p>

      {/* Infinite Moving Logos */}
      <div className="pb-20 rounded-md flex flex-col antialiased md:mt-24 mt-20 mb-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={brandItems}
          direction="right" // Adjust direction as needed
          speed="normal" // Adjust speed as needed
          showTitle={false} // Pass showTitle as false to hide titles in the brand section
        />
      </div>
    </div>
  );
};

export default Brands;
