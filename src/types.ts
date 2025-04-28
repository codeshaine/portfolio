export interface Project {
  projName: string;
  shortDesc: string;
  techTags: string[];
  liveLink?: string;
  gbLink?: string;
}

export interface ProfileProps {
  name: string;
  title: string;
  profileImage: string;
  social: {
    email?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    resume?: string;
    calendar?: string;
    blog?: string;
  };
}
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface TILCategory {
  date: string;
  learned: React.ReactNode[];
}

export interface TechStackItem {
  heading: string;
  skills: string[];
}

export interface TechStackProps {
  stack: TechStackItem[];
}
