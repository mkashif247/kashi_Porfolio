"use client";

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { experienceData } from '@/constants';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="container py-12 md:py-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8">
                <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Work Experience
                </h2>
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 w-full">
                    {experienceData.map((job, index) => (
                        <Card key={index} className="w-full">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle>{job.title}</CardTitle>
                                        <CardDescription>{job.company} - {job.location}</CardDescription>
                                    </div>
                                    <span className="text-sm text-muted-foreground">{job.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                    {job.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 