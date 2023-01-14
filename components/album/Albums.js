import cx from 'classnames'
import { Album } from 'components/album'

export default function Albums({ albums, activeID, className }) {
  return (
    <div
      className={cx(
        'Albums xl:w-full flex gap-2 snap-x overflow-x-auto',
        '-mx-5 px-5 xl:mx-0 xl:p-0',
        className
      )}>
      {albums.map((album, i) => (
        <Album
          className='snap-proximity shrink-0 w-[45%] xs:w-2/5 max-w-[230px]'
          album={album}
          active={album.folder === activeID}
          key={i}
        />
      ))}
    </div>
  )
}
