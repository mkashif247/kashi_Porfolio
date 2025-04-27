"use client";

import React from 'react';
// import Image from 'next/image'; // Removed unused import
import Link from 'next/link';
// import { ExternalLink } from 'lucide-react'; // Removed unused import
import { Calendar, MapPin, Briefcase } from 'lucide-react'; // Kept used icons
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import './page.css';
import { experienceData, allProjects } from '@/constants';
import { Experience, Project } from '@/types';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ExperienceProjectCard from '@/components/ExperienceProjectCard';

const ProfessionalExperiencePage = () => {

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
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Professional Experience
                        </h1>
                        <AnimateOnScroll animation="fade-in" delay={200}>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                My career journey building web and mobile applications, with a focus on scalable solutions and performance optimization.
                            </p>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                {/* Work Experience Section - Timeline */}
                <section className="mb-20">
                    <AnimateOnScroll animation="fade-up">
                        <h2 className="text-3xl font-bold mb-12 text-center md:text-left md:pl-4">
                            Work Experience
                        </h2>
                    </AnimateOnScroll>

                    {/* Timeline Container */}
                    <div className="relative w-full max-w-7xl mx-auto pl-10 pr-4 md:pl-0 md:pr-0">
                        {/* Vertical line */}
                        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-700 md:left-1/2 md:-translate-x-1/2"></div>

                        {/* Timeline Items */}
                        <div className="space-y-16 relative">
                            {experienceData.map((job: Experience, index: number) => {
                                // Determine conditional hover shadow class
                                let hoverShadowClass = 'hover:shadow-xl hover:shadow-neutral-600/30'; // Default large shadow
                                if (job.company === 'Phaedra Solutions') {
                                    hoverShadowClass = 'hover:shadow-xl hover:shadow-[#01e3c9]/40'; // Phaedra color
                                } else if (job.company.includes('Voltonic Solution')) {
                                    hoverShadowClass = 'hover:shadow-xl hover:shadow-[#6495ED]/40'; // Voltonic color
                                }

                                return (
                                    <AnimateOnScroll
                                        key={index}
                                        animation="fade-up"
                                        delay={index * 150}
                                        className="relative md:w-1/2 md:odd:pr-8 md:even:pl-8 md:odd:ml-auto group" // Added group class
                                    >
                                        {/* Dot on the timeline */}
                                        <div className="absolute left-4 top-2 -translate-x-1/2 transform md:left-auto md:right-auto md:translate-x-0 
                                                        md:odd:left-auto md:odd:right-[calc(50%+0.5rem)] 
                                                        md:even:right-auto md:even:left-[calc(50%+0.5rem)] 
                                                        md:odd:-mr-[1px] md:group-even:-ml-[1px] md:top-1/2 md:-translate-y-1/2
                                                        hidden md:block"> {/* Hide dot on small screens where card alignment shifts */}
                                            <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10 relative"></div>
                                        </div>
                                        {/* Small screen dot */}
                                        <div className="absolute left-4 top-2 -translate-x-1/2 transform md:hidden">
                                            <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10 relative"></div>
                                        </div>

                                        {/* Content Card - Apply dynamic hover shadow */}
                                        <div className={`glass-panel p-6 rounded-lg shadow-lg ${hoverShadowClass} transition-shadow duration-300 ml-4 md:ml-0 relative`}>
                                            {/* Period Badge - Positioned top-right */}
                                            <AnimateOnScroll animation="fade-in" delay={100} threshold={0.05}>
                                                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{job.period}</span>
                                                </div>
                                            </AnimateOnScroll>

                                            {/* Job Title and Company */}
                                            <AnimateOnScroll animation="fade-in" delay={50} threshold={0.05}>
                                                <h3 className="text-xl font-bold mb-1 pr-24">{job.title}</h3> {/* Added padding-right */}
                                                <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-400 mb-4">
                                                    <Briefcase className="h-4 w-4 inline-block" />
                                                    <span>{job.company}</span>
                                                    <span className="hidden sm:inline-block">•</span>
                                                    <MapPin className="h-4 w-4 inline-block" />
                                                    <span>{job.location}</span>
                                                </div>
                                            </AnimateOnScroll>

                                            {/* Description List */}
                                            <ul className="space-y-2 mb-4">
                                                {job.description.map((item: string, i: number) => (
                                                    <AnimateOnScroll key={i} animation="fade-in" delay={150 + i * 40} threshold={0.05}>
                                                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                                                            <span className="text-primary mt-1 shrink-0">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    </AnimateOnScroll>
                                                ))}
                                            </ul>

                                            {/* Technologies Badges */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {job.technologies.map((tech: string, i: number) => (
                                                    <AnimateOnScroll key={i} animation="fade-in" delay={200 + i * 30} threshold={0.05}>
                                                        <Badge variant="secondary" className="tech-badge bg-background/60 text-xs">
                                                            {tech}
                                                        </Badge>
                                                    </AnimateOnScroll>
                                                ))}
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Projects Section - Enhanced */}
                <section className="mb-20">
                    <AnimateOnScroll animation="fade-up">
                        {/* Centered Title */}
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            Key Projects
                        </h2>
                    </AnimateOnScroll>

                    {/* Single Column Layout - Centered */}
                    <div className="flex flex-col items-center gap-12">
                        {allProjects.map((project: Project, index: number) => (
                            <ExperienceProjectCard
                                key={project.id}
                                project={project}
                                animationDelay={index * 150}
                            />
                        ))}
                    </div>
                </section>

                {/* Call to action */}
                <AnimateOnScroll animation="fade-up" delay={300}>
                    <div className="text-center mt-16">
                        <p className="text-gray-400 mb-4">Want to know more about my professional background?</p>
                        <Link href="/resume">
                            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/80">
                                View My Full Resume
                            </Button>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default ProfessionalExperiencePage; 