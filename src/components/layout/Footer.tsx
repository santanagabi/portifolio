import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personal } from '../../data/personal';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Gabrielle Santana — Built with React & Framer Motion
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
