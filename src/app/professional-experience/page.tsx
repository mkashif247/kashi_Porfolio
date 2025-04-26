"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import './page.css';
import { experienceData, detailedProjects } from '@/constants';
import { Experience, DetailedProject } from '@/types';

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
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page header with animated text */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        My Professional Journey
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary/80 via-white to-primary/80">
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
                        {experienceData.map((job: Experience, index: number) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative pl-8 border-l border-neutral-800"
                            >
                                <div className="absolute left-[-8px] top-0">
                                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                                    <div className="absolute inset-0 h-4 w-4 rounded-full bg-primary/50 animate-ping"></div>
                                </div>

                                <div className="glass-panel p-6 rounded-lg border border-neutral-800 hover:border-primary/30 transition-colors duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary/90">{job.title}</h3>
                                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                                                <Briefcase className="h-4 w-4" />
                                                <span>{job.company}</span>
                                                <span className="mx-2">•</span>
                                                <MapPin className="h-4 w-4" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 md:mt-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm backdrop-blur-sm">
                                            <Calendar className="h-4 w-4" />
                                            <span>{job.period}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {job.description.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-300">
                                                <ChevronRight className="h-4 w-4 text-primary mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {job.technologies.map((tech: string, i: number) => (
                                            <Badge key={i} variant="secondary" className="tech-badge bg-background/60 hover:bg-primary/20 transition-colors duration-200">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {detailedProjects.map((project: DetailedProject) => (
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

                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech: string, i: number) => (
                                        <Badge key={i} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.links.live && (
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                    {project.links.chrome && (
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={project.links.chrome} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Chrome Extension
                                            </Link>
                                        </Button>
                                    )}
                                    {project.links.playStore && (
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Google Play
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to action */}
                <motion.div
                    variants={itemVariants}
                    className="text-center"
                >
                    <div className="glass-panel rounded-lg p-8 border border-neutral-800">
                        <h3 className="text-2xl font-bold mb-2">Interested in working together?</h3>
                        <p className="text-gray-400 mb-6">Check out my full portfolio or reach out directly.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild>
                                <Link href="/projects">
                                    View All Projects
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/contact">
                                    Contact Me
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div >

            {/* Tech pattern floating decorations */}
            <div className="fixed top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl z-0" ></div >
            <div className="fixed bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl z-0"></div>
        </div >
    );
};

export default ProfessionalExperiencePage; 