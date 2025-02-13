"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        showTitle={true}
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Increased Leads & Brand Awareness for Metal Fabrication Shop in Thane: Social Pulse helped Bajarang Fabricators, a metal fabrication shop in Thane, achieve a 60% increase in quality leads and brand awareness within just 3 months.",
    name: "J.P. Mishra",
    title: "Bajarang Fabricators",
  },
  {
    quote:
      "Top 3 GMB Ranking & Lead Generation for Air Cool Services: Social Pulse's expertise in Google My Business optimization propelled Air Cool Services' profile to the top 3 search results in just 3 months.",
    name: "Ajay Mishra",
    title: "Air Cool Services",
  },
  {
    quote:
      "Social Media & GMB Success for Shree Ram Mobile: Shree Ram Mobile is thrilled with the results achieved through Social Pulse's social media marketing and GMB services.",
    name: "Ram",
    title: "Shree Ram Mobile",
  },
  {
    quote:
      "Skyline Realtors: Targeted Lead Generation & Brand Growth: Social Pulse's combined social media marketing and GMB expertise empowered Skyline Realtors to achieve impressive results.",
    name: "Vinay Mahadik",
    title: "Skyline Realtors",
  },
  {
    quote:
      "Mamta Cosmetics: Enhanced Brand Awareness Through Social Media: Social Pulse's creative social media campaigns and targeted ads were instrumental in increasing brand awareness by 30%.",
    name: "Mamta Wadhwani",
    title: "Mamta Cosmetics",
  },
];
