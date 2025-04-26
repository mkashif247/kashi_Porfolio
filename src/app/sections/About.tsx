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
                    I am a Full-Stack JavaScript Developer with almost 2 years of experience building scalable web and mobile applications using Next.js, React.js, Nest.js, and React Native. My expertise spans developing responsive UIs, RESTful APIs, and integrating third-party services like Stripe and Firebase. I&apos;m passionate about optimizing performance and creating user-centric solutions that drive business growth. As a Computer Science graduate from COMSATS University, I combine technical knowledge with practical skills to deliver high-quality applications.
                </p>
            </div>
        </section>
    );
};

export default About; 