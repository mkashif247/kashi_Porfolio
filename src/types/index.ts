// Project Types
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  chromeUrl?: string;
  playStoreUrl?: string;
  imagePath?: string;
}

// Experience Types
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

// Detailed Project Type (used in professional-experience page)
export interface DetailedProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    live?: string;
    chrome?: string;
    playStore?: string;
    github?: string;
  };
}

// Skills Types
export interface Skill {
  name: string;
  level?: number; // Optional level (1-5 or percentage)
  category?: string;
}
