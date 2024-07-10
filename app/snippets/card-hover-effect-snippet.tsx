import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

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
      <div className="bg-[#F2E8FF] p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-[#8103FF]" />
      </div>
    ),
    title: "Website Design",
    description:
      "We design websites that are easy to use and help you sell more.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-[#8103FF]" />
      </div>
    ),
    title: "Local Business Boost",
    description:
      "We optimize your Google My Business profile so customers can find you easily.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full">
        <PiLock className="w-8 h-8 text-[#8103FF]" />
      </div>
    ),
    title: "Targeted Ads",
    description: "We create ads that reach the right people at the right time.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-[#8103FF]" />
      </div>
    ),
    title: "Social Media",
    description: "We manage your social media to build your online community.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-[#8103FF]" />
      </div>
    ),
    title: "Awesome Content",
    description: "We craft engaging content that people love to read and see.",
  },
  {
    icon: (
      <div className="bg-[#F2E8FF] p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-[#8103FF]" />
      </div>
    ),
    title: "Top Search Result",
    description: " We help your website rank higher in search engines.",
  },
];

// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import {
//   PiAppStoreLogo,
//   PiHeadsetFill,
//   PiLock,
//   PiMegaphone,
//   PiMonitor,
//   PiStorefront,
// } from "react-icons/pi";

// export function CardHoverEffectDemo() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// export const projects = [
//   {
//     icon: (
//       <div className="bg-blue-100 p-4 rounded-full">
//         <PiMonitor className="w-8 h-8 text-blue-600" />
//       </div>
//     ),
//     title: "Website Design",
//     description:
//       "We design websites that are easy to use and help you sell more.",
//   },
//   {
//     icon: (
//       <div className="bg-blue-100 p-4 rounded-full">
//         <PiStorefront className="w-8 h-8 text-blue-600" />
//       </div>
//     ),
//     title: "Local Business Boost",
//     description:
//       "We optimize your Google My Business profile so customers can find you easily.",
//   },
//   {
//     icon: (
//       <div className="bg-blue-100 p-4 rounded-full">
//         <PiLock className="w-8 h-8 text-blue-600" />
//       </div>
//     ),
//     title: "Targeted Ads",
//     description: "We create ads that reach the right people at the right time.",
//   },
//   {
//     icon: (
//       <div className="bg-blue-100 p-4 rounded-full">
//         <PiMegaphone className="w-8 h-8 text-blue-600" />
//       </div>
//     ),
//     title: "Social Media",
//     description: "We manage your social media to build your online community.",
//   },
//   {
//     icon: (
//       <div className="bg-blue-100 p-4 rounded-full">
//         <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
//       </div>
//     ),
//     title: "Awesome Content",
//     description: "We craft engaging content that people love to read and see.",
//   },
//   {
//     icon: (
//       <div className="bg-blue-100 p-4 rounded-full">
//         <PiHeadsetFill className="w-8 h-8 text-blue-600" />
//       </div>
//     ),
//     title: "Top Search Result",
//     description: " We help your website rank higher in search engines.",
//   },
// ];
