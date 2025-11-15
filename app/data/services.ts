// app/data/services.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  clientName?: string;
  link?: string;
}
export interface DetailedOffering {
  title: string;
  subtitle: string;
  image: string; // Path to mockup image
  features: string[];
  backgroundColor: string; // hex color for card background
}

export interface Offering {
  icon: string; // Lucide icon name or emoji
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Banner Section
  bannerHeading: string;
  bannerSubheading: string;
  bannerDescription: string;
  bannerImage: string;
  bannerCTA: string;
  bannerLottie?: string;

  clients?: {
    // ✅ added optional
    name: string;
    logo: string;
  }[];

  // About/Intro Section
  introHeading: string;
  introDescription: string;

  // Projects
  projectsSectionTitle: string;
  projectIds: string[]; // Reference to project IDs

  // Offerings
  offeringsSectionTitle?: string; // ✅ make optional
  offeringsSectionSubtitle?: string; // ✅ make optional
  offerings?: Offering[]; // ✅ make optional
  detailedOfferings?: DetailedOffering[]; // ✅ ADD THIS - Used for detailed cards with images

  processSectionTitle?: string;
  processSectionHeading?: string;
  processSectionSubheading?: string;
  processSteps?: ProcessStep[];

  // FAQs
  faqSectionTitle: string;
  faqs: FAQ[];

  // Schema Data for SEO
  schema: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    provider: {
      "@type": string;
      name: string;
      address: string;
      url?: string;
      logo?: string;
      telephone?: string;
      email?: string;
      sameAs?: string[];
    };
    areaServed: string[];
  };
}

// All Projects Database
export const allProjects: Project[] = [
  {
    id: "project-1",
    title: "Hubtown Trade Center",
    description:
      "Lead Generation Landing Page for Real Estate and Meta Ads Campaign for Hubtown Trade Center",
    image: "/images/services/mockup/mockup6.png",
    category: ["web-development", "seo", "Meta-ads", "Social-media-marketing"],
    clientName: "Hubtown",
    link: "#",
  },
  {
    id: "project-2",
    title: "Beqube Consultancy Website",
    description: "Modern website with google sheet Integration",
    image: "/images/services/mockup/mockup2.png",
    category: ["web-development", "web-design", "seo"],
    clientName: "Bequeb Consultancy",
    link: "#",
  },
  {
    id: "project-3",
    title: "Hubtown Northstar",
    description: "Meta Ads Campaign for Real Estate North Star Ahmedabad",
    image: "/images/services/mockup/mockup8.png",
    category: ["Meta-ads", "creatives", "social-media-marketing", "Web-design"],
    clientName: "Hubtown",
    link: "#",
  },
  {
    id: "project-4",
    title: "Mangeshi Velvet",
    description: "Lead Generation Meta Ads Campaign for Mangeshi Velvet",
    image: "/logo/mangeshi.png",
    category: ["meta-ads"],
    clientName: "Mangeshi",
    link: "#",
  },
  {
    id: "project-5",
    title: "Kohinoor Eden",
    description: "Google My Business Optimization for Kohinoor Eden & meta ads",
    image: "/logo/Kohinoor.png",
    category: ["google-my-business", "Meta-ads"],
    clientName: "Kohinoor Group",
    link: "#",
  },
  {
    id: "project-6",
    title: "Balaji Classic",
    description: "Modern, responsive corporate website",
    image: "/logo/balaji.png",
    category: ["Meta-ads"],
    clientName: "Balaji",
    link: "#",
  },
  {
    id: "project-7",
    title: "Panchratna Sapphire",
    description: "Engaging video content for product launch",
    image: "/logo/pancharatna.png",
    category: ["creatives", "social-media-marketing", "Meta-ads"],
    clientName: "Panchratna Developers",
    link: "#",
  },
  {
    id: "project-8",
    title: "Mangeshi World",
    description: "Meta Ads Campaign for Mangeshi World Project",
    image: "/logo/mangeshi-world.png",
    category: ["Meta-ads"],
    clientName: "Mangeshi World",
    link: "#",
  },
  {
    id: "project-9",
    title: "Mangeshi Universe",
    description: "Grew following from 2K to 50K in 6 months",
    image: "/logo/mangeshi-universe.png",
    category: ["social-media-marketing", "meta-ads"],
    clientName: "Mangeshi",
    link: "#",
  },
  {
    id: "project-10",
    title: "Mamtaara E-commerce Store",
    description: "E-commerce website for online Jewellery Store",
    image: "/images/services/mockup/mockup5.png",
    category: ["web-development", "web-design", "seo"],
    clientName: "Mamtaara",
    link: "#",
  },
  {
    id: "project-11",
    title: "Aarav Realty",
    description: "Real Estate Lead Generation Website",
    image: "/images/services/mockup/mockup4.png",
    category: ["web-development", "web-design", "seo"],
    clientName: "Aarav Realty",
    link: "#",
  },
  {
    id: "project-12",
    title: "KD RMC LLP",
    description: "Corporate Website for Ready Mix Concrete Company",
    image: "/images/services/mockup/mockup1.png",
    category: ["web-development", "web-design", "seo"],
    clientName: "KD RMC LLP",
    link: "#",
  },
  {
    id: "project-13",
    title: "Rutu Group",
    description:
      "Real Estate Corporate Website with Lead Generation & social media marketing",
    image: "/images/services/mockup/mockup3.png",
    category: ["web-development", "seo", "meta-ads", "Social-media-marketing"],
    clientName: "Rutu Group",
    link: "#",
  },
  {
    id: "project-14",
    title: "Parth Lakeview Project",
    description:
      "Meta Ads Campaign and Social Media Marketing for Parth Lakeview Real Estate Project",
    image: "/images/services/mockup/mockup7.png",
    category: ["web-design", "seo", "meta-ads", "Social-media-marketing"],
    clientName: "Parth Developer",
    link: "#",
  },
  {
    id: "project-15",
    title: "Rutu Apartments",
    description:
      "Meta Ads Campaign and Social Media Marketing for Rutu Apartments Project",
    image: "/logo/rutu-apt.png",
    category: ["seo", "meta-ads", "Social-media-marketing"],
    clientName: "Rutu Group",
    link: "#",
  },
  {
    id: "project-16",
    title: "Rutu Samruddhi",
    description:
      "Meta ads campaign and social media marketing for Rutu Samruddhi Project",
    image: "/logo/rutu-samruddhi.png",
    category: ["Creavtives", "meta-ads", "Social-media-marketing"],
    clientName: "Rutu Group",
    link: "#",
  },
  {
    id: "project-16",
    title: "Swaminarayan",
    description: "Meta Ads Campaign for Swaminarayan",
    image: "/logo/swaminarayan.png",
    category: ["meta-ads", "Social-media-marketing"],
    clientName: "Swaminarayan",
    link: "#",
  },
];

// Services Data
export const servicesData: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development Services in Thane",
    metaTitle:
      "Website Design and Development Company in Thane | Professional Web Development in Mumbai & India",
    metaDescription:
      "Create beautiful, conversion-focused websites with Thane’s leading website design company, Social Pulse Agency. We design SEO-optimized, mobile-friendly websites for brands, startups, and real estate companies across India.",
    keywords: [
      "web development thane",
      "web development navi mumbai",
      "web development kalyan",
      "web development dombivli",
      "website development agency thane",
      "website development agency navi mumbai",
      "website development agency kalyan",
      "website development agency dombivli",
      "web development company thane",
      "web development company navi mumbai",
      "web development company kalyan",
      "web development company dombivli",
      "best web developer near me",
      "best website designer near me",
      "custom website development thane",
      "custom website development navi mumbai",
      "custom website development kalyan",
      "custom website development dombivli",
      "responsive web design thane",
      "responsive web design navi mumbai",
      "responsive web design kalyan",
      "responsive web design dombivli",
      "ecommerce website development thane",
      "ecommerce website development navi mumbai",
      "ecommerce website development kalyan",
      "ecommerce website development dombivli",
      "wordpress website development thane",
      "wordpress website development navi mumbai",
      "wordpress website development kalyan",
      "wordpress website development dombivli",
      "web design and development services thane",
      "web design and development services navi mumbai",
      "web design and development services kalyan",
      "web design and development services dombivli",
      "website maintenance services thane",
      "website maintenance services navi mumbai",
      "website maintenance services kalyan",
      "website maintenance services dombivli",
      "business website development thane",
      "local web development company near me",
      "professional website developer thane",
      "affordable website development thane",
      "top web development agency thane",
      "best website design company navi mumbai",
    ],

    bannerHeading: "Web Development",
    bannerSubheading: "Websites That Convert, Not Just Impress",
    bannerDescription:
      "Our web development team builds responsive, SEO-friendly websites that enhance user experience and drive measurable sales conversions.",
    bannerImage: "/images/services/banner/web development.png",
    bannerCTA: "Start Your Project",

    // clients: [
    //   { name: "Aarav Realty", logo: "/logo/aarav.png" },
    //   { name: "Hubtown", logo: "/logo/Logo.webp" },
    //   { name: "Beqube", logo: "/logo/beqube.png" },
    //   { name: "Rutu Group", logo: "/logo/Rutu.webp" },
    //   { name: "KD RMC LLP", logo: "/logo/kd.png" },
    //   { name: "Mahavir Group", logo: "/logo/Mahavir.webp" },
    // ],

    introHeading: "Why Choose Our Web Development Services?",
    introDescription:
      "We are a web development company in Thane with years of experience building websites that convert visitors into customers. Our expert team delivers custom solutions tailored to your business needs.",

    processSectionTitle: "OUR PROCESS",
    processSectionHeading: "Building Your",
    processSectionSubheading: "Digital Presence",
    processSteps: [
      {
        number: "01",
        title: "Discovery Phase:",
        description:
          "We start by getting to know your business, your target audience, and your goals for your website. Through in-depth discussions and research, we gather the information needed to create a customized web development strategy.",
      },
      {
        number: "02",
        title: "Design and Development:",
        description:
          "Our talented designers and developers bring your website to life with clean, modern designs and intuitive user experiences. Using the latest web technologies and best practices, we create a website that reflects your brand identity and engages your visitors.",
      },
      {
        number: "03",
        title: "Testing and Optimization:",
        description:
          "Before launching your website, we conduct rigorous testing to ensure that it performs flawlessly across all devices and browsers. We optimize loading speeds, fix any bugs, and ensure everything works perfectly.",
      },
      {
        number: "04",
        title: "Launch and Deployment:",
        description:
          "Once everything is tested and approved, we launch your website and make it live. We handle all technical aspects of deployment, including domain setup, hosting configuration, and SSL certificate installation.",
      },
      {
        number: "05",
        title: "Ongoing Support:",
        description:
          "After launch, we provide continuous support and maintenance to keep your website running smoothly. We monitor performance, apply security updates, and are always available to help with any issues or improvements.",
      },
    ],

    projectsSectionTitle: "Our Web Development Portfolio",
    projectIds: [
      "project-1",
      "project-2",
      "project-3",

      "project-10",
      "project-11",
      "project-12",
      "project-13",
      "project-14",
    ],

    detailedOfferings: [
      {
        title: "Custom Website Development",
        subtitle: "Tailored to your unique needs, just the way you want it.",
        image: "/images/services/mockup/mockup1.png",
        features: [
          "Fully customized designs",
          "Custom UI/UX design",
          "Reflects your brand identity",
          "SEO-ready setup",
        ],
        backgroundColor: "#1e1b4b", // dark purple/blue
      },
      {
        title: "E-Commerce Solutions",
        subtitle: "Powering your online store with flair and finesse.",
        image: "/images/services/mockup/mockup5.png",
        features: [
          "Platform customisation",
          "Plugin integration",
          "CMS training for content updates",
          "Secure payment gateway setup",
        ],
        backgroundColor: "#f59e0b", // orange/yellow
      },
      {
        title: "Landing Page Design for Lead Generation",
        subtitle: "Powerful systems that are a breeze to manage.",
        image: "/images/services/mockup/mockup6.png",
        features: [
          "Conversion-focused layout",
          "High-speed load time",
          "Clear CTAs with tracking links",
          "Form automation integration",
        ],
        backgroundColor: "#ea580c", // darker orange
      },
      {
        title: "Website Maintenance and Support",
        subtitle: "Powerful systems that are a breeze to manage.",
        image: "/images/services/offerings/web-dev/web4.jpg",
        features: [
          "Bug fixes and performance updates",
          "Plugin and version upgrades",
          "Monthly backup services",
          "Analytics and uptime monitoring",
        ],
        backgroundColor: "#ea580c", // darker orange
      },
    ],

    faqSectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much does web development cost in Thane?",
        answer:
          "Web development costs in Thane typically range from ₹25,000 for basic websites to ₹2,00,000+ for complex e-commerce platforms. The final cost depends on features, design complexity, and functionality requirements. We offer transparent pricing with no hidden charges.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website takes 3-4 weeks, while complex e-commerce sites may take 6-8 weeks. The timeline depends on project scope, content readiness, and revision rounds. We provide detailed project timelines during consultation.",
      },
      {
        question: "What is your web development process?",
        answer:
          "Our process includes: 1) Requirement gathering & planning, 2) Design mockups & approval, 3) Development & coding, 4) Testing & quality assurance, 5) Launch & deployment, 6) Post-launch support. We keep you involved at every stage.",
      },
      {
        question: "Do you build responsive websites?",
        answer:
          "Yes! All our websites are fully responsive and mobile-optimized. We follow a mobile-first approach ensuring your site looks perfect on smartphones, tablets, and desktops. This is crucial as 70%+ users browse on mobile devices.",
      },
      {
        question:
          "Why choose a web development agency in Thane over freelancers?",
        answer:
          "Our agency offers a complete team of designers, developers, and SEO experts under one roof. Unlike freelancers, we provide reliable support, meet deadlines consistently, and offer post-launch maintenance. Plus, being local in Thane means easier communication and meetings.",
      },
      {
        question: "Do you provide website maintenance and support?",
        answer:
          "Absolutely! We offer comprehensive maintenance packages including regular updates, security patches, content updates, backup services, and technical support. Our team is available to ensure your website runs smoothly 24/7.",
      },
      {
        question: "Which technologies do you use for web development?",
        answer:
          "We use modern technologies like React, Next.js, Node.js, WordPress, and Shopify based on project needs. Our tech stack is chosen to ensure scalability, security, and optimal performance for your specific business requirements.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Development Services",
      description:
        "Professional web development services in Thane including custom website design, e-commerce development, and responsive web solutions.",
      provider: {
        "@type": "Organization",
        name: "Social Pulse Agency",
        url: "https://www.socialpulseagency.in/", // add website URL
        logo: "https://yourwebsite.com/logo.png", // optional but good for rich results
        telephone: "+91-8451951123", // add contact number
        email: "socialpulse23@gmail.com", // add email
        sameAs: [
          "https://www.linkedin.com/company/social-pulse-agency/posts/?feedView=all",
          "https://www.instagram.com/socialpulseagency.in/",
          "https://www.facebook.com/people/Social-Pulse/61553120560771/?mibextid=ZbWKwL",
        ],
        address:
          "Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata Mandir, Kolungade Society, Uthalsar, Thane West",
      },
      areaServed: ["Thane", "Mumbai", "Navi Mumbai", "Maharashtra"],
    },
  },

  {
    slug: "social-media-marketing",
    title:
      "Social Media Marketing Agency in Thane | Best SMM Company in Mumbai, Navi Mumbai & India",
    metaTitle:
      "Social Media Marketing Agency in Thane | Best SMM Company in Mumbai, Navi Mumbai & India",
    metaDescription:
      "Boost your brand engagement with the top social media marketing agency in Thane. Social Pulse Agency delivers high-performance campaigns on Instagram, Facebook, and LinkedIn. Build a strong digital presence with our expert content strategy and creative designs.",
    keywords: [
      "social media marketing thane",
      "social media marketing navi mumbai",
      "social media marketing kalyan",
      "social media marketing dombivli",
      "smm agency thane",
      "smm agency navi mumbai",
      "smm agency kalyan",
      "smm agency dombivli",
      "social media marketing agency thane",
      "social media marketing agency navi mumbai",
      "social media marketing agency kalyan",
      "social media marketing agency dombivli",
      "best smm company thane",
      "best smm company navi mumbai",
      "best smm company kalyan",
      "best smm company dombivli",
      "social media management thane",
      "social media management navi mumbai",
      "social media management kalyan",
      "social media management dombivli",
      "instagram marketing thane",
      "instagram marketing navi mumbai",
      "instagram marketing kalyan",
      "instagram marketing dombivli",
      "facebook marketing thane",
      "facebook marketing navi mumbai",
      "facebook marketing kalyan",
      "facebook marketing dombivli",
      "linkedin marketing services thane",
      "linkedin marketing services navi mumbai",
      "linkedin marketing services kalyan",
      "linkedin marketing services dombivli",
      "social media advertising thane",
      "social media advertising navi mumbai",
      "social media advertising kalyan",
      "social media advertising dombivli",
      "social media content creation thane",
      "social media content creation navi mumbai",
      "social media content creation kalyan",
      "social media content creation dombivli",
      "facebook ads management thane",
      "instagram ads management thane",
      "paid social media marketing thane",
      "paid social media marketing navi mumbai",
      "digital marketing agency thane",
      "digital marketing company navi mumbai",
      "best social media agency near me",
      "top social media marketing company thane",
      "local social media marketing near me",
      "creative social media agency thane",
    ],

    bannerHeading: "Social Media Marketing",
    bannerSubheading: "Turning Scrolls Into Sales",
    bannerDescription:
      "Choose our social media marketing services to boost engagement and brand visibility across Instagram, Facebook, and LinkedIn with data-driven campaigns.",
    bannerImage: "/images/services/banner/social-media-banner.webp",
    bannerCTA: "Boost Your Presence",

    introHeading: "Strategic Social Media Marketing That Delivers Results",
    introDescription:
      "Choose our social media marketing services to boost engagement and brand visibility across Instagram, Facebook, and LinkedIn with data-driven campaigns.",
    processSectionTitle: "OUR PROCESS",
    processSectionHeading: "Building Your",
    processSectionSubheading: "Digital Presence",
    processSteps: [
      {
        number: "01",
        title: "Brand Understanding:",
        description:
          "We analyze your brand voice, audience, and goals to design a social media strategy that connects.",
      },
      {
        number: "02",
        title: "Content Creation:",
        description:
          "Engaging visuals, captions, and campaign concepts made to increase Instagram and Facebook engagement.",
      },
      {
        number: "03",
        title: "Platform Strategy:",
        description:
          "We plan tailored campaigns across Meta, LinkedIn, and YouTube for maximum online presence.",
      },
      {
        number: "04",
        title: "Performance Ads:",
        description:
          "Data-driven ad campaigns to boost followers, reach, and sales conversions.",
      },
      {
        number: "05",
        title: "Analytics & Optimization:",
        description:
          "Continuous tracking ensures every post and ad delivers results and ROI.",
      },
    ],

    projectsSectionTitle: "Our Social Media Success Stories",
    projectIds: [
      "project-13",
      "project-2",
      "project-1",
      "project-7",
      "project-11",
      "project-13",
      "project-15",
      "project-16",
    ],

    detailedOfferings: [
      {
        title: "Instagram, Facebook, and LinkedIn Marketing Strategies",
        subtitle:
          "Grow your presence where it matters most with strategies built for each platform.",
        image: "/images/services/offerings/SM/SM1.webp",
        features: [
          "Platform-focused growth with audience segmentation",
          "Consistent social posting calendars",
          "Content boosting for higher reach",
          "Hashtag and trend integration",
        ],
        backgroundColor: "#1e1b4b", // dark purple/blue
      },
      {
        title: "Content Creation Services",
        subtitle:
          "Crafting scroll-stopping visuals and stories that connect with your audience.",
        image: "/images/services/offerings/SM/SM2.webp",
        features: [
          "Branded reel production",
          "Carousel design and caption writing",
          "Engaging storytelling-focused visuals",
          "Social tone aligned to your niche",
        ],
        backgroundColor: "#f59e0b", // orange/yellow
      },
      {
        title: "Influencer Collaboration and Brand Partnerships",
        subtitle:
          "Build credibility and reach through authentic creator collaborations.",
        image: "/images/services/offerings/SM/SM3.webp",
        features: [
          "Influencer identification and outreach",
          "Strategic campaign collaboration",
          "Engagement and conversion tracking",
          "Authentic audience engagement",
        ],
        backgroundColor: "#ea580c", // darker orange
      },
      {
        title: "Monthly Analytics and Reporting",
        subtitle:
          "Turn data into direction with transparent insights and performance tracking.",
        image: "/images/services/offerings/SM/SM4.webp",
        features: [
          "Platform performance insights",
          "Engagement and follower growth metrics",
          "Ad ROI tracking",
          "Data-backed strategy updates",
        ],
        backgroundColor: "#1e293b", // dark gray-blue
      },
    ],

    faqSectionTitle: "Social Media Marketing FAQs",
    faqs: [
      {
        question: "How much does social media marketing cost in Thane?",
        answer:
          "Social media marketing packages in Thane start from ₹15,000/month for basic management to ₹50,000+/month for comprehensive campaigns across multiple platforms. Pricing depends on number of platforms, posting frequency, content creation, and ad spend requirements.",
      },
      {
        question: "Which social media platform is best for my business?",
        answer:
          "It depends on your target audience. Instagram and Facebook work great for B2C businesses, especially retail, food, and lifestyle. LinkedIn is ideal for B2B and professional services. We analyze your business and audience to recommend the best platforms during consultation.",
      },
      {
        question:
          "How long does it take to see results from social media marketing?",
        answer:
          "Initial engagement growth appears within 2-4 weeks. Significant follower growth and brand awareness typically takes 2-3 months of consistent posting and engagement. Measurable business results like leads and sales usually show after 3-6 months of strategic campaigns.",
      },
      {
        question: "Do you create content for social media posts?",
        answer:
          "Yes! We provide complete content creation services including graphics design, video editing, copywriting, hashtag research, and posting schedules. Our creative team ensures your brand's visual identity remains consistent across all platforms.",
      },
      {
        question: "What's included in your social media marketing packages?",
        answer:
          "Our packages include content strategy, post creation (graphics/videos), content calendar, daily posting, community management, hashtag optimization, monthly analytics reports, and strategy refinement based on performance data.",
      },
      {
        question: "Can you help grow my Instagram followers organically?",
        answer:
          "Absolutely! We use proven organic growth strategies including optimized content, strategic hashtags, engagement tactics, influencer collaborations, and Instagram reels. We never use fake followers or bots - only genuine growth that leads to real business results.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Marketing Services",
      description:
        "Professional social media marketing services in Thane for Instagram, Facebook, LinkedIn and other platforms to grow your brand presence.",
      provider: {
        "@type": "Organization",
        name: "Social Pulse Agency",
        url: "https://www.socialpulseagency.in/", // add website URL
        logo: "https://yourwebsite.com/logo.png", // optional but good for rich results
        telephone: "+91-8451951123", // add contact number
        email: "socialpulse23@gmail.com", // add email
        sameAs: [
          "https://www.linkedin.com/company/social-pulse-agency/posts/?feedView=all",
          "https://www.instagram.com/socialpulseagency.in/",
          "https://www.facebook.com/people/Social-Pulse/61553120560771/?mibextid=ZbWKwL",
        ],
        address:
          "Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata Mandir, Kolungade Society, Uthalsar, Thane West",
      },
      areaServed: [
        "Thane",
        "Kalyan",
        "Dombivli",
        "Mumbai",
        "Navi Mumbai",
        "Maharashtra",
      ],
    },
  },
  {
    slug: "google-my-business",
    title:
      "Google My Business Optimization Company in Thane | Local SEO & GMB Management",
    metaTitle:
      "Google My Business Optimization Company in Thane | Local SEO & GMB Management",
    metaDescription:
      "Rank higher on Google Maps with expert Google My Business optimization from Social Pulse Agency, Thane. Improve visibility, get more leads, and manage customer reviews effectively through our tailored local SEO services.",
    keywords: [
      "google my business thane",
      "google my business navi mumbai",
      "google my business kalyan",
      "google my business dombivli",
      "gmb optimization thane",
      "gmb optimization navi mumbai",
      "gmb optimization kalyan",
      "gmb optimization dombivli",
      "local seo services thane",
      "local seo services navi mumbai",
      "local seo services kalyan",
      "local seo services dombivli",
      "google business profile management",
      "local business optimization",
      "gmb listing services",
      "google maps ranking services",
      "local seo experts thane",
      "local seo experts navi mumbai",
      "google maps marketing thane",
      "google maps marketing navi mumbai",
    ],

    bannerHeading: "Google My Business",
    bannerSubheading: "Get Found First On Google Maps",
    bannerDescription:
      "Optimize your Google My Business profile with us to rank higher locally, attract nearby customers, and improve your business visibility on Google Maps.",
    bannerImage: "/images/services/banner/GMB.webp",
    bannerCTA: "Optimize My Listing",

    introHeading: "Why Choose Our Google My Business Services?",
    introDescription:
      "With 5+ years of experience in GMB optimization, our team knows how to help your business get discovered by more local customers. Let us manage and improve your GMB profile for better visibility and increased leads.",

    processSectionTitle: "OUR PROCESS",
    processSectionHeading: "Building Your",
    processSectionSubheading: "Digital Presence",
    processSteps: [
      {
        number: "01",
        title: "Profile Setup & Verification:",
        description:
          "We claim, verify, and fully optimize your Google My Business profile to ensure complete ownership and control, setting the foundation for better local visibility and customer engagement.",
      },
      {
        number: "02",
        title: "Keyword & Category Optimization:",
        description:
          "Our team strategically integrates high-performing local SEO keywords and selects the most accurate business categories to enhance your search ranking and attract your ideal local audience.",
      },
      {
        number: "03",
        title: "Visual Branding:",
        description:
          "We enhance your GMB profile with professional photos, engaging videos, and creative posts that reflect your brand identity and draw attention from nearby customers searching for your services.",
      },
      {
        number: "04",
        title: "Review Management:",
        description:
          "We help you generate authentic customer reviews, respond effectively to feedback, and build a trusted online reputation that strengthens your credibility and boosts local search rankings.",
      },
      {
        number: "05",
        title: "Insights & Reporting:",
        description:
          "You’ll receive detailed monthly reports showcasing your profile’s performance—tracking visibility, customer actions, searches, and engagement metrics to guide continuous improvement.",
      },
    ],

    projectsSectionTitle: "Our Google My Business Success Stories",
    projectIds: ["project-5", "project-6", "project-13"],

    detailedOfferings: [
      {
        title: "Profile Setup and Optimization",
        subtitle:
          "Make a lasting first impression with a fully optimized business profile.",
        image: "/images/services/offerings/GMB/gmb1.webp",
        features: [
          "Complete Google business profile setup",
          "Keyword-rich business description",
          "Product/service visibility boosts",
          "Professional image uploads",
        ],
        backgroundColor: "#1e1b4b",
      },
      {
        title: "Local SEO Ranking Improvements",
        subtitle:
          "Boost your local visibility and stay ahead in nearby searches.",
        image: "/images/services/offerings/GMB/gmb2.jpeg",
        features: [
          "Location keyword optimization",
          "Citation and directory listing updates",
          "Map visibility enhancements",
          "Geo-based keyword targeting",
        ],
        backgroundColor: "#f59e0b",
      },
      {
        title: "Customer Review Management",
        subtitle:
          "Build trust and credibility with authentic, well-managed reviews.",
        image: "/images/services/offerings/GMB/gmb3.webp",
        features: [
          "Reputation monitoring",
          "Encouraging customer feedback",
          "Negative review handling",
          "Review response optimization",
        ],
        backgroundColor: "#ea580c",
      },
      {
        title: "Performance Insights and Tracking",
        subtitle:
          "Understand what drives your visibility and engagement on Google Maps.",
        image: "/images/services/offerings/GMB/gmb4.webp",
        features: [
          "Google Maps analytics",
          "Customer call and visit data",
          "Post engagement metrics",
          "Monthly traffic comparison",
        ],
        backgroundColor: "#ea580c",
      },
    ],

    faqSectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "How much does Google My Business optimization cost in Thane?",
        answer:
          "GMB optimization services in Thane typically range from ₹10,000 to ₹30,000, depending on the complexity of the profile and services required. We provide customized packages based on your needs.",
      },
      {
        question: "How long does it take to see results from GMB optimization?",
        answer:
          "It typically takes 4-6 weeks to see significant improvements in your GMB profile's performance, such as increased views, customer actions, and local rankings.",
      },
      {
        question: "What is included in GMB optimization?",
        answer:
          "Our GMB optimization services include profile setup and optimization, review management, posting updates, local SEO integration, and performance tracking.",
      },
      {
        question: "Can you help improve my local SEO with GMB?",
        answer:
          "Yes! GMB optimization is an essential component of local SEO. We ensure your business appears in local searches and on Google Maps to increase visibility and attract more customers.",
      },
      {
        question: "Do you offer ongoing support for my GMB listing?",
        answer:
          "Absolutely! We offer continuous GMB management and optimization, including updates, performance monitoring, and customer interaction management to keep your profile active and engaging.",
      },
      {
        question: "How can I track the results of GMB optimization?",
        answer:
          "We provide detailed reports showing your GMB profile's performance, including search visibility, user engagement, and more. We continuously optimize to ensure your profile stays relevant and competitive.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Google My Business Services",
      description:
        "Google My Business optimization services in Thane to help local businesses increase visibility, attract more customers, and manage online reputation.",
      provider: {
        "@type": "Organization",
        name: "Social Pulse Agency",
        url: "https://www.socialpulseagency.in/", // add website URL
        logo: "https://yourwebsite.com/logo.png", // optional but good for rich results
        telephone: "+91-8451951123", // add contact number
        email: "socialpulse23@gmail.com", // add email
        sameAs: [
          "https://www.linkedin.com/company/social-pulse-agency/posts/?feedView=all",
          "https://www.instagram.com/socialpulseagency.in/",
          "https://www.facebook.com/people/Social-Pulse/61553120560771/?mibextid=ZbWKwL",
        ],
        address:
          "Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata Mandir, Kolungade Society, Uthalsar, Thane West",
      },
      areaServed: [
        "Thane",
        "Kalyan",
        "Dombivli",
        "Mumbai",
        "Navi Mumbai",
        "Maharashtra",
      ],
    },
  },
  {
    slug: "meta-ads",
    title:
      "Meta Ads Agency in Thane | Facebook & Instagram Advertising Experts in Mumbai",
    metaTitle:
      "Meta Ads Agency in Thane | Facebook & Instagram Advertising Experts in Mumbai",
    metaDescription:
      "Drive targeted leads and conversions with Meta Ads specialists at Social Pulse Agency. We help businesses in Thane and Mumbai scale through powerful Facebook and Instagram ad campaigns optimized for ROI.",
    keywords: [
      "meta ads thane",
      "meta ads navi mumbai",
      "meta ads kalyan",
      "meta ads dombivli",
      "facebook ads agency thane",
      "facebook ads agency navi mumbai",
      "facebook ads agency kalyan",
      "facebook ads agency dombivli",
      "instagram ads services thane",
      "instagram ads services navi mumbai",
      "instagram ads services kalyan",
      "instagram ads services dombivli",
      "meta advertising services thane",
      "meta advertising services navi mumbai",
      "meta advertising services kalyan",
      "meta advertising services dombivli",
      "facebook advertising mumbai",
      "facebook advertising thane",
      "facebook advertising navi mumbai",
      "facebook advertising kalyan",
      "facebook advertising dombivli",
      "instagram advertising thane",
      "instagram advertising navi mumbai",
      "instagram advertising kalyan",
      "instagram advertising dombivli",
      "paid social media ads thane",
      "paid social media ads navi mumbai",
      "paid social media ads kalyan",
      "paid social media ads dombivli",
      "facebook marketing campaign thane",
      "instagram marketing campaign thane",
      "social media advertising thane",
      "social media advertising navi mumbai",
      "social media advertising kalyan",
      "social media advertising dombivli",
      "meta ads management thane",
      "meta ads management navi mumbai",
      "meta ads management kalyan",
      "meta ads management dombivli",
      "facebook ads expert near me",
      "instagram ads expert near me",
      "best meta ads agency near me",
      "high converting facebook ads thane",
      "high converting instagram ads thane",
    ],

    bannerHeading: "Meta Ads (Facebook & Instagram Ads)",
    bannerSubheading: "More Clicks. More Leads. More Growth.",
    bannerDescription:
      "Partner with our Meta Ads experts to generate quality leads and brand awareness through high-performing Facebook and Instagram ad campaigns.",
    bannerImage: "/images/services/banner/meta-ads-1.webp",
    bannerCTA: "Start Your Ad Campaign",

    introHeading: "Why Choose Our Meta Ads Services?",
    introDescription:
      "With years of experience in running Meta Ads campaigns, we are experts in targeting the right audience, optimizing for conversions, and scaling ads to drive results. Whether it's Facebook or Instagram, we deliver measurable success.",
    processSectionTitle: "OUR PROCESS",
    processSectionHeading: "Building Your",
    processSectionSubheading: "Digital Presence",
    processSteps: [
      {
        number: "01",
        title: "Audience Targeting:",
        description:
          "We identify precise target demographics using advanced Meta Ads Manager tools, ensuring your ads reach the right people at the right time for maximum engagement and conversions.",
      },
      {
        number: "02",
        title: "Ad Concept & Design:",
        description:
          "Our team creates compelling ad visuals and persuasive copy tailored to your audience, designed to capture attention, drive interest, and encourage clicks and conversions.",
      },
      {
        number: "03",
        title: "Campaign Setup:",
        description:
          "We set up smart Facebook and Instagram campaigns optimized for your specific objectives—whether generating leads, increasing reach, or boosting brand awareness—ensuring everything is configured for peak performance.",
      },
      {
        number: "04",
        title: "Budget Optimization:",
        description:
          "Through careful testing and refinement, we manage ad budgets to achieve the highest ROI while minimizing cost per click, ensuring every dollar spent works efficiently to meet your goals.",
      },
      {
        number: "05",
        title: "Analytics & Reporting:",
        description:
          "We provide comprehensive tracking and reporting of your campaign performance, using real-time insights to adjust strategies, optimize ads, and ensure continuous improvement and measurable results.",
      },
    ],

    projectsSectionTitle: "Our Meta Ads Success Stories",
    projectIds: [
      "project-1",
      "project-3",
      "project-4",
      "project-5",
      "project-6",
      "project-7",
      "project-8",
      "project-9",
      "project-10",
      "project-11",
      "project-12",
      "project-13",
      "project-14",
      "project-15",
      "project-16",
    ],

    detailedOfferings: [
      {
        title: "Custom Audience Targeting",
        subtitle:
          "Reach the right people with precise audience segmentation for higher engagement and conversions.",
        image: "/images/services/offerings/meta/meta1.webp",
        features: [
          "Demographic-based segmentation",
          "Interest and behaviour targeting",
          "Retargeting setup",
          "Lookalike audiences",
        ],
        backgroundColor: "#1e40af", // dark blue
      },
      {
        title: "Creative Ad Design and Copywriting",
        subtitle:
          "Grab attention and drive action with scroll-stopping ads and persuasive copy.",
        image: "/images/services/offerings/meta/meta2.webp",
        features: [
          "Scroll-stopping image/video ads",
          "Emotional ad copy creation",
          "CTA optimisation",
          "A/B ad variant testing",
        ],
        backgroundColor: "#9333ea", // purple
      },
      {
        title: "Budget and Performance Optimisation",
        subtitle:
          "Maximise ROI by testing, tracking, and fine-tuning every ad spend efficiently.",
        image: "/images/services/offerings/meta/meta3.webp",
        features: [
          "Ad spend allocation testing",
          "CPC and CTR tracking",
          "Cost-per-lead analysis",
          "Daily optimisation routines",
        ],
        backgroundColor: "#f59e0b", // orange/yellow
      },
      {
        title: "Campaign Insights and Reporting",
        subtitle:
          "Make data-driven decisions with transparent metrics, ROI tracking, and performance insights.",
        image: "/images/services/offerings/meta/meta4.webp",
        features: [
          "Conversion monitoring",
          "Ad reach and frequency reports",
          "Pixel data analysis",
          "Monthly ROI summary",
        ],
        backgroundColor: "#10b981", // green
      },
    ],

    faqSectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much do Meta Ads cost in Thane?",
        answer:
          "Meta Ads cost in Thane can range from ₹5,000 to ₹1,00,000+ per month, depending on your ad budget, targeting, and campaign goals. We work with you to create a budget that maximizes your ROI.",
      },
      {
        question: "How long does it take to see results from Meta Ads?",
        answer:
          "Results from Meta Ads can typically be seen within 2-4 weeks. However, significant optimizations and scaling usually take 1-2 months depending on your campaign goals and audience engagement.",
      },
      {
        question: "What type of businesses benefit from Meta Ads?",
        answer:
          "Meta Ads are ideal for businesses of all sizes. Whether you’re a local business looking to attract foot traffic or an e-commerce store aiming to boost online sales, we create customized campaigns for your needs.",
      },
      {
        question: "Can you manage ads for both Facebook and Instagram?",
        answer:
          "Yes! We offer comprehensive ad management for both Facebook and Instagram, ensuring a cohesive strategy across both platforms. We optimize ad creatives and targeting based on platform-specific performance.",
      },
      {
        question: "Do you provide ad creatives or do I need to supply them?",
        answer:
          "We provide complete ad creative services, including graphic design, video production, and copywriting. Our team creates compelling visuals and copy that resonate with your audience and drive engagement.",
      },
      {
        question: "What types of Meta Ads campaigns do you run?",
        answer:
          "We run a variety of campaigns, including brand awareness, lead generation, conversions, website traffic, and app installs. We tailor each campaign to your business objectives to ensure maximum performance.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Meta Ads Services",
      description:
        "Meta Ads management services for Facebook and Instagram, including ad design, targeting, optimization, and performance tracking.",
      provider: {
        "@type": "Organization",
        name: "Social Pulse Agency",
        url: "https://www.socialpulseagency.in/", // add website URL
        logo: "https://yourwebsite.com/logo.png", // optional but good for rich results
        telephone: "+91-8451951123", // add contact number
        email: "socialpulse23@gmail.com", // add email
        sameAs: [
          "https://www.linkedin.com/company/social-pulse-agency/posts/?feedView=all",
          "https://www.instagram.com/socialpulseagency.in/",
          "https://www.facebook.com/people/Social-Pulse/61553120560771/?mibextid=ZbWKwL",
        ],
        address:
          "Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata Mandir, Kolungade Society, Uthalsar, Thane West",
      },
      areaServed: [
        "Thane",
        "Kalyan",
        "Dombivli",
        "Mumbai",
        "Navi Mumbai",
        "Maharashtra",
      ],
    },
  },
  {
    slug: "creatives",
    title:
      "Creative Agency in Thane | Branding, Design, and Social Media Graphics Experts",
    metaTitle:
      "Creative Agency in Thane | Branding, Design, and Social Media Graphics Experts",
    metaDescription:
      "Engage your audience with premium creative designs from Social Pulse Agency, Thane. We craft eye-catching visuals, branding kits, and social media content that boost brand visibility across Mumbai and Navi Mumbai.",
    keywords: [
      "creatives and video editing thane",
      "creatives and video editing navi mumbai",
      "creatives and video editing kalyan",
      "creatives and video editing dombivli",
      "graphic design services thane",
      "graphic design services navi mumbai",
      "graphic design services kalyan",
      "graphic design services dombivli",
      "video editing services thane",
      "video editing services navi mumbai",
      "video editing services kalyan",
      "video editing services dombivli",
      "custom design agency thane",
      "custom design agency navi mumbai",
      "custom design agency kalyan",
      "custom design agency dombivli",
      "promotional video creation thane",
      "promotional video creation navi mumbai",
      "promotional video creation kalyan",
      "promotional video creation dombivli",
      "social media creatives thane",
      "social media creatives navi mumbai",
      "social media creatives kalyan",
      "social media creatives dombivli",
      "branding agency thane",
      "branding agency navi mumbai",
      "branding agency kalyan",
      "branding agency dombivli",
      "digital creative agency thane",
      "digital creative agency navi mumbai",
      "digital creative agency kalyan",
      "digital creative agency dombivli",
      "logo design services thane",
      "logo design services navi mumbai",
      "logo design services kalyan",
      "logo design services dombivli",
      "social media graphics design thane",
      "social media graphics design navi mumbai",
      "social media graphics design kalyan",
      "social media graphics design dombivli",
      "animation and motion graphics thane",
      "animation and motion graphics navi mumbai",
      "animation and motion graphics kalyan",
      "animation and motion graphics dombivli",
      "video marketing services thane",
      "video marketing services navi mumbai",
      "video marketing services kalyan",
      "video marketing services dombivli",
      "creative agency near me",
      "professional video editing services near me",
      "best graphic design company thane",
      "top creative agency navi mumbai",
    ],

    bannerHeading: "Creative Design",
    bannerSubheading: "Creativity That Sells, Designs That Speak",
    bannerDescription:
      "Get unique, engaging designs that reflect your brand identity and enhance online presence across all digital platforms.",
    bannerImage: "/images/services/banner/creatives.webp",
    bannerCTA: "Start Your Creative Journey",

    introHeading: "Why Choose Our Creatives & Video Editing Services?",
    introDescription:
      "Our creative team specializes in producing high-quality, visually appealing designs and engaging videos that elevate your brand presence. Whether it's for social media, marketing campaigns, or website design, we deliver top-notch creativity to help you stand out.",
    processSectionTitle: "OUR PROCESS",
    processSectionHeading: "Building Your",
    processSectionSubheading: "Digital Presence",
    processSteps: [
      {
        number: "01",
        title: "Concept Discussion:",
        description:
          "We begin by understanding your brand goals, vision, and creative direction to ensure every design aligns perfectly with your messaging and overall brand identity.",
      },
      {
        number: "02",
        title: "Mood Board Creation:",
        description:
          "Our team creates detailed visual concept boards that define your brand’s look, color palette, typography, and overall mood, setting a strong foundation for consistent and impactful design.",
      },
      {
        number: "03",
        title: "Design Execution:",
        description:
          "We produce high-quality creative assets, including social media visuals, posters, campaign graphics, and other digital content, crafted to engage your audience and reflect your brand’s personality.",
      },
      {
        number: "04",
        title: "Review & Feedback:",
        description:
          "Designs are refined based on your feedback to ensure consistency, visual impact, and alignment with your brand strategy, resulting in polished and effective creative materials.",
      },
      {
        number: "05",
        title: "Delivery & Adaptation:",
        description:
          "Final designs are delivered in optimized formats for all digital platforms, ensuring seamless integration across social media, websites, and other marketing channels while maintaining visual quality.",
      },
    ],

    projectsSectionTitle: "Our Creatives & Video Editing Success Stories",
    projectIds: [
      "project-1",
      "project-3",
      "project-4",
      "project-5",
      "project-6",
      "project-7",
      "project-8",
      "project-9",
      "project-10",
      "project-11",
      "project-13",
      "project-14",
      "project-15",
      "project-16",
    ],

    detailedOfferings: [
      {
        title: "Branding Design Services",
        subtitle:
          "Create a memorable brand identity with professional logos, color palettes, and consistent visual assets.",
        image: "/images/services/offerings/creatives/creative1.webp",
        features: [
          "Logo and visual identity design",
          "Colour palette and typography setup",
          "Brand assets standardisation",
          "Corporate design consistency",
        ],
        backgroundColor: "#1e40af", // dark blue
      },
      {
        title: "Social Media Graphic Design",
        subtitle:
          "Engage your audience with eye-catching social graphics and cohesive post designs.",
        image: "/images/services/offerings/creatives/creative2.webp",
        features: [
          "Carousel and post designs",
          "Story highlights and templates",
          "Holiday campaign visuals",
          "Branded highlight covers",
        ],
        backgroundColor: "#9333ea", // purple
      },
      {
        title: "Print and Digital Collateral Design",
        subtitle:
          "Deliver impactful visuals across print and digital platforms for campaigns and promotions.",
        image: "/images/services/offerings/creatives/creative3.webp",
        features: [
          "Brochure and flyer designs",
          "Advertisement creatives",
          "Event banner and poster creation",
          "Product packaging concepts",
        ],
        backgroundColor: "#f59e0b", // orange/yellow
      },
      {
        title: "Rebranding and Identity Refresh",
        subtitle:
          "Revitalize your brand with updated logos, refined styles, and consistent design across platforms.",
        image: "/images/services/offerings/creatives/creative4.webp",
        features: [
          "Logo enhancements",
          "Tone and style revamp",
          "Updated design consistency",
          "Social profile rework",
        ],
        backgroundColor: "#10b981", // green
      },
    ],

    faqSectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "How much do creative design and video editing services cost?",
        answer:
          "The cost for creatives and video editing services varies depending on the complexity of the project. Basic graphic designs start at ₹5,000, while comprehensive video editing projects can range from ₹15,000 to ₹1,00,000+ depending on length and requirements.",
      },
      {
        question: "How long does it take to complete a video editing project?",
        answer:
          "The turnaround time for video editing projects typically ranges from 1 week for shorter videos to 4-6 weeks for larger, more complex productions. We provide detailed timelines during consultation.",
      },
      {
        question: "Do you offer social media video content?",
        answer:
          "Yes! We create short, engaging video content designed for platforms like Instagram, Facebook, and YouTube to boost brand awareness and user engagement.",
      },
      {
        question: "Can you design graphics for my social media campaigns?",
        answer:
          "Absolutely! Our team specializes in creating custom graphics, including posts, stories, and banners tailored to your social media campaign needs. We ensure they are aligned with your branding and optimized for each platform.",
      },
      {
        question: "What kind of videos do you produce?",
        answer:
          "We produce various types of videos including promotional videos, product demos, explainer videos, event highlights, and social media content, designed to resonate with your target audience.",
      },
      {
        question: "Can I provide my own footage for video editing?",
        answer:
          "Yes! We accept raw footage from clients and provide professional editing services to transform your content into high-quality videos that meet your needs.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Creatives Services",
      description:
        "Creative design and video editing services that help businesses produce high-quality visuals and videos for marketing and brand communication.",
      provider: {
        "@type": "Organization",
        name: "Social Pulse Agency",
        url: "https://www.socialpulseagency.in/", // add website URL
        logo: "https://yourwebsite.com/logo.png", // optional but good for rich results
        telephone: "+91-8451951123", // add contact number
        email: "socialpulse23@gmail.com", // add email
        sameAs: [
          "https://www.linkedin.com/company/social-pulse-agency/posts/?feedView=all",
          "https://www.instagram.com/socialpulseagency.in/",
          "https://www.facebook.com/people/Social-Pulse/61553120560771/?mibextid=ZbWKwL",
        ],
        address:
          "Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata Mandir, Kolungade Society, Uthalsar, Thane West",
      },
      areaServed: [
        "Thane",
        "Kalyan",
        "Dombivli",
        "Mumbai",
        "Navi Mumbai",
        "Maharashtra",
      ],
    },
  },
  {
    slug: "seo",
    title:
      "SEO Company in Thane | Top Search Engine Optimization Services in Mumbai & India",
    metaTitle:
      "SEO Company in Thane | Top Search Engine Optimization Services in Mumbai & India",
    metaDescription:
      "Rank your website on Google with the best SEO company in Thane – Social Pulse Agency. We deliver keyword research, content optimization, backlink building, and measurable SEO results for businesses across India.",
    keywords: [
      "seo services thane",
      "seo services navi mumbai",
      "seo services kalyan",
      "seo services dombivli",
      "seo agency thane",
      "seo agency navi mumbai",
      "seo agency kalyan",
      "seo agency dombivli",
      "local seo services thane",
      "local seo services navi mumbai",
      "local seo services kalyan",
      "local seo services dombivli",
      "search engine optimization mumbai",
      "search engine optimization thane",
      "search engine optimization navi mumbai",
      "search engine optimization kalyan",
      "search engine optimization dombivli",
      "on-page seo services thane",
      "on-page seo services navi mumbai",
      "on-page seo services kalyan",
      "on-page seo services dombivli",
      "off-page seo services thane",
      "off-page seo services navi mumbai",
      "off-page seo services kalyan",
      "off-page seo services dombivli",
      "seo expert thane",
      "seo expert navi mumbai",
      "seo expert kalyan",
      "seo expert dombivli",
      "best seo company thane",
      "best seo company navi mumbai",
      "best seo company kalyan",
      "best seo company dombivli",
      "professional seo services thane",
      "professional seo services navi mumbai",
      "professional seo services kalyan",
      "professional seo services dombivli",
      "technical seo audit thane",
      "technical seo audit navi mumbai",
      "technical seo audit kalyan",
      "technical seo audit dombivli",
      "keyword research services thane",
      "keyword research services navi mumbai",
      "keyword research services kalyan",
      "keyword research services dombivli",
      "seo company near me",
      "affordable seo services thane",
      "top seo agency near me",
      "google ranking services thane",
      "google ranking services navi mumbai",
    ],

    bannerHeading: "SEO",
    bannerSubheading: "Get Ranked. Get Seen. Get Leads.",
    bannerDescription:
      "Improve your search rankings with our expert SEO strategies that increase organic traffic, visibility, and business growth.",
    bannerImage: "/images/services/banner/seo-banner.png",
    bannerCTA: "Boost My Rankings",

    introHeading: "Why Choose Our SEO Services?",
    introDescription:
      "Our SEO strategies are designed to deliver long-term growth, improve your website’s rankings, and drive qualified traffic. With a combination of on-page, off-page, and technical SEO, we help your business get discovered by more customers on search engines.",
    processSectionTitle: "OUR PROCESS",
    processSectionHeading: "Building Your",
    processSectionSubheading: "Digital Presence",
    processSteps: [
      {
        number: "01",
        title: "Website Audit:",
        description:
          "We conduct a comprehensive analysis of your website’s structure, performance, and technical SEO aspects, identifying opportunities and issues that may affect search engine visibility and user experience.",
      },
      {
        number: "02",
        title: "Keyword Research:",
        description:
          "Our team identifies high-ranking, relevant keywords tailored to your niche, industry, and location, ensuring your content targets the right audience and drives qualified traffic to your site.",
      },
      {
        number: "03",
        title: "On-Page SEO:",
        description:
          "We optimize all on-page elements, including titles, meta descriptions, headings, images, and content, to improve Google rankings, enhance user experience, and make your site more discoverable.",
      },
      {
        number: "04",
        title: "Off-Page SEO:",
        description:
          "We build high-quality backlinks, strengthen your domain authority, and engage in strategic digital outreach to boost your website’s credibility and long-term search engine rankings.",
      },
      {
        number: "05",
        title: "Tracking & Maintenance:",
        description:
          "We continuously monitor your website’s performance, track keyword rankings, analyze traffic, and provide actionable reports to refine SEO strategies and ensure sustained growth and conversions.",
      },
    ],

    projectsSectionTitle: "Our SEO Success Stories",
    projectIds: [
      "project-1",
      "project-2",
      "project-3",
      "project-7",
      "project-10",
      "project-11",
      "project-12",
      "project-13",
      "project-14",
    ],

    detailedOfferings: [
      {
        title: "On-Page SEO Optimisation",
        subtitle:
          "Boost your website’s visibility with optimized titles, meta tags, content, and structured data.",
        image: "/images/services/offerings/SEO/seo1.jpeg",
        features: [
          "Title and meta optimisation",
          "Content keyword alignment",
          "Schema markup setup",
          "Image alt tagging",
        ],
        backgroundColor: "#1e40af", // dark blue
      },
      {
        title: "Off-Page SEO and Link Building",
        subtitle:
          "Strengthen your domain authority with high-quality backlinks, guest posts, and PR placements.",
        image: "/images/services/offerings/SEO/seo2.webp",
        features: [
          "Quality backlink development",
          "Guest posting outreach",
          "PR and media placements",
          "Competitor link analysis",
        ],
        backgroundColor: "#9333ea", // purple
      },
      {
        title: "Local SEO Strategy",
        subtitle:
          "Increase local visibility with Google Maps, GMB optimization, and location-targeted strategies.",
        image: "/images/services/offerings/SEO/seo3.webp",
        features: [
          "Google Maps and GMB linking",
          "Location keyword enhancement",
          "NAP consistency updates",
          "Review acquisition strategy",
        ],
        backgroundColor: "#f59e0b", // orange/yellow
      },
      {
        title: "SEO Performance Tracking and Reporting",
        subtitle:
          "Monitor keyword rankings, traffic metrics, and conversions with clear, actionable insights.",
        image: "/images/services/offerings/SEO/seo4.webp",
        features: [
          "Keyword ranking reports",
          "Traffic and CTR metrics",
          "Conversion path analysis",
          "Monthly SEO insights",
        ],
        backgroundColor: "#10b981", // green
      },
      // {
      //   title: "Google Ads Campaign Setup and Management",
      //   subtitle:
      //     "Drive targeted traffic with goal-based campaigns across Search, Display, and YouTube networks.",
      //   image: "/images/services/mockup/google-ads.jpg",
      //   features: [
      //     "Campaign Setup and Management",
      //     "Goal-based ad structuring",
      //     "Ad group and keyword segmentation",
      //     "Location and device targeting",
      //     "Conversion tracking setup",
      //   ],
      //   backgroundColor: "#1e40af", // dark blue
      // },
      // {
      //   title: "Search, Display & YouTube Ads",
      //   subtitle:
      //     "Capture attention and clicks with high-performing search, display, and YouTube campaigns.",
      //   image: "/images/services/mockup/google-ads-display.jpg",
      //   features: [
      //     "High click-through search ads",
      //     "Visual display campaigns",
      //     "TrueView YouTube ad optimisation",
      //     "Retargeting and remarketing setup",
      //   ],
      //   backgroundColor: "#9333ea", // purple
      // },
      {
        title: "Keyword Research and Bid Optimization",
        subtitle:
          "Maximize ROI with competitor analysis, negative keyword filtering, and strategic bid management.",
        image: "/images/services/offerings/SEO/seo5.webp",
        features: [
          "Competitor keyword analysis",
          "Negative keyword filtering",
          "CPC and ROI balancing",
          "Automated bid strategies",
        ],
        backgroundColor: "#f59e0b", // orange/yellow
      },
      {
        title: "Google Ads Performance Insights",
        subtitle:
          "Track ad performance, CTR, conversions, and integrate analytics for data-driven campaign decisions.",
        image: "/images/services/offerings/SEO/seo6.webp",
        features: [
          "CTR and conversion tracking",
          "Impression share analysis",
          "Google Analytics integration",
          "Detailed monthly reports",
        ],
        backgroundColor: "#10b981", // green
      },
    ],

    faqSectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much does SEO cost in Thane?",
        answer:
          "SEO pricing in Thane can vary based on the scope of work and the competitiveness of your industry. Basic packages can start from ₹15,000/month, while comprehensive SEO campaigns can range from ₹50,000/month to ₹1,00,000+/month.",
      },
      {
        question: "How long does it take to see SEO results?",
        answer:
          "SEO results typically start to appear in 3-6 months. However, significant improvements in rankings and traffic may take up to 12 months depending on the competition, current website status, and SEO efforts.",
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer:
          "On-page SEO focuses on optimizing individual website pages (e.g., content, title tags, images), while off-page SEO involves strategies outside the website, like backlink building and social signals, to improve your website’s authority and rankings.",
      },
      {
        question: "Why is technical SEO important?",
        answer:
          "Technical SEO ensures your website is accessible, fast, and easily crawlable by search engines. This helps improve your website’s indexation, user experience, and ultimately, your rankings in search results.",
      },
      {
        question: "Do you offer SEO for e-commerce websites?",
        answer:
          "Yes! We offer tailored SEO services for e-commerce websites, including product optimization, technical fixes, and on-page strategies to improve product visibility and drive sales.",
      },
      {
        question: "Do you provide local SEO services?",
        answer:
          "Yes, we offer local SEO services to help businesses rank in local search results. This includes optimizing Google My Business profiles, local keyword targeting, and building local backlinks to attract customers in your area.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SEO Services",
      description:
        "Professional search engine optimization services in Thane to increase organic search rankings, drive traffic, and improve website visibility.",
      provider: {
        "@type": "Organization",
        name: "Social Pulse Agency",
        url: "https://www.socialpulseagency.in/", // add website URL
        logo: "https://yourwebsite.com/logo.png", // optional but good for rich results
        telephone: "+91-8451951123", // add contact number
        email: "socialpulse23@gmail.com", // add email
        sameAs: [
          "https://www.linkedin.com/company/social-pulse-agency/posts/?feedView=all",
          "https://www.instagram.com/socialpulseagency.in/",
          "https://www.facebook.com/people/Social-Pulse/61553120560771/?mibextid=ZbWKwL",
        ],
        address:
          "Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata Mandir, Kolungade Society, Uthalsar, Thane West",
      },
      areaServed: [
        "Thane",
        "Kalyan",
        "Dombivli",
        "Mumbai",
        "Navi Mumbai",
        "Maharashtra",
      ],
    },
  },

  // Add remaining services following the same structure...
  // I'll provide the template for the remaining 4 services
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

// Helper function to get projects for a service
export function getProjectsForService(projectIds: string[]): Project[] {
  return allProjects.filter((project) => projectIds.includes(project.id));
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
