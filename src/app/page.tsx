// import Image from "next/image";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
// import Projects from "./sections/Projects"; // Removed
// import Contact from "./sections/Contact"; // Removed

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* Projects and Contact sections are now separate pages */}
    </main>
  );
}
