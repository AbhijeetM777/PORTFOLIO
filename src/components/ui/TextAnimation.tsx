import { useEffect, useState, type ElementType } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '../../lib/utils'

type Variant = 'slide-up' | 'fade-blur' | 'fade'

const wordVariants: Record<Variant, Variants> = {
  'slide-up': { hidden: { opacity: 0, y: '50%' }, visible: { opacity: 1, y: 0 } },
  'fade-blur': { hidden: { opacity: 0, filter: 'blur(10px)' }, visible: { opacity: 1, filter: 'none' } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

const easeByVariant: Record<Variant, [number, number, number, number]> = {
  'slide-up': [0.25, 0.46, 0.45, 0.94],
  'fade-blur': [0.45, 0, 0.55, 1],
  fade: [0.45, 0, 0.55, 1],
}

interface TextAnimationProps {
  text: string
  variant: Variant
  gradientText?: boolean
  tag?: ElementType
  className?: string
}

export function TextAnimation({ text, variant, gradientText = false, tag = 'p', className = '' }: TextAnimationProps) {
  const Tag = motion.create(tag)
  const words = text.split(' ')
  const [hasAnimated, setHasAnimated] = useState(false)
  const [showGradient, setShowGradient] = useState(false)
  const gradientClasses = gradientText
    ? 'bg-gradient-to-r from-foreground to-primary-cta bg-clip-text text-transparent pb-[0.1em] -mb-[0.1em]'
    : ''

  useEffect(() => {
    if (hasAnimated && !showGradient) {
      const timeout = setTimeout(() => setShowGradient(true), variant === 'fade-blur' && gradientText ? 0 : 700)
      return () => clearTimeout(timeout)
    }
  }, [hasAnimated, showGradient, variant, gradientText])

  if (showGradient) {
    return (
      <Tag className={cn('leading-[1.2]', gradientClasses, className)} initial={false}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag
      className={cn('leading-[1.2] transition-all duration-700', hasAnimated && gradientClasses, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
      transition={{ staggerChildren: 0.04 }}
      onAnimationComplete={() => setHasAnimated(true)}
    >
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && ' '}
          <motion.span
            className="inline-block"
            variants={wordVariants[variant]}
            transition={{ duration: 0.6, ease: easeByVariant[variant] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
