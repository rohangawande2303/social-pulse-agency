// app/rishabhmishra/page.tsx
import { Metadata } from "next";

// Metadata configuration for Next.js 14
export const metadata: Metadata = {
  metadataBase: new URL("https://www.socialpulseagency.in"),
  title: {
    default:
      "Rishabh Mishra - Founder of Social Pulse Agency | Digital Marketing Expert",
    template: "%s | Social Pulse Agency",
  },
  description:
    "Meet Rishabh Mishra, the visionary founder of Social Pulse Agency. Expert in digital marketing, brand development, and visual storytelling. Transform your brand's digital presence with our data-driven strategies.",
  keywords: [
    "Rishabh Mishra",
    "Social Pulse Agency",
    "Social Pulse Agency founder",
    "digital marketing expert",
    "brand development",
    "visual storytelling",
    "digital marketing agency founder",
    "Social Pulse founder",
    "Rishabh Mishra digital marketing",
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
      "Discover how Rishabh Mishra built Social Pulse Agency into a leading digital marketing force. Expert in brand development and visual storytelling.",
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
      "Leading digital marketing expert and founder of Social Pulse Agency. Specializing in brand development and visual storytelling.",
    images: ["/rishabhmishra.png"],
    creator: "@RishabhMishra", // Replace with actual Twitter handle
  },
  verification: {
    google: "your-google-verification-code", // Replace with your verification code
  },
  alternates: {
    canonical: "https://www.socialpulseagency.in/rishabhmishra",
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

// Client Component
import { FounderPageClient } from "./founder-client";

// Server Component
export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.socialpulseagency.in/rishabhmishra#person",
                name: "Rishabh Mishra",
                givenName: "Rishabh",
                familyName: "Mishra",
                image: {
                  "@type": "ImageObject",
                  url: "https://www.socialpulseagency.in/rishabhmishra.png",
                  caption: "Rishabh Mishra - Founder of Social Pulse Agency",
                },
                description:
                  "Rishabh Mishra is the founder of Social Pulse Agency, a leading digital marketing agency specializing in brand development and visual storytelling.",
                jobTitle: "Founder",
                url: "https://www.socialpulseagency.in/rishabhmishra",
                sameAs: ["https://www.linkedin.com/in/rishabh-mishra007/"],
                worksFor: {
                  "@type": "Organization",
                  "@id": "https://www.socialpulseagency.in#organization",
                  name: "Social Pulse Agency",
                  url: "https://www.socialpulseagency.in",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://www.socialpulseagency.in/rishabhmishra",
                url: "https://www.socialpulseagency.in/rishabhmishra",
                name: "Rishabh Mishra - Founder of Social Pulse Agency",
                description:
                  "Meet Rishabh Mishra, the visionary founder of Social Pulse Agency. Expert in digital marketing, brand development, and visual storytelling.",
                isPartOf: {
                  "@id": "https://www.socialpulseagency.in#website",
                },
                about: {
                  "@id":
                    "https://www.socialpulseagency.in/rishabhmishra#person",
                },
              },
            ],
          }),
        }}
      />
      <FounderPageClient />
    </>
  );
}
