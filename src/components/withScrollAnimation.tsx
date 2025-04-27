"use client";

import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { usePathname } from "next/navigation";

interface WithScrollAnimationProps {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-in" | "slide-in";
    delay?: number;
    threshold?: number;
    className?: string;
}

export default function withScrollAnimation<P extends object>(
    Component: React.ComponentType<P>
) {
    return function WithScrollAnimationWrapper(props: P & WithScrollAnimationProps) {
        const {
            animation = "fade-up",
            delay = 0,
            threshold = 0.1,
            className,
            ...componentProps
        } = props;

        const pathname = usePathname();
        // Disable animations for resume and contact pages
        const disableAnimation = pathname === "/resume" || pathname === "/contact";

        return (
            <AnimateOnScroll
                animation={animation}
                delay={delay}
                threshold={threshold}
                disabled={disableAnimation}
                className={className}
            >
                <Component {...componentProps as P} />
            </AnimateOnScroll>
        );
    };
} 