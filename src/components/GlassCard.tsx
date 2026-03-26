
import { motion, HTMLMotionProps } from 'framer-motion';
interface GlassCardProps extends HTMLMotionProps<'div'> {
  className?: string;
  hoverEffect?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  return <motion.div className={`
        backdrop-blur-md 
        bg-white/5 
        border border-white/10 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
        rounded-2xl 
        ${className}
      `} whileHover={hoverEffect ? {
    y: -5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 15px 40px 0 rgba(0,0,0,0.45)'
  } : {}} transition={{
    duration: 0.3
  }} {...props}>
      {children}
    </motion.div>;
}