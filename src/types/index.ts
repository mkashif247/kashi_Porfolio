// Project Types
export interface Project {
  id: number;
  slug: string;
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
  isFeatured?: boolean;
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

// Skills Types
export interface Skill {
  name: string;
  level?: number; // Optional level (1-5 or percentage)
  category?: string;
}
