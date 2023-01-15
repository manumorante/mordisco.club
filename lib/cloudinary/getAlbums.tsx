import { ALBUMS } from 'data'
import { getImagesFromFolder } from 'lib/cloudinary/directory'
import { AlbumType } from '@/types'

export async function getAlbums() {
  const albums: AlbumType[] = [...ALBUMS]
  await Promise.all(
    albums.map(async (album) => {
      const images = await getImagesFromFolder(album.folder)

      if (images && images?.length > 0) {
        album.images = images
        album.length = images.length
      }
    })
  )

  return albums
}
