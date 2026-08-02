import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';

const languages = [
  { name: 'Portuguese', level: 'Native', flag: '🇧🇷', proficiency: 100, color: 'from-green-500 to-emerald-400' },
  { name: 'English',    level: 'B2 · Upper Intermediate', flag: '🇺🇸', proficiency: 75, color: 'from-blue-500 to-violet-400' },
  { name: 'Spanish',   level: 'Intermediate', flag: '🇪🇸', proficiency: 50, color: 'from-amber-500 to-orange-400' },
];

export function Languages() {
  return (
    <Section id="languages">
      <SectionHeader label="Languages" title="Communication" />

      <div className="grid sm:grid-cols-3 gap-6">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl px-7 py-9 text-center hover:border-neutral-600/35 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="text-5xl mb-6">{lang.flag}</div>
            <h3 className="text-neutral-100 font-semibold text-base mb-2">{lang.name}</h3>
            <p className="text-neutral-600 text-sm mb-8">{lang.level}</p>
            <div className="h-[3px] rounded-full bg-neutral-800/80 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15 + 0.2, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
