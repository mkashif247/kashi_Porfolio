"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "slide-in";
    delay?: number;
    threshold?: number;
    disabled?: boolean;
}

export default function AnimateOnScroll({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    threshold = 0.1,
    disabled = false,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (disabled) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, disabled]);

    const animationClasses = {
        "fade-up": "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        "fade-in": "opacity-0 transition-opacity duration-700 ease-out",
        "slide-in": "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
    };

    const activeClass = isVisible
        ? "opacity-100 translate-y-0 translate-x-0"
        : "";

    return (
        <div
            ref={ref}
            className={cn(
                animationClasses[animation],
                activeClass,
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
} 