import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  className?: string;
  hoverEffect?: boolean;
  doubleBezel?: boolean;
}

export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  doubleBezel = false,
  ...props
}: GlassCardProps) {
  if (doubleBezel) {
    return (
      <div className={`rounded-[1.5rem] bg-white/[0.02] p-[1px] ring-1 ring-white/[0.06] ${className}`}>
        <motion.div
          className="rounded-[calc(1.5rem-1px)] bg-[#0a0d1f]/90 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] h-full"
          whileHover={hoverEffect ? {
            y: -4,
            backgroundColor: 'rgba(15, 18, 40, 0.95)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 50px -20px rgba(139, 92, 246, 0.3)',
            transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
          } : {}}
          transition={{ duration: 0.3 }}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={`
        backdrop-blur-xl
        bg-white/[0.03]
        border border-white/[0.06]
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        rounded-2xl
        ${className}
      `}
      whileHover={hoverEffect ? {
        y: -5,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderColor: 'rgba(255, 255, 255, 0.12)',
        boxShadow: '0 20px 60px 0 rgba(0,0,0,0.5)',
        transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
      } : {}}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
