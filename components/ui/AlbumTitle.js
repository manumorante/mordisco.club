export default function AlbumTitle({ album }) {
  return (
    <div className='py-10'>
      <h2 className='font-extralight text-3xl uppercase'>
        {album.month} <span className='opacity-60'>{album.year}</span>
      </h2>

      {album.title && <h3 className='font-extralight text-6xl uppercase'>{album.title}</h3>}
    </div>
  )
}
