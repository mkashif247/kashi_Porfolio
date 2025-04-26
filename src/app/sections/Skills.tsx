"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge"
import { skillsData, SkillCategory } from '@/constants';

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
            <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
                <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Technical Skills
                </h2>
                <div className="w-full space-y-4">
                    {Object.entries(categories).map(([displayName, categoryKey]) => (
                        <div key={categoryKey} className="rounded-lg border p-4">
                            <h3 className="mb-2 text-lg font-semibold">{displayName}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillsData[categoryKey].map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 