import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'slide-up' | 'fade-blur' | 'fade'

const variants: Record<Variant, Variants> = {
  'slide-up': { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  'fade-blur': { hidden: { opacity: 0, filter: 'blur(10px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

interface ScrollRevealProps {
  children: ReactNode
  variant: Variant
  delay?: number
  className?: string
}

export function ScrollReveal({ children, variant, delay = 0, className = '' }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
      variants={variants[variant]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
