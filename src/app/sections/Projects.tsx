"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { allProjects } from '@/constants';
import { Project } from '@/types';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Projects: React.FC = () => {
    const featuredProjects = allProjects.filter(project => project.isFeatured);

    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto">
                <AnimateOnScroll animation="fade-up">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground max-w-[700px]">
                            Some of my recent work building web and mobile applications
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project: Project, index: number) => (
                        <AnimateOnScroll
                            key={project.id}
                            animation="fade-up"
                            delay={index * 150}
                            threshold={0.1}
                        >
                            <div className="group">
                                <div className="h-full rounded-lg border-2 border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll animation="fade-up" delay={300}>
                    <div className="flex justify-center mt-10">
                        <Button asChild variant="default">
                            <Link href="/projects" className="group">
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Projects; 