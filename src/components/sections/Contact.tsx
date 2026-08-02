import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { personal } from '../../data/personal';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

const contactLinks = [
  {
    id: 'contact-email-link',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: <Mail size={20} />,
    external: false,
  },
  {
    id: 'contact-linkedin-link',
    label: 'LinkedIn',
    value: 'gabrielle-santana-developer',
    href: personal.linkedin,
    icon: <LinkedinIcon size={20} />,
    external: true,
  },
  {
    id: 'contact-github-link',
    label: 'GitHub',
    value: 'santanagabi',
    href: personal.github,
    icon: <GithubIcon size={20} />,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Let's talk"
        description="Have a question or a role that might be a good fit? I'd love to hear from you."
      />

      <div className="grid sm:grid-cols-3 gap-5 mb-12">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.id}
            id={link.id}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="glass rounded-2xl px-7 py-8 flex flex-col gap-6 group transition-all duration-200 hover:border-neutral-600/45 hover:shadow-md hover:shadow-black/20"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-800/70 border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-violet-400 group-hover:border-violet-500/25 group-hover:bg-violet-500/5 transition-all duration-200">
              {link.icon}
            </div>
            <div>
              <p className="text-[11px] text-neutral-700 font-semibold uppercase tracking-[0.18em] mb-2">{link.label}</p>
              <p className="text-neutral-300 text-sm font-medium group-hover:text-violet-300 transition-colors duration-200 truncate">
                {link.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <Button id="contact-email-btn" variant="primary" href={`mailto:${personal.email}`}>
          <Mail size={15} />
          Send email
        </Button>
        <Button id="contact-linkedin-btn" variant="secondary" href={personal.linkedin} external>
          <LinkedinIcon size={15} />
          LinkedIn
          <ArrowUpRight size={13} className="text-neutral-500" />
        </Button>
      </motion.div>
    </Section>
  );
}
