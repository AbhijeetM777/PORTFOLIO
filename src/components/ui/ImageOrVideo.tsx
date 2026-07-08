import { cn } from '../../lib/utils'

interface ImageOrVideoProps {
  imageSrc?: string
  videoSrc?: string
  className?: string
}

export function ImageOrVideo({ imageSrc, videoSrc, className = '' }: ImageOrVideoProps) {
  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        aria-label={videoSrc}
        className={cn('w-full h-full min-h-0 object-cover rounded', className)}
        autoPlay
        loop
        muted
        playsInline
      />
    )
  }
  if (imageSrc) {
    return <img src={imageSrc} alt="" className={cn('w-full h-full min-h-0 object-cover rounded', className)} />
  }
  return null
}
