"use client";

import React from 'react';
import { aboutText } from '@/constants';

const About: React.FC = () => {
    return (
        <section id="about" className="container py-12 md:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    About Me
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {aboutText}
                </p>
            </div>
        </section>
    );
};

export default About; 