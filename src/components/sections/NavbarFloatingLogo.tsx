import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'

interface NavItem {
  name: string
  href: string
}

interface NavbarFloatingLogoProps {
  logo: string
  logoImageSrc: string
  navItems: NavItem[]
  ctaButton: { text: string; href: string }
}

function navigate(e: React.MouseEvent, href: string, onDone?: () => void) {
  if (href.startsWith('#')) {
    e.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  onDone?.()
}

export function NavbarFloatingLogo({ logo, logoImageSrc, navItems, ctaButton }: NavbarFloatingLogoProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-999 bg-foreground"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
      <nav className="fixed z-1000 top-5 left-1/2 -translate-x-1/2 w-content-width">
        <div className="mx-auto w-full md:w-1/2 overflow-hidden rounded backdrop-blur-sm card">
          <div className="relative z-10 flex items-center justify-between gap-3 xl:gap-4 2xl:gap-5 p-3 xl:p-4 2xl:p-5">
            <a href="/" className="flex items-center gap-2">
              <img src={logoImageSrc} alt={logo} className="h-8 w-8 rounded-full object-cover" />
              <span className="text-xl font-medium text-foreground">{logo}</span>
            </a>
            <button
              className="flex items-center justify-center shrink-0 size-9 rounded cursor-pointer primary-button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <X
                className={cn('w-1/2 h-1/2 text-primary-cta-text transition-transform duration-300', open ? 'rotate-45' : 'rotate-0')}
                strokeWidth={1.5}
              />
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 p-3 xl:p-4 2xl:p-5 pt-0 xl:pt-0 2xl:pt-0">
                  <div className="px-3 xl:px-4 2xl:px-5 py-0 md:py-1 2xl:py-2 rounded card">
                    {navItems.map((item, i) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => navigate(e, item.href, () => setOpen(false))}
                          className="group flex items-center justify-between py-3 w-full"
                        >
                          <span className="text-xl md:text-2xl font-medium text-foreground group-hover:ml-3 transition-[margin] duration-300">
                            {item.name}
                          </span>
                          <ArrowUpRight
                            className="h-(--text-xl) md:h-(--text-2xl) w-auto text-foreground group-hover:rotate-45 group-hover:mr-3 transition-all duration-300"
                            strokeWidth={2}
                          />
                        </a>
                        {i < navItems.length - 1 && <div className="h-px bg-accent/50" />}
                      </div>
                    ))}
                  </div>
                  <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} className="w-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}
