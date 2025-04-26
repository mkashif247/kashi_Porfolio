import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ThemeToggle';
// import { Button } from '@/components/ui/button'; // Assuming Shadcn Button is installed

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-mono text-lg font-bold tracking-tight text-white">
                        Muhammad Kashif
                    </span>
                </Link>
                <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
                    <Link
                        href="/"
                        className="transition-colors hover:text-white text-neutral-400 tracking-wide"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/resume"
                        className="transition-colors hover:text-white text-neutral-400 tracking-wide"
                    >
                        PROFESSIONAL EXPERIENCE
                    </Link>
                    <Link
                        href="/projects"
                        className="transition-colors hover:text-white text-neutral-400 tracking-wide"
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href="/blog"
                        className="transition-colors hover:text-white text-neutral-400 tracking-wide"
                    >
                        BLOG
                    </Link>
                    <Link
                        href="/contact"
                        className="transition-colors hover:text-white text-neutral-400 tracking-wide"
                    >
                        CONTACT ME
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header; 