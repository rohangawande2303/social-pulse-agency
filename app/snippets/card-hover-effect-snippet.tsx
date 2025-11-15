import { HoverEffect } from "@/components/ui/card-hover-effect"; // Import the HoverEffect component
import Image from "next/image";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/social-media.webp"
          alt="Social Media Marketing"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Social Media Marketing",
    description:
      "We build strong online presence and grow your brand across social platforms.",
    url: "/services/social-media-marketing", // Add the URL for navigation
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/google.webp"
          alt="Google My Business"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Google My Business (GMB)",
    description:
      "We optimize and manage your GMB profile to get you more local customers.",
    url: "/services/google-my-business", // Add the URL for navigation
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/web-development.webp"
          alt="Web Development"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Web Development",
    description:
      "We design fast, modern, and user-friendly websites that drive sales.",
    url: "/services/web-development", // Add the URL for navigation
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/meta.webp"
          alt="Meta Ads"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Meta Ads",
    description:
      "We run targeted Meta ads to reach the right audience at the right time.",
    url: "/services/meta-ads", // Add the URL for navigation
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/video-edition.webp"
          alt="Creatives & Video Editing"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Creatives & Video Editing",
    description:
      "We produce eye-catching designs and videos that connect with your audience.",
    url: "/services/creatives-video-editing", // Add the URL for navigation
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full flex items-center justify-center">
        <Image
          src="/images/services/seo.webp"
          alt="SEO"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Search Engine Optimization (SEO)",
    description:
      "We improve your rankings on Google to bring you consistent organic traffic.",
    url: "/services/seo", // Add the URL for navigation
  },
];
