import { Project } from "@/types";

// Unified project data
export const allProjects: Project[] = [
  {
    id: 1,
    slug: "restat",
    title: "Restat - Business Development SaaS",
    description:
      "Enterprise SaaS platform serving 90+ companies with integrated services (Stripe, Brevo) and performance optimizations that reduced API response time by 150ms.",
    technologies: [
      "Nest.js",
      "PostgreSQL",
      "React.js",
      "Vue.js",
      "Stripe",
      "Integrations",
    ],
    image:
      "https://app.restat.io/static/media/logo.1a0c1d1d21b36e2579a432739ef98953.svg",
    links: {
      live: "https://app.restat.io",
      chrome:
        "https://chromewebstore.google.com/detail/restat/piboogehnifdnfbniihlngohmpopdamo?hl=en",
    },
    isFeatured: true, // Mark as featured
  },
  {
    id: 2,
    slug: "megatourn",
    title: "MegaTourn - Sports Tournament Platform",
    description:
      "Comprehensive tournament management platform with payment processing, automated communications, and performance-optimized interfaces.",
    technologies: [
      "Nest.js",
      "PostgreSQL",
      "React.js",
      "Stripe",
      "Sports",
      "Brevo",
    ],
    image: "https://app.megatourn.com/assets/logo-full-white-e72aOfNi.svg",
    links: {
      live: "https://app.megatourn.com",
    },
    isFeatured: true, // Mark as featured
  },
  {
    id: 3,
    slug: "cc-build",
    title: "CC Build - Mobile Application",
    description:
      "Mobile app with real-time data synchronization and offline capabilities, built using React Native CLI and Firebase.",
    technologies: [
      "React Native",
      "Firebase",
      "PostgreSQL",
      "Nest.js",
      "Mobile App",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I8ojSr2o6R1MQfFqwizGJh_V0W6kZqxs8Q&s",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.mobilecarboncopy&hl=en",
    },
    isFeatured: true, // Mark as featured
  },
  {
    id: 4,
    slug: "n8n-automation",
    title: "N8N Blog & LinkedIn Automation",
    description:
      "Advanced automation system that transformed content creation process, reducing publishing time from 30 days to 3 minutes.",
    technologies: ["N8N", "OpenAI", "React.js", "Automation", "AI", "SEO"],
    image:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
    links: {},
    isFeatured: false, // Not featured by default
  },
];
