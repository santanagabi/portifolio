import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { certifications } from '../../data/certifications';
import { BadgeCheck } from 'lucide-react';

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader label="Certifications" title="Credentials & learning" />

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl px-7 py-6 flex items-center gap-6 hover:border-neutral-600/45 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20 transition-all duration-200 group"
          >
            <div className="w-14 h-14 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-2xl shrink-0 group-hover:border-violet-500/25 transition-colors duration-200">
              {cert.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-2">
                <h3 className="text-neutral-200 font-medium text-sm leading-snug">{cert.name}</h3>
                <BadgeCheck size={14} className="text-violet-400 shrink-0 mt-0.5" />
              </div>
              <p className="text-neutral-600 text-xs">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
