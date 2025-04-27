"use client";

import React from "react";
import { usePathname } from "next/navigation";
import AnimateOnScroll from "./AnimateOnScroll";

interface AnimatedPageWrapperProps {
    children: React.ReactNode;
}

export default function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
    const pathname = usePathname();

    // Disable animations for resume and contact pages
    const disableAnimation = pathname === "/resume" || pathname === "/contact";

    // If we're on an excluded page, just render the children without animation
    if (disableAnimation) {
        return <>{children}</>;
    }

    // Otherwise, let's wrap the children in our animation component
    return (
        <div className="animate-wrapper">
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return (
                        <AnimateOnScroll
                            key={index}
                            animation="fade-up"
                            delay={index * 150}
                            threshold={0.1}
                        >
                            {child}
                        </AnimateOnScroll>
                    );
                }
                return child;
            })}
        </div>
    );
} 