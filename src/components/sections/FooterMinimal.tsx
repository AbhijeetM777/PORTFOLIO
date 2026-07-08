import { resolveIcon } from '../../lib/resolveIcon'
import { useButtonClick } from '../../lib/useButtonClick'
import { AutoFillText } from '../ui/AutoFillText'

interface SocialLink {
  icon: string
  href: string
}

interface FooterMinimalProps {
  brand: string
  copyright: string
  socialLinks: SocialLink[]
}

function SocialIconButton({ icon, href }: SocialLink) {
  const Icon = resolveIcon(icon)
  const handleClick = useButtonClick(href)
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text cursor-pointer"
    >
      <Icon className="size-4" strokeWidth={1.5} />
    </button>
  )
}

export function FooterMinimal({ brand, copyright, socialLinks }: FooterMinimalProps) {
  return (
    <footer aria-label="Site footer" className="relative w-full py-20">
      <div className="flex flex-col w-content-width mx-auto px-10 pb-5 rounded-lg card">
        <AutoFillText className="font-semibold" paddingY="py-5">
          {brand}
        </AutoFillText>
        <div className="h-px w-full mb-5 bg-foreground/50" />
        <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
          <span className="text-base opacity-75">{copyright}</span>
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <SocialIconButton key={i} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
