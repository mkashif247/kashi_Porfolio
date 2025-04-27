"use client";

import React from 'react';
import { aboutText } from '@/constants';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="container py-12 md:py-24">
            <AnimateOnScroll animation="fade-up">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        About Me
                    </h2>

                    <motion.div
                        className="my-6 relative w-48 h-48"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/kakashi.png"
                            alt="Kakashi"
                            width={200}
                            height={200}
                            className="rounded-full object-cover border-4 border-primary/20"
                        />
                    </motion.div>

                    <AnimateOnScroll animation="fade-in" delay={200}>
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            {aboutText}
                        </p>
                    </AnimateOnScroll>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default About; 