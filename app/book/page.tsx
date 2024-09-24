"use client";

import { InlineWidget } from "react-calendly";
import Navbar from "@/components/navbar";

const BookMeeting = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-black/[0.96] bg-grid-white/[0.02]">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToShopifyStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />
        
        <header className="text-4xl pb-5 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-24 md:mt-32">
          <h1>Book a Meeting</h1>
        </header>

        <main className="flex-grow flex justify-center items-center p-4">
          <div className="w-full md:w-3/4 lg:w-2/3" style={{ height: "80vh" }}>
            <h2 className="sr-only">Schedule a 30-minute consultation</h2>
            <InlineWidget
              url="https://calendly.com/socialpulseagencydomain/30min"
              styles={{ height: "100%" }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default BookMeeting;
