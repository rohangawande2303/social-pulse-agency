import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Thane | Social Pulse Agency",
  description:
    "Social Pulse Agency is Thane's premier digital marketing agency, specializing in SEO, social media marketing, and web design services.",
  keywords: [
    "digital marketing agency Thane",
    "SEO Thane",
    "social media marketing Thane",
    "Thane digital marketing",
    "Social Pulse Agency Thane",
    "digital marketing agency near me",
    "SEO services Kalyan",
    "digital marketing Dombivli",
    "social media marketing Navi Mumbai",
    "web design Mumbai",
  ],
  robots: "index, follow", // Ensure this is a string
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            metadata.description ||
            "Best digital marketing services in Thane and nearby cities"
          }
        />
        <link rel="canonical" href="https://www.socialpulseagency.in/" />
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ")
              : metadata.keywords ||
                "digital marketing, SEO, Thane, Social Pulse Agency"
          }
        />
        {/* Check if robots is a string, otherwise provide a default */}
        <meta
          name="robots"
          content={
            typeof metadata.robots === "string"
              ? metadata.robots
              : "index, follow"
          }
        />

        {/* Geo-targeting for Local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Thane, Maharashtra" />
        <meta name="geo.position" content="19.2183;72.9781" />
        <meta name="ICBM" content="19.2183, 72.9781" />

        <meta name="geo.placename" content="Kalyan, Maharashtra" />
        <meta name="geo.position" content="19.2404;73.1305" />
        <meta name="ICBM" content="19.2404, 73.1305" />

        <meta name="geo.placename" content="Dombivli, Maharashtra" />
        <meta name="geo.position" content="19.2094;73.0939" />
        <meta name="ICBM" content="19.2094, 73.0939" />

        <meta name="geo.placename" content="Navi Mumbai, Maharashtra" />
        <meta name="geo.position" content="19.033;73.0297" />
        <meta name="ICBM" content="19.033, 73.0297" />

        <meta name="geo.placename" content="Mumbai, Maharashtra" />
        <meta name="geo.position" content="19.076;72.8777" />
        <meta name="ICBM" content="19.076, 72.8777" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Best Digital Marketing Agency in Thane | Social Pulse Agency"
        />
        <meta
          property="og:description"
          content={metadata.description || "Expert digital marketing services."}
        />
        <meta property="og:url" content="https://socialpulseagency.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-your-social-image.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Digital Marketing Agency in Thane | Social Pulse Agency"
        />
        <meta
          name="twitter:description"
          content={
            metadata.description || "Thane's top digital marketing services."
          }
        />
        <meta name="twitter:image" content="/path-to-your-twitter-image.jpg" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SG5WVR4TYV"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SG5WVR4TYV');
            `,
          }}
        />

        {/* Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Social Pulse Agency",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Address in Thane",
                  "addressLocality": "Thane",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400601",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "19.2183",
                  "longitude": "72.9781"
                },
                "url": "https://socialpulseagency.in/digital-marketing-agency-thane",
                "telephone": "+91-8451951123",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61553120560771&mibextid=ZbWKwL",
                  "https://www.instagram.com/socialpulseagency.in/",
                  "https://www.linkedin.com/company/social-pulse-agency/"
                ]
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true} className={font.className}>
        {/* Vercel Analytics */}
        <VercelAnalytics />

        {children}
      </body>
    </html>
  );
}
