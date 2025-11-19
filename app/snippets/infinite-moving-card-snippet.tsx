"use client";

import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Top 3 GMB Ranking & Lead Generation for Air Cool Services: Their GMB optimization pushed our profile to top 3 results in 3 months.",
    name: "Ajay Mishra",
    title: "Air Cool Services",
  },
  {
    quote:
      "Social Media & GMB Success for Shree Ram Mobile: We are thrilled with the results achieved through Social Pulse.",
    name: "Ram",
    title: "Shree Ram Mobile",
  },
  {
    quote:
      "Skyline Realtors: Targeted Lead Generation & Brand Growth delivered impressive results.",
    name: "Vinay Mahadik",
    title: "Skyline Realtors",
  },
  {
    quote:
      "Excellent brand growth strategy and performance marketing support. Helped us scale monthly leads consistently.",
    name: "Sanjay Pawar",
    title: "Vihan Developers",
  },
  {
    quote:
      "They handled everything from social media to ads and website updates, increasing total conversions by over 60%.",
    name: "Deepak Gaikwad",
    title: "TechCore Solutions",
  },
  {
    quote:
      "From zero online presence to fully automated lead flow — their team made the entire process seamless.",
    name: "Rohit Jadhav",
    title: "BuildRight Infra",
  },
];

export default function InfiniteMovingCardsDemo() {
  return (
    <section
      className="w-full py-28 flex justify-center px-4"
      style={{ background: "#000000" }}
    >
      {/* MAIN PURPLE BOX */}
      <div
        className="relative w-full max-w-[1500px] rounded-[40px] px-8 py-28 overflow-hidden"
        style={{
          background: "#1A0F2E",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* UPDATED TOP FADE (same as image) */}
        <div
          className="absolute top-0 left-0 w-full h-[420px] rounded-t-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(140,70,255,0.75) 0%, rgba(110,50,230,0.45) 35%, rgba(26,15,46,0) 100%)",
            filter: "blur(1px)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-white text-5xl font-bold mb-4">
            The Impact We Create for Our Clients
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We help brands increase visibility, leads, and revenue — here’s what
            our clients say about partnering with us.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative z-10 mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
