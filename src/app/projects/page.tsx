"use client";

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';
import { ExternalLink } from 'lucide-react'; // For external links
import { motion } from 'framer-motion'; // Added for animation consistency

const projectsData = [
    {
        title: "Restat",
        description: "Built a SaaS platform with Nest.js, PostgreSQL, React.js, and Vue.js (Chrome extension), serving 90+ companies. Integrated Stripe, Brevo, cron jobs, ClickUp, HubSpot, Upwork. Optimized performance by 25% (150ms API reduction). Built super admin panel.",
        tags: ["SaaS", "Nest.js", "PostgreSQL", "React.js", "Vue.js", "Stripe", "Integrations"],
        liveUrl: "https://app.restat.io",
        chromeUrl: "https://chromewebstore.google.com/detail/restat/piboogehnifdnfbniihlngohmpopdamo?hl=en",
    },
    {
        title: "MegaTourn",
        description: "Developed a sports tournament platform with Nest.js, PostgreSQL, and React.js. Integrated Stripe, Brevo, and cron jobs. Reduced load times by 20% with efficient coding practices. Built super admin panel and added social media integration.",
        tags: ["Nest.js", "PostgreSQL", "React.js", "Stripe", "Sports"],
        liveUrl: "https://app.megatourn.com",
    },
    {
        title: "CC Build",
        description: "Built a React Native CLI mobile app with PostgreSQL, Firebase, and Nest.js backend for real-time data synchronization.",
        tags: ["React Native", "Mobile App", "PostgreSQL", "Firebase", "Nest.js"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.mobilecarboncopy&hl=en",
    },
    {
        title: "N8N Blog & LinkedIn Automation",
        description: "AI agent which Automated blog and LinkedIn content creation using OpenAI LLM, N8N and React for SEO-optimized text and images. Built a responsive React.js frontend, enhancing content management efficiency. Reduced publishing time from 30 days to 3 minutes, boosting SEO and engagement.",
        tags: ["AI", "Automation", "N8N", "OpenAI", "React.js", "SEO"],
    },
];

// Renamed component to ProjectsPage for clarity
const ProjectsPage: React.FC = () => {
    return (
        // Removed id="projects", using motion.div for animation
        <motion.div
            className="container py-12 md:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center space-y-8">
                <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Featured Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 w-full">
                    {projectsData.map((project, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-4">
                                {project.liveUrl && (
                                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-500 hover:underline">
                                        Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                )}
                                {project.chromeUrl && (
                                    <Link href={project.chromeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-500 hover:underline">
                                        Chrome Extension <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                )}
                                {project.playStoreUrl && (
                                    <Link href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-500 hover:underline">
                                        Google Play <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                )}
                                {/* Add GitHub link if available */}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
