import { Metadata } from "next";

// SEO metadata for Next.js 14
export const metadata: Metadata = {
  metadataBase: new URL("https://www.socialpulseagency.in"),
  title: {
    default:
      "Rishabh Mishra - Founder of Social Pulse Agency | Digital Marketing Expert",
    template: "%s | Social Pulse Agency",
  },
  description:
    "Meet Rishabh Mishra, the visionary founder of Social Pulse Agency, a digital marketing expert specializing in brand development, visual storytelling, and impactful strategies.",
  keywords: [
    "Rishabh Mishra",
    "Social Pulse Agency",
    "digital marketing expert",
    "brand development",
    "visual storytelling",
    "digital marketing agency",
    "founder of Social Pulse",
    "best digital marketing agency India",
  ],
  authors: [{ name: "Rishabh Mishra" }],
  creator: "Rishabh Mishra",
  publisher: "Social Pulse Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    title: "Rishabh Mishra - Digital Marketing Visionary & Founder",
    description:
      "Discover Rishabh Mishra's journey as the founder of Social Pulse Agency, a leading digital marketing firm. Expertise in brand development, visual storytelling, and more.",
    images: [
      {
        url: "/rishabhmishra.png",
        width: 1200,
        height: 630,
        alt: "Rishabh Mishra - Founder of Social Pulse Agency",
      },
    ],
    locale: "en_US",
    url: "https://www.socialpulseagency.in/rishabhmishra",
    siteName: "Social Pulse Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Mishra - Social Pulse Agency Founder",
    description:
      "Learn about Rishabh Mishra, the founder of Social Pulse Agency, and explore his expertise in digital marketing, brand development, and visual storytelling.",
    images: [
      {
        url: "/rishabhmishra.png",
        alt: "Rishabh Mishra - Founder of Social Pulse Agency",
      },
    ],
    creator: "@RishabhMishra",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.socialpulseagency.in/rishabhmishra", // Correct canonical URL for the founder page
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
