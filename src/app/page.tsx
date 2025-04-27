// import Image from "next/image";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import { Suspense } from "react";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper"; // Import directly
// import Contact from "./sections/Contact"; // Removed

// Dynamically import the AnimatedPageWrapper to prevent "use client" in page component
// const AnimatedPageWrapper = dynamic(() => import("@/components/AnimatedPageWrapper"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Suspense fallback={<Hero />}>
        {/* Wrap Hero directly as AnimatedPageWrapper is now imported statically */}
        <AnimatedPageWrapper>
          <Hero />
        </AnimatedPageWrapper>
      </Suspense>
      {/* Apply wrapper to the container of other sections */}
      <AnimatedPageWrapper>
        <div className="container mx-auto px-4">
          <About />
          <Skills />
          <Experience />
          <Projects />
          {/* Contact section is now a separate page */}
        </div>
      </AnimatedPageWrapper>
    </div>
  );
}
