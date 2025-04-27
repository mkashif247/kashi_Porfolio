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
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Project } from '@/types';
import { allProjects } from '@/constants';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 50, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 sm:mb-12 md:mb-16 last:mb-0 group"
        >
            <Card className="overflow-hidden border-0 shadow-lg bg-transparent">
                <div className="flex flex-col lg:flex-row">
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-auto lg:w-2/5 overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none bg-muted/10">
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300">{index + 1}</div>
                        </div>
                    </div>

                    <div className="lg:w-3/5 bg-card rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none border-2 border-border p-2">
                        <CardHeader className="px-3 sm:px-4 py-3 sm:py-4">
                            <CardTitle className="text-xl sm:text-2xl md:text-3xl">{project.title}</CardTitle>
                            <CardDescription className="text-sm sm:text-base md:text-lg mt-2 line-clamp-3">{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="px-3 sm:px-4 py-0">
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                                {project.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-wrap gap-3 sm:gap-4 border-t pt-3 sm:pt-4 px-3 sm:px-4">
                            {project.links.live && (
                                <Link href={project.links.live} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover/link:-translate-y-full transition-transform duration-300">Live Demo</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300">Visit Site</span>
                                    </span>
                                </Link>
                            )}
                            {project.links.chrome && (
                                <Link href={project.links.chrome} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover/link:-translate-y-full transition-transform duration-300">Chrome</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300">Get Extension</span>
                                    </span>
                                </Link>
                            )}
                            {project.links.playStore && (
                                <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover/link:-translate-y-full transition-transform duration-300">Google Play</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300">Download</span>
                                    </span>
                                </Link>
                            )}
                            {project.links.github && (
                                <Link href={project.links.github} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:rotate-12 transition-transform" />
                                    <span className="relative overflow-hidden">
                                        <span className="inline-block group-hover/link:-translate-y-full transition-transform duration-300">GitHub</span>
                                        <span className="absolute top-0 left-0 inline-block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300">View Code</span>
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

    const scaleX = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

    return (
        <div className="relative min-h-screen py-10 sm:py-16 md:py-24 bg-gradient-to-b from-background to-background/80" ref={containerRef}>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
                style={{ scaleX }}
            />

            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="container relative z-10 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mx-auto flex max-w-6xl flex-col items-center space-y-6 sm:space-y-8 md:space-y-12 mb-8 sm:mb-12 md:mb-16">
                    <motion.div
                        className="text-center space-y-3 sm:space-y-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Featured Projects
                        </h2>
                        <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
                            Showcasing my work in web and mobile development, from SaaS platforms to AI-powered tools.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto max-w-5xl">
                    {allProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsPage;
