import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { TextAnimation } from '../ui/TextAnimation'
import { ImageOrVideo } from '../ui/ImageOrVideo'
import { resolveIcon } from '../../lib/resolveIcon'
import { useButtonClick } from '../../lib/useButtonClick'
import { sendContactMessage } from '../../lib/sendContactMessage'

interface Input {
  name: string
  type: string
  placeholder: string
  required?: boolean
}

interface Textarea {
  name: string
  placeholder: string
  rows?: number
  required?: boolean
}

interface CtaLink {
  icon: string
  label: string
  href: string
}

interface ContactSplitFormParallaxProps {
  tag: string
  title: string
  description: string
  inputs: Input[]
  textarea?: Textarea
  buttonText: string
  imageSrc?: string
  videoSrc?: string
  ctaLinks?: CtaLink[]
  onSubmit?: (data: Record<string, string>) => void
}

function CtaPill({ icon, label, href }: CtaLink) {
  const Icon = resolveIcon(icon)
  const handleClick = useButtonClick(href)
  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center justify-center gap-2 h-9 px-3 text-sm rounded-full cursor-pointer backdrop-blur-xl bg-primary-cta-text/15 border border-primary-cta-text/20 text-primary-cta-text font-semibold hover:bg-primary-cta-text/25 transition-all duration-300 ease-out"
    >
      <Icon className="size-4" strokeWidth={1.5} />
      <span>{label}</span>
    </a>
  )
}

export function ContactSplitFormParallax({
  tag,
  title,
  description,
  inputs,
  textarea,
  buttonText,
  imageSrc,
  videoSrc,
  ctaLinks,
  onSubmit,
}: ContactSplitFormParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const initialState = (): Record<string, string> => {
    const state: Record<string, string> = {}
    inputs.forEach((input) => (state[input.name] = ''))
    if (textarea) state[textarea.name] = ''
    return state
  }
  const [values, setValues] = useState<Record<string, string>>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await sendContactMessage({ formData: values })
      onSubmit?.(values)
      setValues(initialState())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.3, 1])

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 md:p-10 card rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>{tag}</p>
                </div>
                <TextAnimation
                  text={title}
                  variant="slide-up"
                  gradientText
                  tag="h2"
                  className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
                />
                <TextAnimation
                  text={description}
                  variant="slide-up"
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance"
                />
              </div>
              <div className="flex flex-col gap-3">
                {inputs.map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={values[input.name] || ''}
                    onChange={(e) => setValues({ ...values, [input.name]: e.target.value })}
                    required={input.required}
                    aria-label={input.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded"
                  />
                ))}
                {textarea && (
                  <textarea
                    placeholder={textarea.placeholder}
                    value={values[textarea.name] || ''}
                    onChange={(e) => setValues({ ...values, [textarea.name]: e.target.value })}
                    required={textarea.required}
                    rows={textarea.rows || 5}
                    aria-label={textarea.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none resize-none card rounded"
                  />
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center w-full h-10 px-6 text-sm rounded primary-button text-primary-cta-text cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : buttonText}
                </button>
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
              </div>
            </form>
          </div>
          <div ref={ref} className="relative h-100 md:h-auto card rounded overflow-hidden">
            <motion.div style={{ scale }} className="w-full h-full origin-center">
              <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="md:absolute md:inset-0 size-full object-cover" />
            </motion.div>
            {ctaLinks && ctaLinks.length > 0 && (
              <div className="absolute inset-0 flex flex-wrap items-end justify-center gap-3 p-6 xl:p-7 2xl:p-8">
                {ctaLinks.map((link) => (
                  <CtaPill key={link.label} {...link} />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
