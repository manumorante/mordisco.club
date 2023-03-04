import { AlbumType } from '@/types'
import cx from 'classnames'
import AlbumCard from './AlbumCard'

type Props = {
  albums: AlbumType[]
  activeID: string
  className?: string
}

function AlbumCardList({ albums, activeID, className }: Props) {
  return (
    <div
      className={cx(
        'Albums',
        'w-full',
        'flex',
        'gap-2',
        'snap-x',
        'overflow-x-auto',
        'px-4 py-6',
        'bg-stone-900',
        className
      )}>
      {albums.map((album, i) => (
        <AlbumCard
          className='snap-proximity shrink-0 w-[45%] xs:w-2/5 max-w-[230px]'
          album={album}
          active={album.folder === activeID}
          key={i}
        />
      ))}
    </div>
  )
}

export default AlbumCardList
