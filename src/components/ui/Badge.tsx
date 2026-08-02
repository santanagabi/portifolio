interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'violet' | 'emerald' | 'outline';
  size?: 'sm' | 'md';
}

const variantStyles = {
  default: 'bg-neutral-800 text-neutral-300 border-neutral-700',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  outline: 'bg-transparent text-neutral-400 border-neutral-700',
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
};

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border font-medium ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}
