import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      /* Each section gets generous vertical breathing room */
      className={`py-40 ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    /* mb-28 = wide gap between header and content */
    <div className="mb-28">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-8 bg-violet-500/50 shrink-0" />
        <span className="text-xs font-semibold text-violet-400 tracking-[0.22em] uppercase whitespace-nowrap">
          {label}
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold text-neutral-50 tracking-tight leading-[1.1] mb-6">
        {title}
      </h2>

      {description && (
        <p className="text-neutral-500 text-base leading-[1.8] max-w-lg break-words">
          {description}
        </p>
      )}
    </div>
  );
}
