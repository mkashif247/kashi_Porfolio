"use client";

import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="container py-12 md:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    About Me
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    I am a Full-Stack JavaScript Developer with over 1.5 years of hands-on experience crafting scalable web and mobile applications, alongside developing AI agents and automation workflows. My expertise lies in leveraging modern technologies like Next.js, React.js, Nest.js, React Native, and N8N to build robust, user-centric solutions. I&apos;m passionate about clean code, efficient architectures, and bringing ideas to life through technology.
                </p>
            </div>
        </section>
    );
};

export default About; 