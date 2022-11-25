import Album from '@/ui/Album'

export default function Albums({ albums, activeID, className }) {
  return (
    <div className={`Albums w-full flex gap-2 snap-x overflow-x-auto ${className}`}>
      {albums.map((album, i) => (
        <Album
          className='snap-proximity shrink-0 w-2/5'
          album={album}
          active={album.folder === activeID}
          key={i}
        />
      ))}
    </div>
  )
}
