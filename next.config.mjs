/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"],
  },
};

export default nextConfig;
const withSitemap = require("next-sitemap");
module.exports = withSitemap({
  siteUrl: "https://www.socialpulseagency.in", // Your domain
  generateRobotsTxt: true,
});
