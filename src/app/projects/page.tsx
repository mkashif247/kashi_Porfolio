"use client";

import React, { useRef } from 'react';
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
import { ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Project } from '@/types';
import { projectsData } from '@/constants';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.3 });

    // Different animations based on even/odd index
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 last:mb-0"
        >
            <Card className="overflow-hidden border-0 shadow-lg bg-transparent">
                <div className="flex flex-col lg:flex-row">
                    {/* Image/Gradient Section */}
                    <div className="relative h-64 lg:h-auto lg:w-2/5 overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10" />
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-primary/10 to-secondary/10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-6xl font-bold text-white/10">{index + 1}</div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 bg-card rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none border-2 border-border">
                        <CardHeader>
                            <CardTitle className="text-3xl">{project.title}</CardTitle>
                            <CardDescription className="text-lg mt-2">{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex gap-4 border-t pt-4">
                            {project.liveUrl && (
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                                    <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Live Demo</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Visit Site</span>
                                    </span>
                                </Link>
                            )}
                            {project.chromeUrl && (
                                <Link href={project.chromeUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                                    <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Chrome Extension</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Get Extension</span>
                                    </span>
                                </Link>
                            )}
                            {project.playStoreUrl && (
                                <Link href={project.playStoreUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                                    <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Google Play</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Download App</span>
                                    </span>
                                </Link>
                            )}
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

const ProjectsPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Create progress indicator animation
    const scaleX = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

    return (
        <div className="relative min-h-screen py-16 md:py-24 bg-gradient-to-b from-background to-background/80" ref={containerRef}>
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
                style={{ scaleX }}
            />

            {/* Animated background elements */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="container relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 mb-16">
                    <motion.div
                        className="text-center space-y-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-heading text-4xl leading-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Featured Projects
                        </h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground">
                            Showcasing my work in web and mobile development, from SaaS platforms to AI-powered tools.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto max-w-5xl">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsPage;
