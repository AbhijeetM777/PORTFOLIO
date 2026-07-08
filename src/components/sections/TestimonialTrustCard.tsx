import { Star } from 'lucide-react'
import { cn } from '../../lib/utils'
import { ScrollReveal } from '../ui/ScrollReveal'
import { TextAnimation } from '../ui/TextAnimation'
import { ImageOrVideo } from '../ui/ImageOrVideo'

interface Avatar {
  name: string
  imageSrc?: string
  videoSrc?: string
}

interface TestimonialTrustCardProps {
  quote: string
  rating: number
  author: string
  avatars: Avatar[]
}

export function TestimonialTrustCard({ quote, rating, author, avatars }: TestimonialTrustCardProps) {
  const shown = avatars.slice(0, 6)
  const overflow = avatars.length - shown.length

  return (
    <section aria-label="Testimonials section" className="py-20">
      <div className="flex flex-col items-center gap-5 w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn('size-6 text-accent', i < rating ? 'fill-accent' : 'fill-transparent')} strokeWidth={1.5} />
          ))}
        </ScrollReveal>
        <TextAnimation
          text={quote}
          variant="slide-up"
          tag="p"
          className="md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
        />
        <ScrollReveal variant="slide-up" delay={0.1} className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance">
          <p>{author}</p>
        </ScrollReveal>
        <ScrollReveal variant="slide-up" delay={0.2} className="flex items-center justify-center mt-1">
          {shown.map((avatar, i) => (
            <div
              key={avatar.name}
              className={cn('relative size-12 md:size-16 overflow-hidden rounded-full border-2 border-background', i > 0 && '-ml-5')}
              style={{ zIndex: shown.length - i }}
            >
              <ImageOrVideo imageSrc={avatar.imageSrc} videoSrc={avatar.videoSrc} />
            </div>
          ))}
          {overflow > 0 && (
            <div
              className="flex items-center justify-center size-12 md:size-16 -ml-5 rounded-full border-2 border-background card"
              style={{ zIndex: 0 }}
            >
              <span className="text-sm md:text-base font-semibold">+{overflow}</span>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
