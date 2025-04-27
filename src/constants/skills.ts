import { Skill } from "@/types";

// Skills categories
export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  // | "devops" // Commented out DevOps
  | "tools"
  | "mobile"
  | "automation";

// Skills data
export const skillsData: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: "React.js", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "JavaScript", level: 5 },
    { name: "HTML/CSS", level: 5 },
    { name: "Tailwind CSS", level: 5 },
    { name: "Redux", level: 4 },
  ],
  backend: [
    { name: "Nest.js", level: 5 },
    { name: "Node.js", level: 5 },
    { name: "Express.js", level: 4 },
    { name: "GraphQL", level: 3 },
    { name: "RESTful APIs", level: 5 },
  ],
  database: [
    { name: "PostgreSQL", level: 4 },
    { name: "MongoDB", level: 3 },
    { name: "Prisma ORM", level: 4 },
    { name: "Sequelize ORM", level: 4 },
  ],
  /* devops: [ // Commented out DevOps section
    { name: "Git/GitHub", level: 4 },
    { name: "Docker", level: 3 },
    { name: "CI/CD", level: 3 },
  ], */
  tools: [
    { name: "VS Code", level: 5 },
    { name: "Figma", level: 3 },
    { name: "Postman", level: 4 },
    { name: "Stripe", level: 4 },
  ],
  mobile: [
    { name: "React Native", level: 4 },
    { name: "Expo", level: 3 },
  ],
  automation: [
    { name: "n8n", level: 4 },
    { name: "Workflow Automation", level: 4 },
    { name: "AI Agents", level: 3 },
  ],
};

// Simplified skills for homepage
export const topSkills: Skill[] = [
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Nest.js", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "n8n", category: "automation" },
  { name: "Workflow Automation", category: "automation" },
  { name: "React Native", category: "mobile" },
];
