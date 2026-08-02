import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../../data/personal';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Mail } from 'lucide-react';

const navItems = [
  { id: 'about',         label: 'About' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'education',    label: 'Education' },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 px-6 pt-16 pb-10 lg:px-16"
    >
      {/* Top block */}
      <div>
        {/* Name + role */}
        <h1 className="text-4xl font-bold text-slate-100 tracking-tight mb-3">
          Gabrielle Santana
        </h1>
        <h2 className="text-lg font-medium text-slate-200 mb-4">
          Software Developer
        </h2>
        <p className="max-w-xs text-slate-400 leading-relaxed text-sm">
          I build fast, accessible, and well-crafted interfaces for the web — with an AI-first development mindset.
        </p>

        {/* Navigation */}
        <nav className="hidden lg:block mt-16">
          <ul className="flex flex-col gap-5">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom block — social icons */}
      <div className="flex items-center gap-5 mt-10 lg:mt-0">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-500 hover:text-slate-100 transition-colors duration-200"
        >
          <GithubIcon size={22} />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-500 hover:text-slate-100 transition-colors duration-200"
        >
          <LinkedinIcon size={22} />
        </a>
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email"
          className="text-slate-500 hover:text-slate-100 transition-colors duration-200"
        >
          <Mail size={22} />
        </a>
      </div>
    </motion.aside>
  );
}
