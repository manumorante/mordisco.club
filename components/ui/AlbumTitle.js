import Link from 'next/link'

export default function AlbumTitle({ album }) {
  return (
    <Link href={`/album/${album.folder}`} className='inline-block py-10'>
      {album.title && (
        <h3 className='font-extralight text-4xl xs:text-5xl sm:text-6xl uppercase'>
          {album.title}
        </h3>
      )}

      <h2 className='font-extralight text-xl xs:text-2xl uppercase'>
        <span className='opacity-80'>{album.month}</span>{' '}
        <span className='opacity-60'>{album.year}</span>
      </h2>
    </Link>
  )
}
