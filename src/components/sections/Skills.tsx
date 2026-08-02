import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { skillCategories } from '../../data/skills';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Skills"
        title="My technical toolkit"
        description="Technologies and tools I work with across the full development stack."
      />

      {/* AI featured card */}
      {skillCategories.slice(0, 1).map((category) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl px-8 py-9 mb-9 overflow-hidden border border-violet-500/25 bg-gradient-to-br from-violet-950/35 via-neutral-900/50 to-neutral-900/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/6 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">{category.icon}</span>
              <div>
                <p className="text-[11px] text-violet-400 font-semibold uppercase tracking-[0.22em] mb-1">Featured</p>
                <h3 className="text-neutral-100 font-semibold text-xl">{category.name}</h3>
              </div>
              <div className="ml-auto px-4 py-1.5 rounded-full bg-violet-500/12 border border-violet-400/18">
                <span className="text-xs text-violet-300 font-medium">AI-first workflow</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-400/22 text-violet-200 text-sm font-medium hover:bg-violet-500/18 hover:border-violet-400/45 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Other skill categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.slice(1).map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl px-6 py-7 hover:border-neutral-600/45 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">{category.icon}</span>
              <h3 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.18em]">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 + j * 0.03 }}
                  className="px-3 py-1.5 rounded-md bg-neutral-800/70 border border-neutral-700/45 text-neutral-300 text-xs font-medium hover:border-violet-500/35 hover:text-violet-300 hover:bg-violet-500/5 hover:-translate-y-px transition-all duration-150 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
