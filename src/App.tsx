import { motion } from 'framer-motion'
import { siteContent } from './data/content'
import { LoaderReveal } from './components/sections/LoaderReveal'
import { CornerGlowBackground } from './components/sections/CornerGlowBackground'
import { NavbarFloatingLogo } from './components/sections/NavbarFloatingLogo'
import { HeroWorkScrollStack } from './components/sections/HeroWorkScrollStack'
import { TestimonialTrustCard } from './components/sections/TestimonialTrustCard'
import { AboutTestimonialParallax } from './components/sections/AboutTestimonialParallax'
import { FeaturesBentoGridCta } from './components/sections/FeaturesBentoGridCta'
import { FaqTabbedAccordion } from './components/sections/FaqTabbedAccordion'
import { ContactSplitFormParallax } from './components/sections/ContactSplitFormParallax'
import { FooterMinimal } from './components/sections/FooterMinimal'

function App() {
  return (
    <>
      <LoaderReveal imageSrc={siteContent.avatarSrc} title={siteContent.brand} />
      <CornerGlowBackground position="fixed" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavbarFloatingLogo {...siteContent.nav} />
      </motion.div>

      <HeroWorkScrollStack heroAnimationDelay={4} {...siteContent.hero} />

      <TestimonialTrustCard {...siteContent.testimonial} />

      <div id="about" data-section="about">
        <AboutTestimonialParallax {...siteContent.about} />
      </div>

      <div id="services" data-section="services">
        <FeaturesBentoGridCta {...siteContent.services} />
      </div>

      <FaqTabbedAccordion {...siteContent.faq} />

      <div id="contact" data-section="contact">
        <ContactSplitFormParallax {...siteContent.contact} />
      </div>

      <FooterMinimal {...siteContent.footer} />
    </>
  )
}

export default App
