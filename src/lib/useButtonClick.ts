export function useButtonClick(href: string, onClick?: (e: React.MouseEvent) => void) {
  return (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClick?.(e)
  }
}
