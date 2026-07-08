import { Video } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const icons: Record<string, IconType> = {
  Twitter: FaTwitter,
  Linkedin: FaLinkedin,
  Instagram: FaInstagram,
  Video,
}

export function resolveIcon(name: string): IconType {
  return icons[name] ?? FaTwitter
}
