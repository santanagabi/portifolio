import { Sidebar } from './components/layout/Sidebar';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { personal } from './data/personal';

function Footer() {
  return (
    <footer className="pb-16 text-slate-600 text-xs leading-relaxed max-w-md">
      <p>
        Design inspired by{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-500 hover:text-slate-300 transition-colors"
        >
          Brittany Chiang
        </a>
        . Built with React, TypeScript &amp; Vite.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="noise" />

      {/* Two-column layout */}
      <div className="mx-auto min-h-screen max-w-screen-xl lg:flex">

        {/* LEFT — sticky sidebar */}
        <Sidebar />

        {/* RIGHT — scrollable content */}
        <main
          id="content"
          className="pt-16 pb-24 px-6 lg:w-[52%] lg:py-24 lg:px-16"
        >
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}
