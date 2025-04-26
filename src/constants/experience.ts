import { Experience } from "@/types";

// Experience data used in both homepage and professional experience page
export const experienceData: Experience[] = [
  {
    title: "Full-Stack JavaScript Developer",
    company: "Phaedra Solutions",
    location: "Lahore, Pakistan",
    period: "Mar 2024 - Present",
    description: [
      "Architected and developed full-stack applications using Next.js, React.js, Nest.js, PostgreSQL, and ORMs (Prisma, Sequelize)",
      "Engineered RESTful APIs with optimized data flow patterns and comprehensive documentation",
      "Built responsive, mobile-first UIs implementing modern design practices and state management",
      "Contributed to React Native mobile applications with cross-platform functionality",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "React Native",
    ],
  },
  {
    title: "Next.js Developer",
    company: "Voltonic Solution Pvt. Ltd.",
    location: "Lahore, Pakistan",
    period: "Aug 2023 - Jan 2024",
    description: [
      "Developed e-commerce platforms with Next.js and TypeScript, improving application efficiency by 30%",
      "Integrated REST APIs and implemented secure authentication systems",
      "Utilized Redux for state management in complex dashboards, increasing user satisfaction by 40%",
      "Collaborated with design teams to implement pixel-perfect UI components",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux",
      "API Integration",
      "E-commerce",
    ],
  },
];
