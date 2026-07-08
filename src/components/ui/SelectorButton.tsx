import { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

interface Option {
  value: string
  label: string
}

interface SelectorButtonProps {
  options: Option[]
  activeValue: string
  onValueChange: (value: string) => void
  className?: string
}

export function SelectorButton({ options, activeValue, onValueChange, className }: SelectorButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const indicator = indicatorRef.current
    if (!container || !indicator) return

    const position = (button: Element | null) => {
      if (!button) return
      const buttonRect = button.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      indicator.style.width = `${buttonRect.width}px`
      indicator.style.transform = `translateX(${buttonRect.left - containerRect.left}px)`
    }

    const update = () => {
      const active = container.querySelector(`[data-value="${activeValue}"]`)
      position(active)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(container)
    return () => observer.disconnect()
  }, [activeValue])

  return (
    <div ref={containerRef} className={cn('relative inline-flex gap-1 p-1 card rounded-full', className)}>
      {options.map((option) => (
        <button
          key={option.value}
          data-value={option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(
            'relative z-1 px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-300',
            activeValue === option.value ? 'text-primary-cta-text' : 'text-foreground hover:text-foreground/80'
          )}
        >
          {option.label}
        </button>
      ))}
      <div
        ref={indicatorRef}
        className="absolute z-0 inset-y-1 left-0 rounded-full primary-button pointer-events-none transition-all duration-300 ease-out"
      />
    </div>
  )
}
