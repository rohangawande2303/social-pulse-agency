"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Increased Leads & Brand Awareness for Metal Fabrication Shop in Thane: Social Pulse helped Bajarang Fabricators, a metal fabrication shop in Thane, achieve a 60% increase in quality leads and brand awareness within just 3 months. Utilizing Google My Business (GMB) optimization and strategic ad campaigns with minimal spend, Social Pulse effectively reached Bajarang Fabricators' target audience, driving significant growth.",
    name: "J.P. Mishra",
    title: "Bajarang Fabricators",
  },
  {
    quote:
      "Top 3 GMB Ranking & Lead Generation for Air Cool Services: Social Pulse's expertise in Google My Business optimization propelled Air Cool Services' profile to the top 3 search results in just 3 months. Their impressive understanding of Air Cool Services' needs translated into targeted strategies that generated valuable leads.",
    name: "Ajay Mishra",
    title: "Air Cool Services",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Social Media & GMB Success for Shree Ram Mobile: Shree Ram Mobile is thrilled with the results achieved through Social Pulse's social media marketing and GMB services.  Within 6 months, Social Pulse's targeted strategies not only increased mobile sales by 45% but also significantly boosted brand presence in Thane City.  Social Pulse's content creation expertise further enhanced the impact of the campaign.",
    name: "Ram",
    title: "Shree Ram Mobile",
  },
  {
    quote:
      "Skyline Realtors: Targeted Lead Generation & Brand Growth: Social Pulse's combined social media marketing and GMB expertise empowered Skyline Realtors to achieve impressive results. Their strategies generated high-quality leads within a limited budget, boosting brand presence by 65% in the KDMC market. Social Pulse's content creation skills further fueled the success of the campaign.",
    name: "Vinay Mahadik",
    title: "Skyline Realtors",
  },
  {
    quote:
      "Mamta Cosmetics: Enhanced Brand Awareness Through Social Media: Social Pulse's creative social media campaigns and targeted ads were instrumental in increasing brand awareness by 30% for Mamta Cosmetics in just 3 months. Their strategic approach perfectly aligned with Mamta Cosmetics' target audience, driving significant growth.",
    name: "Mamta Wadhwani",
    title: "Mamta Cosmetics",
  },
];
