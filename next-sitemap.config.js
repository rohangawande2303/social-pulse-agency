module.exports = {
  siteUrl: "https://www.socialpulseagency.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/404", "/500"], // Add any pages you want to exclude
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.socialpulseagency.in/server-sitemap.xml", // If you have additional sitemaps
    ],
  },
  // Add any dynamic pages or routes
  additionalPaths: async (config) => {
    const result = [
      {
        loc: "/rishabhmishra", // This will add your page
        changefreq: "monthly",
        priority: 1.0,
      },
    ];
    // Example: Add dynamic routes
    // result.push({ loc: '/dynamic-page-1', changefreq: 'daily', priority: 0.7 })
    // result.push({ loc: '/dynamic-page-2', changefreq: 'daily', priority: 0.7 })
    return result;
  },
};
