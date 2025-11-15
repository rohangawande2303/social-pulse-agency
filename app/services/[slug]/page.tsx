// app/services/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getServiceBySlug,
  getProjectsForService,
  getAllServiceSlugs,
} from "../../data/services";

import ServiceBanner from "../../../components/services/ServiceBanner";
import ClientLogos from "../../../components/services/ClientLogos";
import ProjectsGrid from "../../../components/services/ProjectsGrid";
import OfferingsSection from "../../../components/services/OfferingsSection";
import ServiceFAQ from "../../../components/services/ServiceFAQ";
import CollaborateCTA from "../../../components/services/CollaborateCTA";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import ProcessSection from "../../../components/services/ProcessSection";

// Generate static params for all services (SSG for better SEO)
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Your Agency Name", // Replace with your actual agency name
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thane",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: "+91-8451951123",
      url: "https://yourdomain.com", // Replace with your actual domain
    },
    areaServed: service.schema.areaServed,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yourdomain.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://yourdomain.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://yourdomain.com/services/${params.slug}`,
      },
    ],
  };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    authors: [{ name: "Your Agency Name" }],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://yourdomain.com/services/${params.slug}`,
      siteName: "Your Agency Name",
      images: [
        {
          url: service.bannerImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.bannerImage],
    },
    alternates: {
      canonical: `https://yourdomain.com/services/${params.slug}`,
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
    other: {
      "application/ld+json": JSON.stringify([
        jsonLd,
        faqSchema,
        breadcrumbSchema,
      ]),
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  const projects = getProjectsForService(service.projectIds);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(service.schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-black">
        {/* Banner */}
        <ServiceBanner
          heading={service.bannerHeading}
          subheading={service.bannerSubheading}
          description={service.bannerDescription}
          image={service.bannerImage} // ✅ use image
          ctaText={service.bannerCTA}
        />

        {/* Clients */}
        {service.clients && (
          <ClientLogos
            logos={service.clients.map((client, index) => ({
              id: index,
              src: client.logo,
              alt: client.name,
            }))}
          />
        )}

        {/* Introduction Section */}
        {/* <section className="py-16 px-6 max-w-7xl mx-auto bg-black">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-6"
            style={{
              backgroundImage: "linear-gradient(to right, #8103FF, #b34dff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {service.introHeading}
          </h2>
          <p className="text-lg text-white text-center max-w-4xl mx-auto">
            {service.introDescription}
          </p>
        </section> */}

        {/* Projects Grid Section */}
        <ProjectsGrid
          title={service.projectsSectionTitle}
          projects={projects}
        />

        {/* Process Section - ADD THIS */}
        {service.processSteps && service.processSteps.length > 0 && (
          <ProcessSection
            title={service.processSectionTitle}
            heading={service.processSectionHeading}
            subheading={service.processSectionSubheading}
            steps={service.processSteps}
          />
        )}

        {/* Offerings Section */}
        {service.detailedOfferings && service.detailedOfferings.length > 0 && (
          <OfferingsSection
            offerings={service.detailedOfferings}
            serviceTitle={service.offeringsSectionTitle ?? ""}
            serviceSubtitle={service.offeringsSectionSubtitle ?? ""}
          />
        )}

        {/* FAQ Section */}
        <ServiceFAQ title={service.faqSectionTitle} faqs={service.faqs} />

        {/* Collaborate CTA Section */}
        <CollaborateCTA />
      </main>
      <Footer />
    </>
  );
}
