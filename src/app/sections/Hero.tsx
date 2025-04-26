"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/constants';

const Hero: React.FC = () => {
    return (
        <motion.section
            className="relative min-h-[calc(100vh-var(--header-height))] w-full overflow-hidden bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background tech pattern positioned to the right */}
            <div className="absolute right-0 top-0 h-full w-1/2 z-0 opacity-70">
                <Image
                    src={personalInfo.heroImage}
                    alt="Technology Pattern"
                    fill
                    className="object-cover object-left"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 flex flex-col justify-center h-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1 className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-extrabold leading-none tracking-tighter text-white">
                            FULL-STACK
                            <br />
                            <span className="text-neutral-600">DEVELOPER</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className="mt-8 border-t border-neutral-800 pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="flex flex-col space-y-6">
                            <p className="text-lg text-neutral-400">
                                {personalInfo.name} / {personalInfo.title}
                            </p>
                            <div className="border-b border-neutral-800 pb-6">
                                <p className="text-xl font-light text-neutral-400">
                                    {personalInfo.subtitle}
                                </p>
                            </div>
                            <p className="max-w-2xl text-lg text-neutral-400">
                                {personalInfo.description}
                            </p>
                            <div className="pt-4">
                                <Link href="#projects">
                                    <Button variant="outline" size="lg" className="border-neutral-700 bg-transparent text-white hover:bg-neutral-900">
                                        EXPLORE MY WORK <span className="ml-2">↓</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero; 