import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  id?: string;
}

const variantStyles = {
  primary:
    'bg-violet-600 hover:bg-violet-500 text-white border-transparent shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:shadow-xl',
  secondary:
    'bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-200 border-neutral-700 hover:border-neutral-500 hover:text-white',
  ghost:
    'bg-transparent hover:bg-neutral-800/60 text-neutral-400 hover:text-neutral-100 border-neutral-800 hover:border-neutral-600',
};

export function Button({
  children,
  variant = 'secondary',
  href,
  onClick,
  className = '',
  external = false,
  id,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseStyles}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      className={baseStyles}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
}
