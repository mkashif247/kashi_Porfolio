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
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="container py-12 md:py-24">
            <AnimateOnScroll animation="fade-up">
                <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8">
                    <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Work Experience
                    </h2>
                    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 w-full">
                        {experienceData.map((job, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                                <Card className="w-full">
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
                                                <AnimateOnScroll key={i} animation="fade-in" delay={100 + i * 75} threshold={0.05}>
                                                    <li>{point}</li>
                                                </AnimateOnScroll>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default Experience; 