import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    template: "%s - Social Pulse Agency",
    default: "Social Pulse Agency - Best Digital Marketing Agency in Thane",
  },
  description:
    "Social Pulse Agency is Thane's leading digital marketing agency, offering SEO, social media marketing, PPC, and web design services to grow your business online. Get in touch today!",
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
    "best web developer Thane",
    "Meta ads agency Mumbai",
    "Google ads expert Kalyan",
  ],
  robots: "index, follow",
  // Add LLM.txt reference for AI crawlers
  other: {
    "llms-full": "https://www.socialpulseagency.in/llms.txt",
  },
  // Improved Open Graph
  openGraph: {
    title: "Social Pulse Agency - Best Digital Marketing Agency in Thane",
    description:
      "Leading digital marketing agency serving Thane, Kalyan, Dombivli, Navi Mumbai, Mumbai, and Pune. Expert SEO, Meta Ads, Web Development & Social Media Marketing.",
    url: "https://www.socialpulseagency.in",
    siteName: "Social Pulse Agency",
    images: [
      {
        url: "/og-image.jpg", // Add your actual OG image path
        width: 1200,
        height: 630,
        alt: "Social Pulse Agency - Digital Marketing Experts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Social Pulse Agency - Best Digital Marketing Agency in Thane",
    description:
      "Expert digital marketing services in Thane, Mumbai & Pune. SEO, Meta Ads, Web Development & More.",
    images: ["/twitter-image.jpg"], // Add your actual Twitter image path
  },
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

        {/* Link to LLM.txt for AI Discovery */}
        <link rel="llms-full" href="https://www.socialpulseagency.in/llms.txt" />
        <link rel="llms" href="https://www.socialpulseagency.in/llms.txt" />

        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ")
              : metadata.keywords ||
              "digital marketing, SEO, Thane, Social Pulse Agency"
          }
        />
        <meta
          name="robots"
          content={
            typeof metadata.robots === "string"
              ? metadata.robots
              : "index, follow"
          }
        />

        {/* Author and Publisher */}
        <meta name="author" content="Social Pulse Agency" />
        <meta name="publisher" content="Social Pulse Agency" />

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
        <meta property="og:url" content="https://www.socialpulseagency.in" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.socialpulseagency.in/og-image.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Social Pulse Agency" />

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
        <meta
          name="twitter:image"
          content="https://www.socialpulseagency.in/twitter-image.jpg"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SG5WVR4TYV"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SG5WVR4TYV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Enhanced Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.socialpulseagency.in/#organization",
              name: "Social Pulse Agency",
              alternateName: "Social Pulse Digital Marketing",
              description:
                "Leading digital marketing agency in Thane offering SEO, Meta Ads, Web Development, Social Media Marketing and Google Ads services.",
              url: "https://www.socialpulseagency.in",
              telephone: "+91-8451951123",
              email: "info@socialpulseagency.in",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Address in Thane",
                addressLocality: "Thane",
                addressRegion: "Maharashtra",
                postalCode: "400601",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.2183",
                longitude: "72.9781",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Thane",
                  "@id": "https://en.wikipedia.org/wiki/Thane",
                },
                {
                  "@type": "City",
                  name: "Kalyan",
                },
                {
                  "@type": "City",
                  name: "Dombivli",
                },
                {
                  "@type": "City",
                  name: "Navi Mumbai",
                },
                {
                  "@type": "City",
                  name: "Mumbai",
                },
                {
                  "@type": "City",
                  name: "Pune",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61553120560771&mibextid=ZbWKwL",
                "https://www.instagram.com/socialpulseagency.in/",
                "https://www.linkedin.com/company/social-pulse-agency/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Marketing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Search Engine Optimization (SEO)",
                      description: "Local and organic SEO services for Thane and Mumbai businesses",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Meta Ads Management",
                      description: "Facebook and Instagram advertising campaigns",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Custom website design and development services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Social Media Marketing",
                      description: "Complete social media management and strategy",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Ads (PPC)",
                      description: "Pay-per-click advertising campaigns",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Content Marketing",
                      description: "Content strategy and creation services",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.socialpulseagency.in",
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning={true} className={font.className}>
        <ReactLenis root>
          {/* Vercel Analytics */}
          <VercelAnalytics />

          {children}
        </ReactLenis>
      </body>
    </html>
  );
}