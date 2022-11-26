import cx from 'classnames'
import { routes } from 'data'
import { photoUrl } from '@/lib/cloudinary/url.js'
import Image from 'next/image'
import Link from 'next/link'

export default function Album({ album, active, className }) {
  if (!album) return null

  const width = 230
  const height = width
  const coverSrc = album?.cover
    ? photoUrl({ url: album.cover, width, height, dpr: 2 })
    : routes.defaultCover

  return (
    <Link
      href={`/album/${album.folder}`}
      className={cx(
        'Album',
        'relative w-ful h-auto rounded-md flex flex-col gap-2',
        'transition-all duration-500 ease-in-out',
        {
          'opacity-50 scale-90': !active,
        },
        className
      )}>
      <div className='w-full max-w-xs aspect-square relative'>
        {coverSrc && (
          <Image
            className='w-full h-full object-cover rounded-md border border-white/50 sm:border-none'
            src={coverSrc}
            width={width}
            height={height}
            priority={true}
            alt='Cover'
          />
        )}

        <span
          className={cx(
            'absolute right-0 bottom-0 left-0',
            'p-3',
            'text-base leading-[14px]',
            'xs:text-lg xs:leading-4',
            'sm:text-3xl sm:leading-7',
            'bg-gradient-to-t from-black/80'
          )}>
          {album.title}
        </span>
      </div>

      {/* <div className='text-sm sm:text-base font-light leading-tight uppercase'>
        <span className=''>{album.month}</span>
        <span className='ml-1 text-gray-400'>{album.year}</span>
      </div> */}
    </Link>
  )
}
