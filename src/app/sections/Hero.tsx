"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <motion.section
            className="container grid items-center gap-6 pb-8 pt-6 md:py-10 min-h-[calc(100vh-var(--header-height))] relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                    Hi, I&apos;m Muhammad Kashif
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    A passionate Full-Stack JavaScript Developer specializing in building scalable web & mobile applications and AI solutions with Next.js, React, Nest.js, and React Native.
                </p>
            </div>
            <div className="flex gap-4">
                <Link href="#projects">
                    <Button variant="default" size="lg">
                        View Projects
                    </Button>
                </Link>
                <Link href="/resume">
                    <Button variant="outline" size="lg">
                        View Resume
                    </Button>
                </Link>
            </div>
            {/* Optional: Add a scroll down indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <Link href="#about">
                    <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
                </Link>
            </div>
        </motion.section>
    );
};

export default Hero; 