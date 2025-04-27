"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge"
import { skillsData, SkillCategory } from '@/constants';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Skills: React.FC = () => {
    // Get category names with proper capitalization
    const categories: Record<string, SkillCategory> = {
        'Frontend': 'frontend',
        'Backend': 'backend',
        'Database': 'database',
        'Mobile': 'mobile',
        'DevOps': 'devops',
        'Tools': 'tools'
    };

    return (
        <section id="skills" className="container py-12 md:py-24">
            <AnimateOnScroll animation="fade-up">
                <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
                    <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Technical Skills
                    </h2>
                    <div className="w-full space-y-4">
                        {Object.entries(categories).map(([displayName, categoryKey], index) => (
                            <AnimateOnScroll
                                key={categoryKey}
                                animation="fade-up"
                                delay={index * 100}
                            >
                                <div className="rounded-lg border p-4">
                                    <h3 className="mb-2 text-lg font-semibold">{displayName}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData[categoryKey].map((skill, skillIndex) => (
                                            <AnimateOnScroll
                                                key={skill.name}
                                                animation="fade-in"
                                                delay={100 + skillIndex * 50}
                                                threshold={0.05}
                                            >
                                                <Badge variant="secondary">
                                                    {skill.name}
                                                </Badge>
                                            </AnimateOnScroll>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default Skills; 