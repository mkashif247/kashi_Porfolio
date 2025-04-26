"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { featuredProjects } from '@/constants';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-[700px]">
                        Some of my recent work building web and mobile applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full rounded-lg border-2 border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button asChild variant="default">
                        <Link href="/projects" className="group">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects; 