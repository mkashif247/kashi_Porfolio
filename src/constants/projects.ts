import { Project, DetailedProject } from "@/types";

// Main projects data used in projects page
export const projectsData: Project[] = [
  {
    title: "Restat",
    description:
      "Built a SaaS platform with Nest.js, PostgreSQL, React.js, and Vue.js (Chrome extension), serving 90+ companies. Integrated Stripe, Brevo, cron jobs, ClickUp, HubSpot, Upwork. Optimized performance by 25% (150ms API reduction).",
    tags: [
      "SaaS",
      "Nest.js",
      "PostgreSQL",
      "React.js",
      "Vue.js",
      "Stripe",
      "Integrations",
    ],
    liveUrl: "https://app.restat.io",
    chromeUrl:
      "https://chromewebstore.google.com/detail/restat/piboogehnifdnfbniihlngohmpopdamo?hl=en",
    imagePath: "/images/projects/restat.jpg",
  },
  {
    title: "MegaTourn",
    description:
      "Developed a sports tournament platform with Nest.js, PostgreSQL, and React.js. Integrated Stripe, Brevo, and cron jobs. Reduced load times by 20% with efficient coding practices. Built super admin panel and added social media integration.",
    tags: ["Nest.js", "PostgreSQL", "React.js", "Stripe", "Sports"],
    liveUrl: "https://app.megatourn.com",
    imagePath: "/images/projects/megatourn.jpg",
  },
  {
    title: "CC Build",
    description:
      "Built a React Native CLI mobile app with PostgreSQL, Firebase, and Nest.js backend for real-time data synchronization.",
    tags: ["React Native", "Mobile App", "PostgreSQL", "Firebase", "Nest.js"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mobilecarboncopy&hl=en",
    imagePath: "/images/projects/ccbuild.jpg",
  },
  {
    title: "N8N Blog & LinkedIn Automation",
    description:
      "AI agent which Automated blog and LinkedIn content creation using OpenAI LLM, N8N and React for SEO-optimized text and images. Built a responsive React.js frontend, enhancing content management efficiency. Reduced publishing time from 30 days to 3 minutes.",
    tags: ["AI", "Automation", "N8N", "OpenAI", "React.js", "SEO"],
    imagePath: "/images/projects/n8n.jpg",
  },
];

// Featured projects for homepage (less details)
export const featuredProjects: Project[] = [
  {
    title: "Restat",
    description:
      "SaaS platform with Nest.js, PostgreSQL, React.js, and Vue.js serving 90+ companies.",
    tags: ["SaaS", "Nest.js", "React.js"],
  },
  {
    title: "MegaTourn",
    description:
      "Sports tournament platform with Nest.js, PostgreSQL, and React.js.",
    tags: ["Nest.js", "React.js", "Sports"],
  },
  {
    title: "CC Build",
    description:
      "React Native mobile app with PostgreSQL, Firebase, and Nest.js backend.",
    tags: ["React Native", "Firebase"],
  },
];

// Detailed projects data for professional experience page
export const detailedProjects: DetailedProject[] = [
  {
    id: 1,
    title: "Restat - Business Development SaaS",
    description:
      "Enterprise SaaS platform serving 90+ companies with integrated services (Stripe, Brevo) and performance optimizations that reduced API response time by 150ms.",
    technologies: ["Nest.js", "PostgreSQL", "React.js", "Vue.js", "Stripe"],
    image:
      "https://app.restat.io/static/media/logo.1a0c1d1d21b36e2579a432739ef98953.svg",
    links: {
      live: "https://app.restat.io",
      chrome:
        "https://chromewebstore.google.com/detail/restat/piboogehnifdnfbniihlngohmpopdamo?hl=en",
    },
  },
  {
    id: 2,
    title: "MegaTourn - Sports Tournament Platform",
    description:
      "Comprehensive tournament management platform with payment processing, automated communications, and performance-optimized interfaces.",
    technologies: ["Nest.js", "PostgreSQL", "React.js", "Stripe", "Brevo"],
    image: "https://app.megatourn.com/assets/logo-full-white-e72aOfNi.svg",
    links: {
      live: "https://app.megatourn.com",
    },
  },
  {
    id: 3,
    title: "CC Build - Mobile Application",
    description:
      "Mobile app with real-time data synchronization and offline capabilities, built using React Native CLI and Firebase.",
    technologies: ["React Native", "Firebase", "PostgreSQL", "Nest.js"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I8ojSr2o6R1MQfFqwizGJh_V0W6kZqxs8Q&s",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.mobilecarboncopy&hl=en",
    },
  },
  {
    id: 4,
    title: "N8N Blog & LinkedIn Automation",
    description:
      "Advanced automation system that transformed content creation process, reducing publishing time from 30 days to 3 minutes.",
    technologies: ["N8N", "OpenAI", "React.js", "Automation"],
    image:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
    links: {},
  },
];
