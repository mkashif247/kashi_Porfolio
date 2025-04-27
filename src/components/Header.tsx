"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ThemeToggle';
// import { Button } from '@/components/ui/button'; // Assuming Shadcn Button is installed

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLinks = [
        { href: '/', label: 'HOME' },
        { href: '/resume', label: 'RESUME' },
        { href: '/professional-experience', label: 'PROFESSIONAL EXPERIENCE' },
        { href: '/projects', label: 'PROJECTS' },
        { href: '/contact', label: 'CONTACT ME' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-mono text-lg font-bold tracking-tight text-white">
                        Muhammad Kashif
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-4 lg:space-x-8 text-sm font-medium md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-white text-neutral-400 tracking-wide whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Navigation Toggle */}
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <button
                        className="md:hidden text-white p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden py-4 px-4 bg-black/80 backdrop-blur-xl border-b border-neutral-800">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-white text-neutral-400 tracking-wide py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header; 