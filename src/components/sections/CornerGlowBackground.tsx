import { cn } from '../../lib/utils'

interface CornerGlowBackgroundProps {
  position: 'fixed' | 'absolute'
}

export function CornerGlowBackground({ position }: CornerGlowBackgroundProps) {
  return (
    <div
      className={cn(
        position,
        'inset-0 -z-10 overflow-hidden pointer-events-none select-none',
        position === 'absolute' && 'mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'
      )}
      aria-hidden="true"
    >
      <div
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-9/10 md:w-6/10 aspect-square rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle at center, var(--color-background-accent) 35%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-9/10 md:w-6/10 aspect-square rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle at center, var(--color-background-accent) 35%, transparent 70%)' }}
      />
    </div>
  )
}
