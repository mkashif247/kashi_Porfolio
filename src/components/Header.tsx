import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ThemeToggle';
// import { Button } from '@/components/ui/button'; // Assuming Shadcn Button is installed

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        {/* Add Logo or Name here */}
                        <span className="hidden font-bold sm:inline-block">
                            Muhammad Kashif
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/projects"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/resume"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Resume
                        </Link>
                    </nav>
                </div>
                {/* Add Mobile Menu Button if needed */}
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        {/* Add other buttons like GitHub link here */}
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header; 