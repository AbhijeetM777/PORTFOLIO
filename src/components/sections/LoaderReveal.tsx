import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface LoaderRevealProps {
  imageSrc: string
  title: string
  onComplete?: () => void
}

export function LoaderReveal({ imageSrc, title, onComplete }: LoaderRevealProps) {
  const [visible, setVisible] = useState(true)
  const [barFilled, setBarFilled] = useState(false)

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div className="fixed inset-0 z-100 text-primary-cta-text">
          <motion.div
            className="absolute inset-0 w-full h-full bg-background-accent"
            exit={{ y: '-101%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-primary-cta-text"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: barFilled ? 0 : 1 }}
              style={{ originX: barFilled ? 1 : 0 }}
              transition={{ duration: barFilled ? 0.5 : 3, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => {
                if (barFilled) {
                  setVisible(false)
                } else {
                  setBarFilled(true)
                }
              }}
            />
          </motion.div>
          <motion.div
            className="relative z-2 flex flex-col justify-center items-center w-full h-full gap-4 md:gap-5"
            animate={barFilled ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-px rounded-full">
              <img src={imageSrc} alt="" className="size-12 md:size-16 rounded-full object-cover" />
            </div>
            <div className="relative flex justify-center items-center">
              <span className="absolute text-center text-2xl md:text-4xl font-medium tracking-tight opacity-20">
                {title}
              </span>
              <motion.span
                className="text-2xl md:text-4xl font-medium tracking-tight"
                initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 3, ease: [0.76, 0, 0.24, 1] }}
              >
                {title}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
