import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by Muhammad Kashif. © {new Date().getFullYear()}.
                </p>
                {/* Add social links here if desired */}
            </div>
        </footer>
    );
};

export default Footer; 