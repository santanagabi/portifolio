import { educationList } from '../../data/education';

export function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      {/* Mobile section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/90 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">Education</h2>
      </div>

      <ol className="group/list flex flex-col gap-1">
        {educationList.map((edu) => (
          <li key={edu.degree} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-200 lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/40" />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:col-span-2">
                {edu.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="text-base font-medium text-slate-200 mb-1 leading-snug">{edu.degree}</h3>
                <p className="text-sm text-slate-500">{edu.institution}</p>
                {edu.status === 'in_progress' && (
                  <span className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium">
                    In Progress
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
