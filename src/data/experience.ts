import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    company: 'Mercado Eletrônico',
    companyUrl: 'https://www.mercadoeletronico.com.br',
    role: 'Frontend Developer',
    period: 'Feb 2023 – Present',
    yearLabel: '2023 — PRESENT',
    current: true,
    impact: 'Reduced page load from ~5 min to <1 sec',
    highlights: [
      'Built and maintained critical features for a B2B procurement platform using Vue.js, Nuxt.js and TypeScript',
      'Integrated multiple REST APIs and managed complex application state with Vuex across large-scale modules',
      'Achieved a major performance breakthrough — reduced page load times from approximately 5 minutes to under 1 second through targeted optimization',
      'Contributed across the full development lifecycle, from technical design to code review and production release',
      'Collaborated closely with UX and Product teams to deliver high-quality user experiences aligned with business goals',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'REST APIs', 'Jest'],
  },
  {
    company: 'Mercado Eletrônico',
    companyUrl: 'https://www.mercadoeletronico.com.br',
    role: 'Software Engineering Intern',
    period: 'Jun 2022 – Feb 2023',
    yearLabel: '2022 — 2023',
    highlights: [
      'Developed reusable UI components for the internal Design System using Vue.js, contributing to a shared component library adopted across multiple product teams',
      'Led the migration of Bootstrap-based components to the new Design System, improving maintainability and visual consistency across the platform',
      'Implemented automated tests and increased test coverage, ensuring component reliability across the codebase',
      'Worked alongside senior engineers from different squads, gaining exposure to enterprise-scale frontend architecture',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Bootstrap', 'Storybook', 'Cypress'],
  },
];
