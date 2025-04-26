"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge"

const skillsData = {
    Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Vue.js"],
    Backend: ["Nest.js", "Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL", "PostgreSQL"],
    Mobile: ["React Native"],
    Tools: ["Git", "GitHub", "Postman", "Swagger", "Docker", "Firebase", "N8N"],
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="container py-12 md:py-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
                <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Technical Skills
                </h2>
                <div className="w-full space-y-4">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="rounded-lg border p-4">
                            <h3 className="mb-2 text-lg font-semibold">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
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