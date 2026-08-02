export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  yearLabel?: string;
  current?: boolean;
  impact?: string;
  highlights: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  gradient: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: 'completed' | 'in_progress';
}

export interface Certification {
  name: string;
  issuer: string;
  icon: string;
}
