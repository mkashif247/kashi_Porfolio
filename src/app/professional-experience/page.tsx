"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import './page.css';

const ProfessionalExperiencePage = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    // Experience data
    const experiences = [
        {
            title: "Full-Stack JavaScript Developer",
            company: "Phaedra Solutions",
            location: "Lahore, Pakistan",
            period: "Mar 2024 - Present",
            description: [
                "Architected and developed full-stack applications using Next.js, React.js, Nest.js, PostgreSQL, and ORMs (Prisma, Sequelize)",
                "Engineered RESTful APIs with optimized data flow patterns and comprehensive documentation",
                "Built responsive, mobile-first UIs implementing modern design practices and state management",
                "Contributed to React Native mobile applications with cross-platform functionality"
            ],
            technologies: ["Next.js", "React.js", "Nest.js", "TypeScript", "PostgreSQL", "Prisma", "React Native"]
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
                "Collaborated with design teams to implement pixel-perfect UI components"
            ],
            technologies: ["Next.js", "TypeScript", "Redux", "API Integration", "E-commerce"]
        }
    ];

    // Projects data for professional experience page
    const projects = [
        {
            id: 1,
            title: "Restat - Business Development SaaS",
            description: "Enterprise SaaS platform serving 90+ companies with integrated services (Stripe, Brevo) and performance optimizations that reduced API response time by 150ms.",
            technologies: ["Nest.js", "PostgreSQL", "React.js", "Vue.js", "Stripe"],
            image: "https://app.restat.io/static/media/logo.1a0c1d1d21b36e2579a432739ef98953.svg",
            links: {
                live: "https://app.restat.io",
                chrome: "https://chromewebstore.google.com/detail/restat/piboogehnifdnfbniihlngohmpopdamo?hl=en"
            }
        },
        {
            id: 2,
            title: "MegaTourn - Sports Tournament Platform",
            description: "Comprehensive tournament management platform with payment processing, automated communications, and performance-optimized interfaces.",
            technologies: ["Nest.js", "PostgreSQL", "React.js", "Stripe", "Brevo"],
            image: "https://app.megatourn.com/assets/logo-full-white-e72aOfNi.svg",
            links: {
                live: "https://app.megatourn.com"
            }
        },
        {
            id: 3,
            title: "CC Build - Mobile Application",
            description: "Mobile app with real-time data synchronization and offline capabilities, built using React Native CLI and Firebase.",
            technologies: ["React Native", "Firebase", "PostgreSQL", "Nest.js"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I8ojSr2o6R1MQfFqwizGJh_V0W6kZqxs8Q&s",
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.mobilecarboncopy&hl=en"
            }
        },
        {
            id: 4,
            title: "N8N Blog & LinkedIn Automation",
            description: "Advanced automation system that transformed content creation process, reducing publishing time from 30 days to 3 minutes.",
            technologies: ["N8N", "OpenAI", "React.js", "Automation"],
            image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
            links: {}
        }
    ];

    return (
        <div className="min-h-screen py-12 code-bg">
            {/* Animated tech bubbles */}
            <div className="tech-bubble"></div>
            <div className="tech-bubble"></div>
            <div className="tech-bubble"></div>
            <div className="tech-bubble"></div>

            {/* Animated background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page header with animated text */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Professional Experience
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        My career journey building web and mobile applications, with a focus on scalable solutions and performance optimization.
                    </p>
                </motion.div>

                {/* Work Experience Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-20"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold mb-8 inline-block border-b-2 border-primary/50 pb-2"
                    >
                        Work Experience
                    </motion.h2>

                    <div className="space-y-12">
                        {experiences.map((job, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative pl-8 border-l border-neutral-800"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary" />

                                <div className="glass-panel p-6 rounded-lg">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">{job.title}</h3>
                                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                                                <Briefcase className="h-4 w-4" />
                                                <span>{job.company}</span>
                                                <span className="mx-2">•</span>
                                                <MapPin className="h-4 w-4" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 md:mt-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                            <Calendar className="h-4 w-4" />
                                            <span>{job.period}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {job.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-300">
                                                <span className="text-primary mt-1.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {job.technologies.map((tech, i) => (
                                            <Badge key={i} variant="secondary" className="tech-badge bg-background/60">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-20"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold mb-8 inline-block border-b-2 border-primary/50 pb-2"
                    >
                        Key Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="glass-panel rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                    {project.image && (
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <p className="text-gray-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="tech-badge text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {project.links.live && (
                                            <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="text-xs">
                                                    Live Demo <ExternalLink className="ml-1 h-3 w-3" />
                                                </Button>
                                            </Link>
                                        )}
                                        {project.links.chrome && (
                                            <Link href={project.links.chrome} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="text-xs">
                                                    Chrome Extension <ExternalLink className="ml-1 h-3 w-3" />
                                                </Button>
                                            </Link>
                                        )}
                                        {project.links.playStore && (
                                            <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="text-xs">
                                                    Google Play <ExternalLink className="ml-1 h-3 w-3" />
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <p className="text-gray-400 mb-4">Want to know more about my professional background?</p>
                    <Link href="/resume">
                        <Button variant="default" size="lg" className="bg-primary hover:bg-primary/80">
                            View My Full Resume
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Tech pattern floating decorations */}
            <div className="fixed top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl z-0"></div>
            <div className="fixed bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl z-0"></div>

            <style jsx>{`
        .glass-panel {
          background: rgba(15, 15, 15, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .glass-panel:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
        </div>
    );
};

export default ProfessionalExperiencePage; 