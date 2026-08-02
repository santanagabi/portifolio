import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Developer Tools',
    icon: '🤖',
    skills: ['Cursor', 'Claude', 'GitHub Copilot', 'Generative AI', 'LLMs', 'Spec-Driven Dev'],
  },
  {
    name: 'Frontend',
    icon: '⚡',
    skills: ['React', 'Vue.js', 'Nuxt.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    name: 'Backend',
    icon: '🔧',
    skills: ['C#', '.NET', 'Node.js', 'PHP', 'Laravel', 'REST APIs', 'gRPC'],
  },
  {
    name: 'Database',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB', 'SQL'],
  },
  {
    name: 'Testing',
    icon: '🧪',
    skills: ['Jest', 'Cypress', 'Playwright'],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Docker', 'Jenkins', 'Git', 'CI/CD', 'SonarQube'],
  },
];
