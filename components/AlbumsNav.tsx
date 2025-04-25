'use client'

import { useScrollRestoration } from '@/hooks/useScrollRestoration'
import { getAlbums } from '@/lib/albums'
import cx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AlbumsNav() {
  const pathname = usePathname()
  const albums = getAlbums()
  const [ref] = useScrollRestoration()

  return (
    <div ref={ref} className="sticky top-3 flex gap-2 overflow-x-auto px-3 pb-3 lg:justify-center">
      {albums.map((album) => {
        const href = `/album/${album.folder}`
        const isActive = pathname === href
        const className = cx(
          { 'bg-neutral-800 lg:hover:bg-black-500': !isActive },
          { 'bg-white text-black font-bold lg:hover:bg-black-500': isActive },
          'transition-colors px-3 py-1.5 text-sm leading-tight uppercase rounded-lg',
          'flex items-center justify-center whitespace-nowrap',
        )
        return (
          <Link className={className} href={href} key={album.folder}>
            <span>{album.artists[0]}</span>
          </Link>
        )
      })}
    </div>
  )
}
