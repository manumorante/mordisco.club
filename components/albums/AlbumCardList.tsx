import { AlbumType } from '@/types'
import cx from 'clsx'
import Container from '../ui/Container'
import AlbumCard from './AlbumCard'

type Props = {
  albums: AlbumType[]
  activeID: string
  isTop: boolean
}

function AlbumCardList({ albums, activeID, isTop }: Props) {
  const mainCx = cx(
    'Albums',

    'xl:sticky',
    'xl:top-header-sm',
    'xl:z-20',

    'bg-black-800/80 backdrop-saturate-150 backdrop-blur-xl',

    'w-full'
  )

  const containerCx = cx('xl:mx-auto max-w-6xl')

  const contentCx = cx('flex', 'gap-2', 'snap-x', 'overflow-x-auto', 'px-4 py-4')

  return (
    <div className={mainCx}>
      <div className={containerCx}>
        <div className={contentCx}>
          {albums.map((album, i) => (
            <AlbumCard
              className={cx('snap-proximity shrink-0')}
              album={album}
              active={album.folder === activeID}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlbumCardList
