import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface AutoFillTextProps {
  children: string
  className?: string
  paddingY?: string
}

export function AutoFillText({ children, className = '', paddingY = 'py-10' }: AutoFillTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [fontSize, setFontSize] = useState<number | null>(null)
  const hasDescender = /[gjpqy]/.test(children)
  const lineHeight = hasDescender ? 1.2 : 0.8

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    const measure = () => {
      const width = container.offsetWidth
      if (width === 0) return
      const canvas = document.createElement('canvas').getContext('2d')
      if (!canvas) return
      const style = getComputedStyle(text)
      canvas.font = `${style.fontWeight} 100px ${style.fontFamily}`
      const textWidth = canvas.measureText(children).width
      if (textWidth > 0) setFontSize((width / textWidth) * 100)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [children])

  return (
    <div ref={containerRef} className={cn('w-full min-w-0 flex-1', !hasDescender && paddingY)}>
      <h2
        ref={textRef}
        className={cn('whitespace-nowrap transition-opacity duration-150', fontSize ? 'opacity-100' : 'opacity-0', className)}
        style={{ fontSize: fontSize ? `${fontSize}px` : undefined, lineHeight }}
      >
        {children as ReactNode}
      </h2>
    </div>
  )
}
