import cx from 'clsx'
import Link from 'next/link'
import { routes } from 'data'
import { photoUrl } from '@/lib/cloudinary/url'
import { AlbumType } from '@/types'

type Props = {
  album: AlbumType
  active: boolean
  className: string
}

function AlbumCard({ album, active, className }: Props) {
  if (!album) return null

  const width = 230
  const height = width
  const coverSrc = album?.cover
    ? photoUrl({ url: album.cover, width, height, dpr: 2 })
    : routes.defaultCover

  return (
    <Link
      href={{
        pathname: '/',
        query: { albumID: album.folder },
      }}
      className={cx(
        'Album',
        'relative h-auto rounded-md flex flex-col gap-2',
        'overflow-hidden',
        'transition-all duration-500 ease-in-out',
        {
          'scale-90': !active,
        },

        'w-[140px]',
        'md:w-[160px]',
        'xl:w-[200px]',
        className
      )}>
      <div className='w-full max-w-xs aspect-square relative'>
        {coverSrc && (
          <img
            className='w-full h-full object-cover'
            src={coverSrc}
            width={width}
            height={height}
            alt='Cover'
          />
        )}

        <div
          className={cx(
            // Position
            'absolute',
            'right-0',
            'bottom-0',
            'left-0',

            'p-3',

            'text-base leading-[14px]',
            'xs:text-lg xs:leading-4',
            'sm:text-3xl sm:leading-7',

            'bg-gradient-to-t via-black-800 from-black-900'
          )}>
          {album.title}
        </div>
      </div>

      {/* <div className='text-sm sm:text-base font-light leading-tight uppercase'>
        <span className=''>{album.month}</span>
        <span className='ml-1 text-gray-400'>{album.year}</span>
      </div> */}
    </Link>
  )
}

export default AlbumCard
