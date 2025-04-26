import { AlbumsNav, ImagesGrid } from '@/components'
import { getAlbums, getArtistsByFolder } from '@/services/albums'
import { getImagesFromFolder } from '@/config/cloudinary'

export function generateStaticParams() {
  const albums = getAlbums()
  return albums.map((album) => ({
    id: album.folder,
  }))
}

export default async function AlbumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const artists = getArtistsByFolder(id)
  const images = await getImagesFromFolder({ folder: id })

  if (!artists) return null

  return (
    <div className="Album">
      <AlbumsNav />

      <div className="p-5">
        <h1 className="my-5 text-4xl font-extralight uppercase leading-none sm:text-6xl lg:text-center">
          {artists.map((artist, index) => (
            <div key={artist}>
              {artist}
              {index < artists.length - 1 && ', '}
            </div>
          ))}
        </h1>

        <ImagesGrid images={images} />
      </div>
    </div>
  )
}
