import { metadata } from "./seo"; // Import SEO metadata
import Head from "next/head";

("use client");
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ThreeDCardExample } from "../../app/snippets/3d-card-snippet";

// Page Component
const FounderPageClient = () => {
  const scrollToWebsiteDesign = () => {
    console.log("Scrolling to Website Design");
  };
  const scrollToGraphicDesign = () => {
    console.log("Scrolling to Graphic Design");
  };
  const scrollToShopifyStores = () => {
    console.log("Scrolling to Shopify Stores");
  };
  const scrollToBrands = () => {
    console.log("Scrolling to Brands");
  };
  const scrollToServices = () => {
    console.log("Scrolling to Services");
  };

  // Fallback metadata handling
  const pageTitle: string =
    (metadata?.title as string) ||
    "Rishabh Mishra - Founder of Social Pulse Agency";
  const pageDescription =
    metadata?.description ||
    "Learn about Rishabh Mishra, the visionary founder of Social Pulse Agency, and how he builds captivating brands.";
  const pageKeywords = Array.isArray(metadata?.keywords)
    ? metadata.keywords.join(", ")
    : metadata?.keywords ||
      "Rishabh Mishra, Social Pulse Agency, Founder, Branding, Digital Marketing";
  const ogTitle =
    metadata?.openGraph?.title ||
    "Rishabh Mishra - Founder of Social Pulse Agency";
  const ogDescription =
    metadata?.openGraph?.description ||
    "Learn about Rishabh Mishra, the visionary founder of Social Pulse Agency, and how he builds captivating brands.";
  const ogImageUrl = Array.isArray(metadata?.openGraph?.images)
    ? (metadata.openGraph.images[0] as any)?.url
    : typeof metadata?.openGraph?.images === "string"
    ? metadata.openGraph.images
    : "/default-image.png";
  const ogUrl =
    typeof metadata?.openGraph?.url === "string"
      ? metadata.openGraph.url
      : metadata?.openGraph?.url?.toString() ||
        "https://www.socialpulseagency.in/rishabhmishra";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link
          rel="canonical"
          href={
            metadata?.metadataBase?.href ||
            "https://www.socialpulseagency.in/rishabhmishra"
          }
        />
        <meta property="og:title" content={String(ogTitle)} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={ogUrl} />
        <meta
          name="twitter:title"
          content={
            String(metadata?.twitter?.title) ||
            "Rishabh Mishra - Founder of Social Pulse Agency"
          }
        />
        <meta
          name="twitter:description"
          content={
            String(metadata?.twitter?.description) ||
            "Learn about Rishabh Mishra, the visionary founder of Social Pulse Agency, and how he builds captivating brands."
          }
        />
        <meta
          name="twitter:image"
          content={
            Array.isArray(metadata?.twitter?.images)
              ? (metadata.twitter.images[0] as any)?.url
              : typeof metadata?.twitter?.images === "string"
              ? metadata.twitter.images
              : "/default-image.png"
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Rishabh Mishra" />
        <meta name="publisher" content="Social Pulse Agency" />
      </Head>

      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <section
        className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-24 bg-gradient-to-b from-[#171717] via-[#1E1E1E] to-[#171717]"
        aria-label="About Us Section"
      >
        <header>
          <h1 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#8103FF] to-sky-200 bg-opacity-50">
            About Rishabh Mishra
          </h1>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
            We Build Brands that Captivate: Meet the Visionary Behind It All
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:space-x-1 pb-24">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full md:w-1/3 flex flex-col items-center justify-center"
          >
            <ThreeDCardExample />
            <h2 className="text-lg md:text-2xl font-bold text-neutral-300 text-center pt-8">
              Founder - Rishabh Mishra
            </h2>
          </motion.div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center">
            <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left md:pb-12">
              <p>
                Rishabh Mishra, our founder, has always been passionate about
                the power of visual storytelling. With a keen eye for design and
                a deep understanding of branding principles, he established
                Social Pulse Agency to empower businesses to connect with their
                audience through impactful visuals. Our team of passionate
                creatives, led by Rishabh Mishra&apos;s vision, brings that
                passion to life every day.
              </p>
            </article>

            <article className="text-lg md:text-xl text-neutral-300 text-center md:text-left mt-4">
              <p>
                We&apos;re Social Pulse, a digital marketing agency fueled by
                passion and powered by expertise. We craft magnetic campaigns
                and data-driven strategies to amplify your brand voice and
                ignite growth. Think of us as your secret weapon in the
                ever-evolving digital jungle.
              </p>
              <p className="mt-4">
                Ready to conquer the online world? Let&apos;s chat!
              </p>
            </article>

            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/rishabh-mishra007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-blue-500 font-semibold rounded-md hover:text-blue-700 transition duration-300"
              >
                <FaLinkedin className="mr-2 text-xl" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FounderPageClient;
