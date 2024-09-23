/** @type {import('next').NextConfig} */
import { withSitemap } from "next-sitemap";

const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"],
  },
};

export default withSitemap({
  ...nextConfig,
  siteUrl: "https://www.socialpulseagency.in", // Your domain
  generateRobotsTxt: true,
});
