import cx from 'classnames'
import { routes } from 'data'
import { photoUrl } from '@/lib/cloudinary/url.js'
import Image from 'next/image'
import Link from 'next/link'

export default function Album({ album, active, className }) {
  if (!album) return null

  const width = 320
  const height = 320
  const coverSrc = album?.cover
    ? photoUrl({ url: album.cover, width, height, dpr: 2 })
    : routes.defaultCover

  return (
    <Link
      href={`/album/${album.folder}`}
      className={cx(
        'Album',
        'relative w-ful max-w-xs h-auto rounded-md flex flex-col gap-2',
        'transition-all duration-500 ease-in-out',
        {
          'opacity-50 scale-90': !active,
        },
        className
      )}>
      {coverSrc && (
        <Image
          className='border border-white/20 rounded-md w-full max-w-xs h-auto object-cover aspect-square'
          src={coverSrc}
          width={width}
          height={height}
          priority={true}
          alt='Cover'
        />
      )}

      <div className='px-1 flex flex-col'>
        {/* Date */}
        <div className='text-sm sm:text-base font-light leading-tight uppercase'>
          <span className=''>{album.month}</span>
          <span className='ml-1 text-gray-400'>{album.year}</span>
        </div>
        {/* Title */}
        <span className='uppercase text-sm sm:text-xl'>{album.title}</span>{' '}
      </div>
    </Link>
  )
}
