export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: 'FX Checker',
    description:
      'Modern currency exchange application featuring real-time conversion, market dashboard with historical charts, currency comparison tools, and persistent favorites. Built with Angular 19 and the latest Signals API.',
    technologies: ['Angular 19', 'TypeScript', 'RxJS', 'Signals', 'Chart.js', 'REST API'],
    github: 'https://github.com/santanagabi/fx-checker',
    gradient: 'from-violet-800 via-indigo-900 to-navy-900',
  },
  {
    title: 'Pokédex Search',
    description:
      'Pokémon search engine with advanced filters, smart pagination, and sorting — pulling data from the PokéAPI. Includes detailed Pokémon profile pages with stats, types, and evolution chains.',
    technologies: ['Vue.js', 'Vuex', 'Nuxt.js', 'REST API'],
    github: 'https://github.com/santanagabi/pokedex-search',
    gradient: 'from-red-900 via-orange-900 to-navy-900',
  },
  {
    title: 'Aesthetic Clinic Manager',
    description:
      'Full-featured clinic management system covering patient records, stock control, appointment scheduling, and administrative reports — developed as a capstone project during graduation.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Prisma'],
    github: 'https://github.com/santanagabi/pmv-ads-2024-2-e5-proj-clinica-estetica',
    gradient: 'from-teal-900 via-emerald-900 to-navy-900',
  },
];
