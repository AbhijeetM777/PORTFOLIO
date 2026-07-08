import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { useButtonClick } from '../../lib/useButtonClick'

interface ButtonProps {
  text: string
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: (e: React.MouseEvent) => void
  animate?: boolean
  animationDelay?: number
  className?: string
}

export function Button({
  text,
  variant = 'primary',
  href = '#',
  onClick,
  animate = true,
  animationDelay = 0,
  className = '',
}: ButtonProps) {
  const handleClick = useButtonClick(href, onClick)
  const link = (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer',
        variant === 'primary' ? 'primary-button text-primary-cta-text' : 'secondary-button text-secondary-cta-text',
        className
      )}
    >
      {text}
    </a>
  )

  if (!animate) return link

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay, ease: 'easeOut' }}
    >
      {link}
    </motion.div>
  )
}
