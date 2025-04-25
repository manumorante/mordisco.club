import { getAlbums } from '@/lib/albums'
import Link from 'next/link'

export default function Home() {
  const albums = getAlbums()

  return (
    <div className="flex gap-2 overflow-x-auto px-3 pb-3 lg:justify-center">
      {albums.map((album) => (
        <Link
          className="bg-black-700 lg:hover:bg-black-500 flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm uppercase leading-tight transition-colors"
          href={`/album/${album.folder}`}
          key={album.folder}>
          <span>{album.artists[0]}</span>
        </Link>
      ))}
    </div>
  )
}
