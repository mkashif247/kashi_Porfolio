"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Project } from '@/types';

interface ExperienceProjectCardProps {
    project: Project;
    animationDelay: number;
}

const ExperienceProjectCard: React.FC<ExperienceProjectCardProps> = ({ project, animationDelay }) => {
    return (
        <AnimateOnScroll
            animation="fade-up"
            delay={animationDelay}
            threshold={0.1} // Trigger animation sooner
            className="w-full max-w-3xl group"
        >
            {/* Enhanced Card */}
            <div className="glass-panel rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-1 group-hover:border group-hover:border-primary/30">
                {/* Image Container */}
                <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.image && (
                        <div className="relative h-full w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    )}
                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                        <AnimateOnScroll animation="fade-in" delay={50} threshold={0.05}>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight line-clamp-2">{project.title}</h3>
                        </AnimateOnScroll>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <AnimateOnScroll animation="fade-in" delay={100} threshold={0.05}>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">{project.description}</p>
                    </AnimateOnScroll>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech: string, i: number) => (
                            <AnimateOnScroll key={i} animation="fade-in" delay={150 + i * 30} threshold={0.05}>
                                <Badge variant="secondary" className="tech-badge bg-background/70 backdrop-blur-sm text-xs font-medium">
                                    {tech}
                                </Badge>
                            </AnimateOnScroll>
                        ))}
                    </div>

                    {/* Links/Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                        {Object.entries(project.links).map(([key, url], i) => {
                            if (!url) return null;
                            let text = key; // Default text
                            if (key === 'live') text = 'Live Demo';
                            if (key === 'chrome') text = 'Chrome Store';
                            if (key === 'playStore') text = 'Play Store';
                            if (key === 'github') text = 'GitHub Repo';

                            return (
                                <AnimateOnScroll key={key} animation="fade-in" delay={200 + i * 50} threshold={0.05}>
                                    <Link href={url} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm" className="text-xs bg-transparent hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200 group/link">
                                            {text}
                                            <ExternalLink className="ml-1.5 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                                        </Button>
                                    </Link>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default ExperienceProjectCard; 