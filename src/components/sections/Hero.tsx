import { motion } from 'framer-motion';
import { Mail, ArrowDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Button } from '../ui/Button';
import { personal } from '../../data/personal';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-800/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-neutral-600 text-sm mb-12 tracking-wide"
        >
          <span className="text-neutral-700">—</span>
          <span>São Paulo, Brazil</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight mb-6"
        >
          <span className="gradient-text">Gabrielle</span>
          <br />
          <span className="text-neutral-50">Santana</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-violet-400 font-medium text-xl tracking-widest uppercase mb-8"
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-neutral-500 text-lg leading-relaxed max-w-lg mx-auto mb-14"
        >
          4+ years building scalable web applications —
          Vue.js, React, TypeScript, and an AI-first development workflow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button id="hero-contact-btn" variant="primary" href="#contact">
            <Mail size={16} />
            Get in touch
          </Button>
          <Button id="hero-linkedin-btn" variant="secondary" href={personal.linkedin} external>
            <LinkedinIcon size={16} />
            LinkedIn
          </Button>
          <Button id="hero-github-btn" variant="ghost" href={personal.github} external>
            <GithubIcon size={16} />
            GitHub
          </Button>
          <Button id="hero-resume-btn" variant="ghost" href={personal.linkedin} external>
            <Download size={16} />
            Resume
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-700"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
