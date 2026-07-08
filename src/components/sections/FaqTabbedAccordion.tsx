import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Button } from '../ui/Button'
import { TextAnimation } from '../ui/TextAnimation'
import { ImageOrVideo } from '../ui/ImageOrVideo'
import { SelectorButton } from '../ui/SelectorButton'
import { Accordion } from '../ui/Accordion'

interface FaqItem {
  question: string
  answer: string
}

interface Category {
  name: string
  items: FaqItem[]
}

interface Cta {
  imageSrc?: string
  videoSrc?: string
  name: string
  role: string
  buttonText: string
  buttonHref: string
}

interface FaqTabbedAccordionProps {
  tag: string
  title: string
  description: string
  categories: Category[]
  cta?: Cta
}

export function FaqTabbedAccordion({ tag, title, description, categories, cta }: FaqTabbedAccordionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || '')
  const items = (categories.find((c) => c.name === activeCategory)?.items || []).map((item) => ({
    title: item.question,
    content: item.answer,
  }))

  return (
    <section aria-label="FAQ section" className="py-20">
      <div className="w-content-width mx-auto">
        <div className="card rounded flex flex-col gap-6 md:gap-10 p-6 md:p-10">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
            <TextAnimation
              text={title}
              variant="slide-up"
              gradientText
              tag="h2"
              className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />
            <TextAnimation
              text={description}
              variant="slide-up"
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
            />
            <SelectorButton
              options={categories.map((c) => ({ value: c.name, label: c.name }))}
              activeValue={activeCategory}
              onValueChange={setActiveCategory}
              className="mt-2 md:mt-3"
            />
          </div>
          <ScrollReveal variant="slide-up">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-15%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col w-full gap-6"
            >
              <Accordion items={items} />
            </motion.div>
          </ScrollReveal>
          {cta && (
            <>
              <div className="w-full h-px bg-foreground/5" />
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="flex items-center gap-3">
                  <ImageOrVideo
                    imageSrc={cta.imageSrc}
                    videoSrc={cta.videoSrc}
                    className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-base text-foreground font-semibold leading-snug truncate">{cta.name}</span>
                    <span className="text-base text-foreground/75 leading-snug truncate">{cta.role}</span>
                  </div>
                </div>
                <Button text={cta.buttonText} href={cta.buttonHref} variant="primary" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
