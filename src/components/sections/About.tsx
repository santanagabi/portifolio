import { personal } from '../../data/personal';

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile section header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/90 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">About</h2>
      </div>

      <div className="flex flex-col gap-5 text-slate-400 text-base leading-relaxed">
        {personal.about.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
