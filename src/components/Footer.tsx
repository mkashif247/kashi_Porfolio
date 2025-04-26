import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-neutral-800 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 px-4 md:h-24 md:flex-row md:py-0">
                <div className="flex items-center justify-center md:justify-start">
                    <p className="text-sm text-neutral-400">
                        © {new Date().getFullYear()} Muhammad Kashif — All Rights Reserved.
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white">
                        Privacy
                    </Link>
                    <Link href="/terms" className="text-sm text-neutral-400 hover:text-white">
                        Terms
                    </Link>
                    <Link href="https://github.com/mkashif247" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/muhammadkashif70/" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 