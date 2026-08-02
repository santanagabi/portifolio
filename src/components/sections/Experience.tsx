import { ArrowUpRight } from 'lucide-react';
import { experiences } from '../../data/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Mobile section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/90 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">Experience</h2>
      </div>

      <ol className="group/list flex flex-col gap-1">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.role}`} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

              {/* Hover background */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-200 lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.07)]" />

              {/* Year label */}
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:col-span-2">
                {exp.yearLabel ?? exp.period}
              </header>

              {/* Content */}
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline gap-1 text-base hover:text-violet-300 transition-colors duration-150"
                    >
                      {exp.role} · {exp.company}
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 translate-y-px transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <span className="text-base">{exp.role} · {exp.company}</span>
                  )}
                </h3>

                {/* Impact highlight */}
                {exp.impact && (
                  <p className="mb-3 text-xs font-semibold text-violet-400 uppercase tracking-widest">
                    ⚡ {exp.impact}
                  </p>
                )}

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {exp.highlights[0]}
                </p>

                {exp.highlights.length > 1 && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {exp.highlights.slice(1).map((h, j) => (
                      <li key={j} className="text-sm leading-relaxed text-slate-500 flex gap-2">
                        <span className="text-slate-700 shrink-0 mt-1 select-none">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech badges */}
                {exp.technologies && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {exp.technologies.map(tech => (
                      <li key={tech}>
                        <div className="tech-badge">{tech}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
