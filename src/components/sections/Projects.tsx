import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      {/* Mobile section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/90 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">Projects</h2>
      </div>

      <ul className="group/list flex flex-col gap-1">
        {projects.map((project) => (
          <li key={project.title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

              {/* Hover background */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-200 lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.07)]" />

              {/* Gradient thumbnail */}
              <div className={`z-10 sm:order-1 sm:col-span-2 sm:translate-y-1 aspect-video rounded-lg bg-gradient-to-br ${project.gradient} border-2 border-slate-200/8 transition-all duration-200 group-hover:border-slate-200/25 flex items-center justify-center overflow-hidden`}>
                <div className="text-slate-600 text-xs font-medium text-center px-2 leading-tight opacity-40 select-none">
                  {project.title}
                </div>
              </div>

              {/* Content */}
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline gap-1 text-base hover:text-violet-300 transition-colors duration-150"
                    >
                      {project.title}
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 translate-y-px transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <span className="text-base">{project.title}</span>
                  )}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150"
                  >
                    <GithubIcon size={13} />
                    <span>View on GitHub</span>
                  </a>
                )}

                {/* Tech badges */}
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project.technologies.map(tech => (
                    <li key={tech}>
                      <div className="tech-badge">{tech}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
